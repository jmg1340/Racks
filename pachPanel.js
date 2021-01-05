pachPanel = function(objPchP){
	
	var _panelPorts     = objPchP.panelPorts;
	var _posicioInicial = objPchP.posicioInicial;

	// les següents variables, prenen el seu valor real quan es pinta el port
	var _paper = null;
	var _coordenades = {};
	var _ampladaPp = 0;
	var _alturaPp  = 0;

	return {
		posicioInicial: function(){return _posicioInicial;},
		panelPorts: function(){return _panelPorts;},

		pintaPachPanel: function(parametres){
			_paper = parametres.paper;
			_coordenades  = parametres.coordenades;
			_ampladaPp = parametres.ampladaSwitch;
			_alturaPp  = parametres.alturaSwitch;
			
			
			var pSw = _paper.rect(_coordenades.x, _coordenades.y, _ampladaPp, _alturaPp).attr(
				{
					fill: "#543c2e",
					stroke: "black",
					"stroke-width": 1
				});


			//calcul distancia horitzontal entre ports del patchPanel = (amplada Pachpanel - sumatori amplada ports) / (total ports + 1)
			var ampladaPorts  = _ampladaPp * 0.03;	// 3% amplada pach panel
			var sumatoriAmpladaPorts = ampladaPorts * _panelPorts.length;

			var distanciaHoritzontalEntrePorts = (_ampladaPp - sumatoriAmpladaPorts) / (_panelPorts.length + 1);

			//calcul distancia vertical entre ports del patchPanel = (altura Pachpanel - altura port) / 2
			var alturaPorts     = _alturaPp * 0.3;	// 40% altura pach panel
			var distanciaVerticalEntrePorts = (_alturaPp - alturaPorts) / 2;


			// Pinta ports
			var coordenadesPort = {};
			var coord_x = 0;
			for(var i=0; i<_panelPorts.length; ++i){
				
				//calcul coordenades de cada port
				coord_x += (i==0) ? distanciaHoritzontalEntrePorts : ampladaPorts + distanciaHoritzontalEntrePorts;
				coordenadesPort = {x: _coordenades.x + coord_x , y: _coordenades.y + distanciaVerticalEntrePorts}

				_panelPorts[i].pintaPortPanel({
													paper: paper,
													coordenades: coordenadesPort,
													ampladaPortPanel: ampladaPorts,
													alturaPortPanel: alturaPorts
												});

			}



		}
	}
}







portPanel = function(objPanelPort){
	
	//var _switchPort  = objPanelPort.switchPort;	//switchPort: {nomSw: "", port: ""}
	var _roseta      = objPanelPort.roseta;
	var _connectatA  = objPanelPort.connectatA;
	var _departament = objPanelPort.departament;

	// les següents variables, prenen el seu valor real quan es pinta el port
	var _paper = null;
	var _coordenades = {};
	var _ampladaPort = 0;
	var _alturaPort  = 0;
	var _objectePintat = null;
	var _objecteDescripcioPintat = null;

	return {
		//switchPort: function(){return _switchPort;}, 	//switchPort: {nomSw: "", port: ""}
		roseta    : function(){return _roseta;},
		connectatA: function(){return _connectatA;},
		departament: function(){return _departament},

		paper       : function(){return _paper;},
		coordenades : function(){return _coordenades;},
		ampladaPort : function(){return _ampladaPort;},
		alturaPort  : function(){return _alturaPort;},

		objectePintat: function(){return _objectePintat;},
		objecteDescripcioPintat: function(){return _objecteDescripcioPintat;},

		pintaPortPanel: function(parametres){
			_paper       = parametres.paper;
			_coordenades = parametres.coordenades;
			_ampladaPort = parametres.ampladaPortPanel;
			_alturaPort  = parametres.alturaPortPanel;
			
			var pPchp = _paper.rect(_coordenades.x, _coordenades.y, _ampladaPort, _alturaPort).attr(
				{
					fill: "gray",
					stroke: "black",
					"stroke-width": 1,
					title: _connectatA
				});
			
			var pDadesPort = _paper.text(_coordenades.x + _ampladaPort/2, _coordenades.y - _alturaPort/2, _roseta).attr(
				{
					fill: "white",
					"font-size": 7
				});

			_objectePintat = pPchp;

		},


		pintaDescripcio: function(parametres){
			_paper       = parametres.paper;
			_coordenades = parametres.coordenades;

			
			var pDadesDescripcio = _paper.text(_coordenades.x, _coordenades.y, _connectatA).attr(
				{
					fill: "gray",
					"font-size": 12,
					"text-anchor": "start",
					"title": "toma: " + _roseta
				});

			_objecteDescripcioPintat = pDadesDescripcio;
		},		


		pintaDepartament: function(parametres){
			_paper       = parametres.paper;
			_coordenades = parametres.coordenades;

			
			var pDadesDescripcio = _paper.text(_coordenades.x, _coordenades.y, _departament).attr(
				{
					fill: "blue",
					"font-size": 12,
					"text-anchor": "start"
				});
		}		



	}
}



