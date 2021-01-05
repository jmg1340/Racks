port = function (objPort){

	var _amplada = objPort.ampladaPort;
	var _altura  = objPort.alturaPort;
	var _numPort    = objPort.numPort;
	var _panelPort = objPort.panelPort;


	// es determina quan es pinta l'objecte
	var _paper = null;
	var _coordenades = {};
	var _ampladaPort = 0;
	var _alturaPort  = 0;
	var _color       = "";
	var _objectePintat = null;

	return{
		numPort     : function(){return _numPort;},
		panelPort   : function(){return _panelPort;},
		
		paper       : function(){return _paper;},
		coordenades : function(){return _coordenades;},
		ampladaPort : function(){return _ampladaPort;},
		alturaPort  : function(){return _alturaPort;},
		color       : function(){return _color;},

		objectePintat: function(){return _objectePintat;},

		pintaPort: function(parametres){
			_paper       = parametres.paper;
			_coordenades = parametres.coordenadesPort;
			_ampladaPort = parametres.ampladaPorts;
			_alturaPort  = parametres.alturaPorts;
			_color       = parametres.colorPort;

			var pPort   = paper.rect(_coordenades.x, _coordenades.y, _ampladaPort, _alturaPort).attr({
				fill: _color
			});
			
			var numPort = paper.text((_coordenades.x + _ampladaPort / 2), (_coordenades.y + _alturaPort / 2), _numPort);
			
			
			_objectePintat = pPort;

/*
			if ($.inArray(_panelPort.roseta, matriuRosetasPachpanels) != -1){
				pPort.mouseover (function(){ 
					pPort.attr("fill", "red");
				});


				pPort.mouseout (function(){ 
					pPort.attr("fill", _color);
				});

			}
*/

			return false;
		},
		
	};
}






switchSG300 = function(objSwitch){

	var _nom			  = objSwitch.nom;
	var _ip 			  = objSwitch.ip;
	var _posicioInicial	  = objSwitch.posicioInicial;
	var _portsVlanRDL	  = objSwitch.portsVlanRDL;
	var _portsVlanINTERNET= objSwitch.portsVlanINTERNET;
	var _switchPorts	  = objSwitch.switchPorts;

	var _coordenades   = {};
	var _ampladaSw = 0;
	var _alturaSw  = 0;
	
	var _ampladaPorts     = 0;
	var _alturaPorts      = 0;
	var _espaiEntrePorts  = 0;
	//var _arrayPorts       = [];



	return{
		nom  	        : function(){return _nom;},
		ip  	        : function(){return _ip;},
		posicioInicial	: function(){return _posicioInicial;},
		switchPorts     : function(){return _switchPorts;},
		matriuPortsVlanInternet     : function(){return _portsVlanINTERNET;},
		matriuPortsVlanRDL     : function(){return _portsVlanRDL;},
		
		pintaSwitch: function(parametres){
			_paper     = parametres.paper;
			_coordenades   = parametres.coordenades;
			_ampladaSw = parametres.ampladaSwitch;
			_alturaSw  = parametres.alturaSwitch;
			
			
			var pSw = _paper.rect(_coordenades.x, _coordenades.y, _ampladaSw, _alturaSw).attr(
				{
					fill: "#38393a",
					stroke: "black",
					"stroke-width": 1
				});

			var dadesSw = paper.text(_coordenades.x + 5, _coordenades.y +_alturaSw / 2, _nom + "\n" + _ip).attr(
				{
					"font-size": 10,
					"text-anchor":"start",
					"fill": "white"
				});

			
			//Ports
			_ampladaPorts     = _ampladaSw * 0.03;
			_alturaPorts      = _alturaSw * 0.30;
			_espaiEntrePorts  = _ampladaSw * 0.01;


			var posicioXPort = _ampladaSw - _coordenades.x - _ampladaPorts * 14 - _espaiEntrePorts * 15;
			var posicioYPort = _coordenades.y;


			
			for (var i=0; i<_switchPorts.length; ++i){

				if (i<= 11){		// primera renglera de ports (del 1 al 12)
					posicioXPort += (i == 0) ? _espaiEntrePorts : _espaiEntrePorts + _ampladaPorts;
					posicioYPort = _coordenades.y + _alturaPorts / 2;
				}else if(i<=23){	// segona renglera de ports (del 13 al 24)
					if (i == 12) posicioXPort = _ampladaSw - _coordenades.x - _ampladaPorts * 14 - _espaiEntrePorts * 15;
					posicioXPort += (i == 12) ? _espaiEntrePorts : _espaiEntrePorts + _ampladaPorts;
					posicioYPort = _coordenades.y + _alturaSw - (_alturaPorts + _alturaPorts / 2);
				}else if (i==24){	//port 25
					var posicioXEnllaç = posicioXPort  + _ampladaPorts + (_espaiEntrePorts * 4);
					posicioXPort = posicioXEnllaç;
					posicioYPort = _coordenades.y + _alturaPorts / 2;
				}else if (i==25){	// port 26
					posicioXPort = posicioXEnllaç ;
					posicioYPort = _coordenades.y + _alturaSw - (_alturaPorts + _alturaPorts / 2);
				}else if (i==26){	// port 27
					posicioXPort = posicioXEnllaç + _espaiEntrePorts +  _ampladaPorts;
					posicioYPort = _coordenades.y + _alturaPorts / 2;
				}else if (i==27){	// port 28
					posicioXPort = posicioXEnllaç + _espaiEntrePorts +  _ampladaPorts;
					posicioYPort = _coordenades.y + _alturaSw - (_alturaPorts + _alturaPorts / 2);
				}
				
				posicioXPort=Math.round(posicioXPort);
				posicioYPort=Math.round(posicioYPort);

				//console.log("\tPORT " + (i+1) + "\tposicioXPort: " + posicioXPort + "\tposicioYPort: " + posicioYPort + "\tampladaPort: " + _arrayPorts[i].amplada() + "\talturaPort: " + _arrayPorts[i].altura());


				_switchPorts[i].pintaPort({
												paper: paper,
												coordenadesPort: {x: posicioXPort, y: posicioYPort},
												alturaPorts: _alturaPorts,
												ampladaPorts: _ampladaPorts,
											   	colorPort: function(){
															if($.inArray(i+1, _portsVlanINTERNET) != -1){ 
																return "lime";
															}else if($.inArray(i+1, _portsVlanRDL) != -1){ 
																return "#5dbcf7";
															}else{
																return "lightgray";
															}
														   }()
										   });
			
			}

			return false;
		}

	}; 
}









switchCatalyst3650 = function(objSwitch){

	var _nom			  = objSwitch.nom;
	var _ip 			  = objSwitch.ip;
	var _posicioInicial	  = objSwitch.posicioInicial;
	var _portsVlanRDL	  = objSwitch.portsVlanRDL;
	var _portsVlanINTERNET= objSwitch.portsVlanINTERNET;
	var _switchPorts	  = objSwitch.switchPorts;

	var _coordenades   = {};
	var _ampladaSw = 0;
	var _alturaSw  = 0;
	
	var _ampladaPorts     = 0;
	var _alturaPorts      = 0;
	var _espaiEntrePorts  = 0;
	//var _arrayPorts       = [];



	return{
		nom  	        : function(){return _nom;},
		ip  	        : function(){return _ip;},
		posicioInicial	: function(){return _posicioInicial;},
		switchPorts     : function(){return _switchPorts;},
		matriuPortsVlanInternet     : function(){return _portsVlanINTERNET;},
		matriuPortsVlanRDL     : function(){return _portsVlanRDL;},
		
		pintaSwitch: function(parametres){
			_paper     = parametres.paper;
			_coordenades   = parametres.coordenades;
			_ampladaSw = parametres.ampladaSwitch;
			_alturaSw  = parametres.alturaSwitch;
			
			
			var pSw = _paper.rect(_coordenades.x, _coordenades.y, _ampladaSw, _alturaSw).attr(
				{
					fill: "#f2f2f2",
					stroke: "black",
					"stroke-width": 1
				});

			var dadesSw = paper.text(_coordenades.x + 5, _coordenades.y +_alturaSw / 2, _nom + "\n" + _ip).attr(
				{
					"font-size": 10,
					"text-anchor":"start"
				});


			//Ports
			_ampladaPorts     = _ampladaSw * 0.03;
			_alturaPorts      = _alturaSw * 0.30;
			_espaiEntrePorts  = _ampladaSw * 0.01;


			var posicioXPort = _ampladaSw - _coordenades.x - _ampladaPorts * 14 - _espaiEntrePorts * 15;
			var posicioYPort = _coordenades.y;


			
			for (var i=0 ; i < _switchPorts.length; ++i){

				if (i<= 23){		// fins al port 24
					if(i % 2 === 0){	// ports amb numeros parells
						posicioXPort += (i == 0) ? _espaiEntrePorts : _espaiEntrePorts + _ampladaPorts;
						posicioYPort = _coordenades.y + _alturaPorts * 0.5;
					}else{				// ports amb numeros senars
						posicioYPort = _coordenades.y + _alturaSw - (_alturaPorts + _alturaPorts * 0.5);

					}
				}
				
				posicioXPort=Math.round(posicioXPort);
				posicioYPort=Math.round(posicioYPort);


				_switchPorts[i].pintaPort({
												paper: paper,
												coordenadesPort: {x: posicioXPort, y: posicioYPort},
												alturaPorts: _alturaPorts,
												ampladaPorts: _ampladaPorts,
											   	colorPort: function(){
															if($.inArray(i+1, _portsVlanINTERNET) != -1){ 
																return "lime";
															}else if($.inArray(i+1, _portsVlanRDL) != -1){ 
																return "#ff7070";
															}else{
																return "lightgray";
															}
														   }()
										   });
			}


			return false;
		}

	}; 
}











switchStack = function(objSwitchsStack){
	var _matriuSw = objSwitchsStack.switchs;
	var _posicioInicial = objSwitchsStack.posicioInicial;
	var _switchs= objSwitchsStack.switchs;

	var _ampladaStack = 0;
	var _alturaStack = 0;
	var _paper = null;


	return {
		amplada: function(){return _ampladaStack;},
		altura: function(){return _alturaStack;},
		posicioInicial: function(){return _posicioInicial},
		switchs:  function(){return _switchs},

		pintaStack: function(parametres){
			var _paper = parametres.paper;
			var _alturaStack = parametres.alturaSwitch * _matriuSw.length;
			var _ampladaStack = parametres.ampladaSwitch;
			var _coordenades = parametres.coordenades;

			var stack = _paper.rect(_coordenades.x, _coordenades.y,_ampladaStack,_alturaStack).attr({
				stroke: "blue",
				"stroke-width": 2
			});

			for (var i=0; i<_matriuSw.length; ++i){
				var sw = _matriuSw[i].pintaSwitch({
											paper: _paper, 
										   	coordenades: _coordenades, 
										   	ampladaSwitch: parametres.ampladaSwitch, 
										   	alturaSwitch: parametres.alturaSwitch
										  });
				_coordenades.y += parametres.alturaSwitch -1;
			}
			return false;
		}
	}


}



