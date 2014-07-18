	var JAGE = {} || JAGE;

	JAGE.addGeometryTab = function() {
		var pi = Math.PI;
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Move, rotate and scale';
		tab.innerHTML =
			'<a href=# id=tabGeometry ><p class=button >' +
				'<i class="fa fa-sliders"></i> Geometry...' +
			'</p></a>'; 
		tabGeometry.onclick = function() { JA.toggleTab( JAGE.geometryTab ); };

		JAGE.geometryTab = tab.appendChild( document.createElement( 'div' ) );
		JAGE.geometryTab.style.cssText = 'cursor: auto; display: none;' ;
		JAGE.geometryTab.innerHTML =
			'<p style=margin:0;>Position<br>' +
				'X <input type=range id=rngPosX onmousemove=JATH.selectedObject.position.x=this.value min=-100 max=100 step=2 value=0 /><br>' +
				'Y <input type=range id=rngPosY onmousemove=JATH.selectedObject.position.y=this.value min=-100 max=100 step=2 value=0 /><br>' +
				'Z <input type=range id=rngPosZ onmousemove=JATH.selectedObject.position.z=this.value min=-100 max=100 step=2 value=0 /><br>' +
			'</p>' +

			'<p style=margin:0;>Rotation<br>' +
				'X <input type=range id=rngRotX onmousemove=JATH.selectedObject.rotation.x=this.value min=-3.1415 max=3.1415 step=0.01 value=0 /><br>' +
				'Y <input type=range id=rngRotY onmousemove=JATH.selectedObject.rotation.y=this.value min=-3.1415 max=3.1415 step=0.01 value=0 /><br>' +
				'Z <input type=range id=rngRotZ onmousemove=JATH.selectedObject.rotation.z=this.value min=-3.1415 max=3.1415 step=0.01 value=0 /><br>' +
			'</p>' +

			'<p style=margin:0;>Scale<br>' +
				'X <input type=range id=rngSclX onmousemove=JATH.selectedObject.scale.x=this.value min=0.1 max=10 step=0.1 value=1 /><br>' +
				'Y <input type=range id=rngSclY onmousemove=JATH.selectedObject.scale.y=this.value min=0.1 max=10 step=0.1 value=1 /><br>' +
				'Z <input type=range id=rngSclZ onmousemove=JATH.selectedObject.scale.z=this.value min=0.1 max=10 step=0.1 value=1 /><br>' +
			'</p>' +
		'';

	};