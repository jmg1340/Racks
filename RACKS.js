$(document).ready(function() {

/*	
    var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if(! es_firefox){
    			    alert("Es recomana utilitzar Firefox per a que els llocs de treball apareguin correctament agrupats");
    }
*/


	$("#INFORMATICA").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "INFORMATICA";
		$("article h2").html(Edifici + " - " + Planta);
		//var switchsSeleccionats2 = seleccionarSwitchs(Edifici, Planta);
		//mostrarSwitchs(switchsSeleccionats2);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);
		
		return false;
	});
	
	$("#E2P1").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta 1";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E2P0").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta 0";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E2P-1B").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta -1B";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E2P-1").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta -1";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E2P-2").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta -2";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E2RMN").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 2";
		var Planta = "Planta RMN";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	
	$("#SEGURETAT").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "SEGURETAT";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});





	$("#E1P2").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "Planta 2";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E1P1").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "Planta 1";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E1P0").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "Planta 0";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E1P-1").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "Planta -1";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#QUIROFAN").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "QUIROFAN";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	$("#E1P-2").bind("click", function(){
		$("svg").remove();

		var Edifici = "Edifici 1";
		var Planta = "Planta -2";
		$("article h2").html(Edifici + " - " + Planta);
		var racksSeleccionats2 = seleccionarRacks(Edifici, Planta);
		mostrarRack(racksSeleccionats2);

		return false;
	});
	
	var matriuRosetasPachpanels;
});





seleccionarRacks = function(edifici, planta){
	var rckSelec = [];
	for (var i=0; i<racks.length; ++i){
		if ((racks[i].edifici() == edifici) && (racks[i].planta() == planta)){
			rckSelec.push(racks[i]);
		}
	}
	return rckSelec;
}



mostrarRack = function(racksSeleccionats){
	matriuRosetasPachpanels = [];
	matriuObjectesDescripcions = [];

	var posicioRack  = $("#rack").position();
	for (var i=0; i<racksSeleccionats.length; ++i){

		paper = Raphael(posicioRack.left, posicioRack.top + 20, racksSeleccionats[i].amplada() + 400, racksSeleccionats[i].altura());
		racksSeleccionats[i].pintaRack(paper);

		llistarDescripcions({
								rackActiu:  racksSeleccionats[i],
								paper: paper
							}, function(){

								mouseOverPortsSwitchsIPachPanel(racksSeleccionats[i]);
							});
		

	}
}




llistarDescripcions = function(parametres, callback){
	var rackActiu = parametres.rackActiu;
	var coordenadaX = parametres.rackActiu.amplada() + 20;
	var coordenadaY = 10;

	var arrayElementsLlista = [];
	

	//Per cada pachPanel ...
	for(var i=0; i < rackActiu.matriuPachPanels().length; ++i){

		//Per cada port de cada pachPanel ...
		for(var j=0; j < rackActiu.matriuPachPanels()[i].panelPorts().length; ++j){
		
			//console.log("rackActiu.matriuPachPanels()[i].panelPorts()[j].connectatA(): " + rackActiu.matriuPachPanels()[i].panelPorts()[j].connectatA());
			if (rackActiu.matriuPachPanels()[i].panelPorts()[j].connectatA() !== ""){
				arrayElementsLlista.push({port: rackActiu.matriuPachPanels()[i].panelPorts()[j], 
										  dept: rackActiu.matriuPachPanels()[i].panelPorts()[j].departament()})
				

			}
		}
	}


	//Ordenar ascendentemente por dept
	//var llistaOrdenada = arrayElementsLlista.sort(function (a, b) {
	arrayElementsLlista.sort(function (a, b) {
	    //return (a.dept > b.dept)

	    var res = 0;
	    if (a.dept<b.dept) res = -1;
	    else if (a.dept>b.dept) res = 1;
	    return res

	});


	var nouDept = "";
	for(var i=0; i < arrayElementsLlista.length; ++i){

		if(arrayElementsLlista[i].dept !== nouDept){
			if(i != 0){
				coordenadaY += 20;
			}

			arrayElementsLlista[i].port.pintaDepartament({
													paper: parametres.paper,
													coordenades: {x: coordenadaX, y: coordenadaY}
												});
			coordenadaY += 15;
			nouDept = arrayElementsLlista[i].dept;
		}
		
		arrayElementsLlista[i].port.pintaDescripcio({
													paper: parametres.paper,
													coordenades: {x: coordenadaX + 20, y: coordenadaY}
												});

		coordenadaY += 15;
		
	}

	callback();
}





mouseOverPortsSwitchsIPachPanel = function(rackActiu){

	//Per cada pachPanel ...
	for(var i=0; i < rackActiu.matriuPachPanels().length; ++i){

		//Per cada port de cada pachPanel ...
		for(var j=0; j < rackActiu.matriuPachPanels()[i].panelPorts().length; ++j){

			var portPP = rackActiu.matriuPachPanels()[i].panelPorts()[j];
			

			//console.log("portPP: " + portPP);
			
			revisarPortPP (portPP, function(portPP2){
				//console.log("portPP2: " + portPP2);


				// si existeix camp "roseta" no null
				if(portPP2.roseta() !== "" ){
					
					var port_Panel  = portPP2.objectePintat();
					var port_PanelDescripcio  = portPP2.objecteDescripcioPintat();
					var roseta2     = portPP2.roseta();
					var usuariFinal = portPP2.connectatA();

					if (usuariFinal == "Multifuncio"){
						console.log("******  usuariFinal = Multifuncio");
					} 

					//port_SwitchAmbRosetaCoincident = portLocalitzatDelSwitch(rackActiu, roseta2);
					localitzarPortDelSwitch(rackActiu, roseta2, function(port_SwitchAmbRosetaCoincident, nomSWCoincident, numPortSwCoincident){


						// un cop localitzat, canviem els atributs del port del switch  i patchpanel coincident
						if (port_SwitchAmbRosetaCoincident != null){


							port_SwitchAmbRosetaCoincident.attr("stroke", "yellow");
							port_SwitchAmbRosetaCoincident.attr("title", "Connectat a:\t\t" + usuariFinal +"\nToma: \t\t\t" + roseta2);
							
							port_Panel.attr("stroke", "yellow");
							port_Panel.attr("title", "Connectat a:\t\t" + usuariFinal +"\nSwitch: \t\t\t" + nomSWCoincident + "\t\tport: \t" + numPortSwCoincident);

							if(usuariFinal !== "")
								port_PanelDescripcio.attr({"title": "Toma:\t\t" + roseta2 +"\nSwitch:\t\t" + nomSWCoincident + "\t\tport: \t" + numPortSwCoincident,
															"fill": "black"});

							var colorOriginalPortSwitch = port_SwitchAmbRosetaCoincident.attr("fill");
							var colorOriginalPortPanelP = port_Panel.attr("fill");

							
							// --- MOUSE OVER ---
							port_Panel.mouseover (function(){ 
								port_SwitchAmbRosetaCoincident.attr("fill", "red");						
								port_Panel.attr("fill", "red");
								if(usuariFinal !== "") port_PanelDescripcio.attr({"fill": "red", "font-weight": "bold"});
							});

							port_SwitchAmbRosetaCoincident.mouseover (function(){ 
								port_SwitchAmbRosetaCoincident.attr("fill", "red");
								port_Panel.attr("fill", "red");
								if(usuariFinal !== "") port_PanelDescripcio.attr({"fill": "red", "font-weight": "bold"});
							});

							if(usuariFinal !== "") {
								port_PanelDescripcio.mouseover(function(){
									port_SwitchAmbRosetaCoincident.attr("fill", "red");						
									port_Panel.attr("fill", "red");
									port_PanelDescripcio.attr({"fill": "red", "font-weight": "bold"});
								});
							}


							// --- MOUSE OUT ---
							port_SwitchAmbRosetaCoincident.mouseout (function(){ 
								port_Panel.attr("fill", colorOriginalPortPanelP);
								port_SwitchAmbRosetaCoincident.attr("fill", colorOriginalPortSwitch);
								if(usuariFinal !== "") port_PanelDescripcio.attr({"fill": "black", "font-weight": "normal"});
							});

							port_Panel.mouseout (function(){ 
								port_Panel.attr("fill", colorOriginalPortPanelP);
								port_SwitchAmbRosetaCoincident.attr("fill", colorOriginalPortSwitch);
								if(usuariFinal !== "") port_PanelDescripcio.attr({"fill": "black", "font-weight": "normal"});
							});

							if(usuariFinal !== "") {
								port_PanelDescripcio.mouseout(function(){
									port_Panel.attr("fill", colorOriginalPortPanelP);
									port_SwitchAmbRosetaCoincident.attr("fill", colorOriginalPortSwitch);
									if(usuariFinal !== "") port_PanelDescripcio.attr({"fill": "black", "font-weight": "normal"});
								});
							}
						}
					});
				} else {
					portPP2.objectePintat().hide();
				}
			});	
		}

	}

	return false;
}


revisarPortPP = function(portPP, callback){
	callback(portPP);
}


localitzarPortDelSwitch = function(rackActiu, roseta3, callback){
	var objTrobat = null;
	var nomSwTrobat = null;
	var portSwTrobat = null;

	var arraySw = [];	// matriu amb tots els switchs (els que estan en Stack i els que no)

	for(i=0; i < rackActiu.matriuSw().length; ++i){    // per cada swich del rack ...
		
		if (rackActiu.matriuSw()[i].switchPorts !== undefined){   // si fos undefined es tracta d'un switchStack
			arraySw.push(rackActiu.matriuSw()[i]);
		}else{
			for (var k=0; k<rackActiu.matriuSw()[i].switchs().length; ++k){
				arraySw.push(rackActiu.matriuSw()[i].switchs()[k]);
			}
		}
	}

	for(i=0; i < arraySw.length; ++i){ 

		for(j=0; j < arraySw[i].switchPorts().length; ++j){   //per cada port del switch
			var portSw = arraySw[i].switchPorts()[j];
			/*console.log("roseta pachpanel: " + roseta3 + 
						"\t(port sw: " + portSw.numPort() + 
						"\t roseta sw: " + portSw.panelPort().roseta + 
						"\t x: "  + portSw.coordenades().x + 
						"\t y: "  + portSw.coordenades().y + ")");*/


			if(portSw.panelPort().roseta === roseta3){
				
				
				/*console.log("**** roseta pachpanel: " + roseta3 + 
							"\t(port sw: " + portSw.numPort() + 
							"\t roseta sw: " + portSw.panelPort().roseta + 
							"\t x: "  + portSw.coordenades().x + 
							"\t y: "  + portSw.coordenades().y + ")");*/
				
				//objTrobat = rackActiu.matriuSw()[i].switchPorts()[j].objectePintat();
				
				objTrobat 	= portSw.objectePintat();
				nomSwTrobat = arraySw[i].nom();
				portSwTrobat = portSw.numPort();
			}
		}
		
	}
	callback (objTrobat, nomSwTrobat, portSwTrobat);
	//return objTrobat;
}



