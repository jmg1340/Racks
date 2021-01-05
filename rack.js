

rack = function(objRack){
	var _edifici     = objRack.edifici;
	var _planta      = objRack.planta;
	var _matriuSw    = objRack.matriuSw;
	var _matriuPachPanels    = objRack.matriuPachPanels;
	var _totalPosicionsRack    = objRack.totalPosicionsRack; 
	var _ampladaRack = objRack.amplada;
	//var _posicioInicialSwitchs = objRack.posicioInicialSwitchs;	//numero de U a partir de la qual es dibuixaran els switchs

	var _midaU     = {x: 15, y: 15};
	var _alturaRack  = _totalPosicionsRack * _midaU.y;
	var _coordPosicionsRack = [];
	var _ampladaSwitch = _ampladaRack - _midaU.x * 2;
	var _alturaSwitch = _midaU.y * 3;

	
	return {
		amplada : function(){ return _ampladaRack;},
		altura  : function(){ return _alturaRack;},
		ampladaSwitch: function(){ return _ampladaSwitch},
		edifici : function(){return _edifici;},
		planta : function(){return _planta;},
		matriuSw: function(){return _matriuSw;},
		matriuPachPanels: function(){return _matriuPachPanels;},

		pintaRack: function(paper){
			
			//Pinta el marc del rack
			var rack = paper.rect(0,0,_ampladaRack,_alturaRack).attr({
							stroke: "gray",
							"stroke-width": 1
						});

			
			// **************** pinta les posicions dels anclatges *****************
			var posicioX = _ampladaRack - _midaU.x;
			var _coordPosicionsRack = [];
			for (var i = 0; i < _totalPosicionsRack; ++i){
				
				var posicioY = (i == 0) ? 1 : _midaU.y * i ;
				// Pinta una posicio de l'esquerre (amb numeracio inclosa)
				var guia1 = paper.rect(1, posicioY, _midaU.x, _midaU.y).attr({
								stroke: "gray",
								"stroke-width": 1
							});
				var numeracioguia1 = paper.text(_midaU.x / 2,  posicioY + ( _midaU.y / 2), i+1).attr({
								fill: "gray",
								"font-size": 8
							});
				_coordPosicionsRack.push({x: _midaU.x, y: posicioY});	// posicio Us de la guia esquerre que servira per pintar els switchs i pachpanels segons la posicio


				// Pinta una posicio de la dreta (amb numeracio inclosa)
				var guia2 = paper.rect(posicioX , posicioY, _midaU.x, _midaU.y).attr({
								stroke: "gray",
								"stroke-width": 1
							});
				var numeracioguia2 = paper.text(posicioX + _midaU.x / 2,  posicioY + ( _midaU.y / 2), i+1).attr({
								fill: "gray",
								"font-size": 8
							});

			}

			
			// ************* Pintar pach panels *************
			if (_matriuPachPanels == undefined) return false;

			var coordPosicioPachPanel = {};
			for(var j = 0; j<_matriuPachPanels.length; ++j){
				
				coordPosicioPachPanel = _coordPosicionsRack [_matriuPachPanels[j].posicioInicial() - 1];
				
				_matriuPachPanels[j].pintaPachPanel({
										paper: paper, 
									   	coordenades: coordPosicioPachPanel, 
									   	ampladaSwitch: _ampladaSwitch, 
									   	alturaSwitch: _alturaSwitch
									  });
				
			}
		



			// ************* Pintar switchs *************
			var coordPosicioSwitch = {};
			for(var j = 0; j<_matriuSw.length; ++j){
				coordPosicioSwitch = _coordPosicionsRack[_matriuSw[j].posicioInicial() - 1];
				
				if (_matriuSw[j].pintaSwitch === undefined){
					_matriuSw[j].pintaStack({
											paper: paper, 
										   	coordenades: coordPosicioSwitch, 
										   	ampladaSwitch: _ampladaSwitch, 
										   	alturaSwitch: _alturaSwitch
										  });
				} else {
					_matriuSw[j].pintaSwitch({
											paper: paper, 
										   	coordenades: coordPosicioSwitch, 
										   	ampladaSwitch: _ampladaSwitch, 
										   	alturaSwitch: _alturaSwitch,
										  });
				}
				
			}
			

		}
	}



}

