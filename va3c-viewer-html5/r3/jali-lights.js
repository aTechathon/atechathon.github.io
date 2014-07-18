	var JALI = [] || JALI;

	JALI.addLightsBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );

		tab.innerHTML =
			'<a id=tabLight style=cursor:pointer; ><p class=button >' +
				'<i class="fa fa-lightbulb-o"></i> Lights...' +
			'</p></a>'; 
		tabLight.onclick = function() { JA.toggleTab( JALI.lightsBox ); }; 

		JALI.lightsBox = tab.appendChild( document.createElement( 'div' ) );
		JALI.lightsBox.style.cssText = 'cursor: auto; display: none; ' ;
		JALI.lightsBox.innerHTML =
			'<p>' +
				'<input type=checkbox id=chkLightAmbient onclick=JALI.toggleLightAmbient(); checked /> Ambient Light ' +
				'<input type=color id=colLightAmbient value=#333333 > <output id=outLightAmbient >#33333</output><br>' +
			'</p>' +
			'<p>' +
				'<input type=checkbox id=chkLightCamera onclick=JALI.toggleLightCamera(); checked /> Light at camera position<br>' +
				'<input type=color id=colLightCamera value=#333333 /> <output id=outLightCamera >#33333</output> ' +
				'Intensity <input type=number id=numLightCameraIntensity min=0 step=0.1 value=0.5 style=width:40px; /><br>' +
				'<input type=checkbox id=chkLightCameraHelper /> Display light helper ' +
			'</p>' +
			'<p>' +
				'<input type=checkbox id=chkLightPosition onclick=JALI.toggleLightPosition(110); checked /> Directional Light<br>' +
				'<input type=color id=colLightPosition value=#333333 /> <output id=outLightPosition >#33333</output> ' +
				'Intensity <input type=number id=numLightPositionIntensity min=0 step=0.1 value=0.5 style=width:40px; /><br>' +

			'</p>' +
			'<p>' +
				'Directional light latitude<br><input type=range id=rngLightLat min=-90 max=90 step=1 value=60 /> ' +
				'<output id=outpLightLat >60</output><br>' +
			'</p>' +
			'<p>' +
				'Directional light longitude<br><input type=range id=rngLightLon min=-180 max=180 step=1 value=90 /> ' +
				'<output id=outpLightLon >90</output><br>' +
			'</p>' +
				'<p>' +
				'<input type=checkbox id=chkLightPositionHelper /> Display light helper ' +
			'</p>' +
		'';

		colLightAmbient.onchange = function() { JALI.lightAmbient.color.setHex( this.value.replace("#", "0x") ); outLightAmbient.value=this.value; };

		colLightCamera.onchange = function() { JALI.lightCamera.color.setHex( this.value.replace("#", "0x") ); outLightCamera.value=this.value; };
		numLightCameraIntensity.onclick = function() { JALI.lightCamera.intensity = this.value; };
		chkLightCameraHelper.onchange = function() { JALI.lightCamera.shadowCameraVisible = chkLightCameraHelper.checked === true ? true : false; };

		colLightPosition.onchange = function() { JALI.lightPosition.color.setHex( this.value.replace("#", "0x") ); outLightPosition.value=this.value; };
		numLightPositionIntensity.onclick = function() { JALI.lightPosition.intensity = this.value; };

		rngLightLat.onmousemove = function() { outpLightLat.value=this.value; JALI.updateLightPosition( rngLightLat.value, rngLightLon.value ); };
		rngLightLon.onmousemove = function() { outpLightLon.value=this.value;  JALI.updateLightPosition( rngLightLat.value, rngLightLon.value ); };

		chkLightPositionHelper.onchange = function() { JALI.lightPosition.shadowCameraVisible = chkLightPositionHelper.checked === true ? true : false; };
	};


	JALI.toggleLightAmbient = function() {
		if ( chkLightAmbient.checked === true ) {
			JALI.lightAmbient = new THREE.AmbientLight( 0x333333 );
			JATH.scene.add( JALI.lightAmbient );
			JALI.updateMaterials( JATH.scene.children );
		} else {
			JATH.scene.remove( JALI.lightAmbient );
		}
	};

	JALI.toggleLightCamera = function( d ) {
		if ( chkLightCamera.checked === true ) {
			JALI.lightCamera = new THREE.DirectionalLight( 0xffffff, 0.25 );
			JALI.lightCamera.position = JATH.camera.position;
//			JALI.lightCamera.position.set( -100, 100, 100 );
			JALI.lightCamera.castShadow = true;


			JALI.lightCamera.shadowCameraNear = 100;
			JALI.lightCamera.shadowCameraFar = 400;
			JALI.lightCamera.shadowBias = -0.002; // default 0 ~ distance fron corners?

			d = d ? d : 110;
			JALI.lightCamera.shadowCameraLeft = -d;
			JALI.lightCamera.shadowCameraRight = d;
			JALI.lightCamera.shadowCameraTop = d;
			JALI.lightCamera.shadowCameraBottom = -d;

			JATH.scene.add( JALI.lightCamera );
			JALI.updateMaterials( JATH.scene.children );

		} else {
			JATH.scene.remove( JALI.lightCamera );
		}
	};

/*
http://mrdoob.github.io/three.js/docs/#Reference/Lights/DirectionalLight

*/

	JALI.toggleLightPosition = function( d ) {
		if ( chkLightPosition.checked === true ) {
			JALI.lightPosition = new THREE.DirectionalLight( 0xffffff, 0.25 );  // 0xffffff 1.0
//			JALI.lightDirectional = new THREE.SpotLight( 0xffffff, 1 );

			JALI.updateLightPosition( rngLightLat.value, rngLightLon.value );

			JALI.lightPosition.castShadow = true;
			d = d ? d : 100;
			JALI.lightPosition.shadowCameraLeft = -d;
			JALI.lightPosition.shadowCameraRight = d;
			JALI.lightPosition.shadowCameraTop = d;
			JALI.lightPosition.shadowCameraBottom = -d;

			JALI.lightPosition.shadowCameraNear = 100;
			JALI.lightPosition.shadowCameraFar = 400;

//			JALI.lightPosition.angle = 1; // spotlight only

// can help stop appearance of gridlines in objects with opacity < 1
			JALI.lightPosition.shadowBias = -0.002; // default 0 ~ distance fron corners?
			JALI.lightPosition.shadowDarkness = 0.1; // default 0.5
			JALI.lightPosition.shadowMapWidth = 2048;  // default 512
			JALI.lightPosition.shadowMapHeight = 2048;
//			JALI.lightPosition.shadowCameraVisible;
	
			JATH.scene.add( JALI.lightPosition );
			JALI.updateMaterials( JATH.scene.children );
		} else {
			JATH.scene.remove( JALI.lightPosition );
		}
	};


	JALI.updateMaterials = function( children ) {
		for (var i = 0, len = children.length; i < len; i++) {
			if ( children[i].material ) {
				children[i].material.needsUpdate = true;
			}
		}
	};

	JALI.updateLightPosition = function ( lat, lon ) {
		var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
		var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians
		function cos(a) { return Math.cos(a); }
		function sin(a) { return Math.sin(a); }
		var theta = lat * d2r; 
		var phi = lon * d2r;
		var radius = 300;
		JALI.lightPosition.position.x = radius * cos( theta ) * sin( phi );
		JALI.lightPosition.position.y = radius * sin( theta );
		JALI.lightPosition.position.z = radius * cos( theta ) * cos( phi );
	};