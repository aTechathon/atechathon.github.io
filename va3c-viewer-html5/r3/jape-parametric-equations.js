//Jaanga Parametric Equations ~ Theo Armour~ 2014-06-09 ~ MIT License

	JAPE = {} || JAPE;

	JAPE.addParametricEquationsBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Cool things';
		tab.style.cssText = 'cursor: pointer; ';
		tab.innerHTML =
			'<a id=tabParametricEquations ><p class=button >' +
				'<i class="fa fa-wrench"></i> Parametric Equations...' +
			'</p></a>'; 
		tabParametricEquations.onclick = function() { JA.toggleTab( JAPE.ParametricEquations ); };

		JAPE.ParametricEquations = tab.appendChild( document.createElement( 'div' ) );
		JAPE.ParametricEquations.style.cssText = 'cursor: auto; display: none;' ;
		JAPE.ParametricEquations.innerHTML =
			'<h3 style=margin:0; >Simple</h3>' +
			'<p style=margin:0;>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.simplePlane, 20, 20, \'Simple Plane\' ); " >Simple Plane</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.radialWave, 40, 30 ); " >Radial Wave</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.curve1, 40, 30, \'Curve 1\' ); " >Curve 1</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.curve2, 100, 1, \'Curve 2\' ); " >Curve 2</a>' +  // number of faces
			'</p>' +
			'<h3 style=margin:0;>From <a href="http://www.3d-meier.de/tut3/Seite0.html" target="_blank">Jürgen Meier</a></h3>' +
			'<p style=margin:0;>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.bohemianDome, 40, 30 ); " >Bohemian Dome</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.boysSurface, 40, 30 ); " >Boy\'s Surface</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.cornucopia, 30, 30 ); " >Cornucopia</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.crossCup, 30, 30 ); " >Cross Cup</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.crossCap, 30, 30 ); " >Cross Cap</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.ennepers, 30, 30 ); " >Ennepers</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.monkeySaddle, 30, 30 ); " >Monkey Saddle</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.sineSurface, 30, 30 ); " >Sine Surface</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.tranguloidTrefoil, 30, 30 ); " >Tranguloid Trefoil</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.tranguloidTrefoil2, 80, 30 ); " >Tranguloid Trefoil 2</a><br>' +
				'<a href=# onclick="JAPE.addParametricGeometry( JAPE.umbilicTorus, 30, 30 ); " >Umbilic Torus</a><br>' +

			'</p>' +

		'';
	};

	JAPE.bohemianDome = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {

// http://www.3d-meier.de/tut3/Seite5.html
// http://mathworld.wolfram.com/BohemianDome.html

//		u *= 20;
//		v *= 20;

		xLength =  xLength ? xLength : 2 * Math.PI;
		xDelta =  xDelta ? xDelta : 0 ;
		zLength =  zLength ? zLength : 2 * Math.PI;
		zDelta =  zDelta ? zDelta : 0;
		scale =  scale ? scale: 20;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;
//console.log( u, v );
//		u = ( u - 0.5 ) * 2 * pi;
//		v = ( v - 0.5 ) * 2 * pi;
//console.log( u, v );

		var x = scale * ( 0.5 * Math.cos(u) );
		var y = scale * ( 1.5 * Math.cos(v) + 0.5 * Math.sin(u) );
		var z = scale * ( 1 * Math.sin(v) );
		return new THREE.Vector3( x, y, z );
	};

	JAPE.boysSurface = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite6.html
// http://en.wikipedia.org/wiki/Boy's_surface


//		u *= 5;
//		v *= 6;

		xLength =  xLength ? xLength : Math.PI;
		xDelta =  xDelta ? xDelta : 0.5 * Math.PI ;
		zLength =  zLength ? zLength : Math.PI;
		zDelta =  zDelta ? zDelta : 0.5 * Math.PI;
		scale =  scale ? scale: 20;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

//		u = ( u - 0.5 ) * 2 * pi;
//		v = ( v - 0.5 ) * 2 * pi;

		var a = Math.sqrt (2);
		var b = 2 - a * Math.sin (3 * u) * Math.sin (2 * v );

		var x = scale * ( a * Math.cos (v) * Math.cos(v) * Math.cos (2 * u) + Math.cos(u) * Math.sin (2 * v) / b );
		var y = scale * ( 3 * Math.cos (v) * Math.cos(v) / b );
		var z = scale * ( a * Math.cos (v) * Math.cos(v) * Math.sin (2 * u) + Math.cos(u) * Math.sin (2 * v) / b );
		return new THREE.Vector3( x, -50 + y, z );

	};

	JAPE.cornucopia = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite7.html
// http://web.eecs.utk.edu/~djacks36/www-home/cs594/hw01/
// http://mathworld.wolfram.com/Cornucopia.html

/*
		xLength =  xLength ? xLength : -Math.PI;
		xDelta =  xDelta ? xDelta : Math.PI ;
		zLength =  zLength ? zLength : -1;
		zDelta =  zDelta ? zDelta : 2 * Math.PI;
		scale =  scale ? scale : 5;

		xLength =  xLength ? xLength : 0;
		xDelta =  xDelta ? xDelta : 1 ;
		zLength =  zLength ? zLength : -1;
		zDelta =  zDelta ? zDelta : 1;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

		var a = 0.7;
		var b = 0.9;

		var x = scale * ( Math.exp( b * v ) * Math.cos( v ) + Math.exp( a * v ) * Math.cos( u ) * Math.cos( v ) );
		var y = scale * ( Math.exp( b * v ) * Math.sin( v ) + Math.exp( a * v ) * Math.cos( u ) * Math.sin( v ) );
		var z = scale * ( Math.exp( a * v ) * Math.sin( u ) );
*/

// http://www.pacifict.com/Gallery.html ~ ok

		xLength =  xLength ? xLength : -Math.PI;
		xDelta =  xDelta ? xDelta : Math.PI ;
		zLength =  zLength ? zLength : -1;
		zDelta =  zDelta ? zDelta : -0.2;
		scale =  scale ? scale : 5;


		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;
// console.log( u, v, xLength, xDelta, zLength, zDelta );

		var x = scale * ( ( 2 + v * Math.sin( u ) ) * Math.sin( 2 * Math.PI * v ) );
		var y = scale * v * Math.cos( u );
		var z = scale * ( ( 2 + v * Math.sin( u ) ) * Math.cos( 2 * Math.PI * v  ) + ( 2 * v - 2 ) );

		return new THREE.Vector3( x, y, z );

	};


	JAPE.crossCup = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite8.html
// http://paulbourke.net/geometry/crosscap/

		xLength =  xLength ? xLength : -5;
		xDelta =  xDelta ? xDelta : 5;
		zLength =  zLength ? zLength : 5;
		zDelta =  zDelta ? zDelta : -2 * Math.PI;
		scale =  scale ? scale: 20;

//		u = u * xLength - xDelta;
//		v = v * zLength - zDelta;

		u = 2 * ( u - 0.5 );
		v = pi * ( v - 0.5 );

		var x = scale * ( 1 - u * u + u * u * Math.sin( v ) * Math.sin( v ) );
		var y = scale * ( u * u * Math.sin( v ) * Math.sin( v ) + 2 * u * u * Math.sin( v ) * Math.cos( v ) );
		var z = scale * ( Math.sqrt( ( 1 - u * u ) / 2 ) * u * ( Math.sin( v ) + Math.cos( v ) ) );
		return new THREE.Vector3( x, y, z );

	};


	JAPE.crossCap = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite8.html
// http://paulbourke.net/geometry/crosscap/

		xLength =  xLength ? xLength : 2 * Math.PI;
		xDelta =  xDelta ? xDelta : 0;
		zLength =  zLength ? zLength : 0.5 * Math.PI;
		zDelta =  zDelta ? zDelta : 0;
		scale =  scale ? scale: 20;

//		u = u * xLength - xDelta;
//		v = v * zLength - zDelta;

//		var x = scale * ( 1 - u * u + u * u * Math.sin( v ) * Math.sin( v ) );
//		var y = scale * ( u * u * Math.sin( v ) * Math.sin( v ) + 2 * u * u * Math.sin( v ) * Math.cos( v ) );
//		var z = scale * ( Math.sqrt( ( 1 - u * u ) / 2 ) * u * ( Math.sin( v ) + Math.cos( v ) ) );

		u = pi * ( u - 0.5 );
		v = pi * ( v - 0.5 );

		var x = scale * (  cos( u ) * sin( 2 * v ) );
		var y = scale * (  sin( u ) * sin( 2 * v ) );
		var z = scale * (  cos( v ) * cos( v ) - cos( u ) * cos( u ) * sin( v ) * sin( v )  );

		return new THREE.Vector3( x, y, z );

	};

	JAPE.ennepers = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite10.html
// http://paulbourke.net/geometry/ennepers/

		xLength =  xLength ? xLength : 2;
		xDelta =  xDelta ? xDelta : -2;
		zLength =  zLength ? zLength : 2;
		zDelta =  zDelta ? zDelta : -2;
		scale =  scale ? scale: 20;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

		var x = scale * ( u - ( u * u * u ) / 3 + u * v * v );
		var y = scale * ( v - ( v * v * v ) / 3 + v * u * u );
		var z = scale * ( u * u - v * v );

		return new THREE.Vector3( x, y, z );

	};


	JAPE.monkeySaddle = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite14.html

		xLength =  xLength ? xLength : -1.1;
		xDelta =  xDelta ? xDelta : 1.1;
		zLength =  zLength ? zLength : -1.1;
		zDelta =  zDelta ? zDelta : 1.1;
		scale =  scale ? scale: 20;

		u = u * xLength + xDelta;
		v = v * zLength + zDelta;

//		u = ( u - 0.5 ) * 1;
//		v = ( v - 0.5 ) * 1;

		var x = scale * ( u );
		var y = scale * ( v );
		var z = scale * ( u * u * u - 3 * u * v * v );

		return new THREE.Vector3( x, y, z );

	};

	JAPE.sineSurface = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite14.html

		scale =  scale ? scale: 20;

		u = ( u - 0.5 ) * 2 * pi;
		v = ( v - 0.5 ) * 2 * pi;

		var x = scale * ( Math.sin( u ) );
		var y = scale * ( Math.sin( v  ) );
		var z = scale * ( Math.sin( u + v ) );

		return new THREE.Vector3( x, y, z );

	};

	JAPE.tranguloidTrefoil = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite57.html
// https://www.youtube.com/watch?v=Q1tSH4IPWvc

		xLength =  xLength ? xLength : -2 * pi;
		xDelta =  xDelta ? xDelta : 2 * pi;
		zLength =  zLength ? zLength : -2 * pi;
		zDelta =  zDelta ? zDelta : 2 * pi;
		scale =  scale ? scale: 20;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

		var x = scale * ( 2 * sin( 3 * u ) / ( 2 + cos( v ) ) );
		var y = scale * ( 2 * ( sin( u ) + 2 * sin( 2 * u ) ) / ( 2 + cos( v + 2 * pi / 3 ) ) );
		var z = scale * ( ( cos( u ) - 2 * cos( 2 * u ) ) * ( 2 + cos( v ) ) * ( 2 + cos( v + 2 * pi / 3 ) ) / 4 );

		return new THREE.Vector3( x, y, z );

	};


	JAPE.tranguloidTrefoil2 = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite57.html
// https://www.youtube.com/watch?v=Q1tSH4IPWvc

		scale =  scale ? scale: 20;

		u = (u - 0.5) * 2 * pi;
		v = (v - 0.5) * 2 * pi;

		var x = scale * ( 2 * sin( 3 * u ) / ( 2 + cos( v ) ) );
		var y = scale * ( 2 * ( sin( u ) + 2 * sin( 2 * u ) ) / ( 2 + cos( v + 2 * pi / 3 ) ) );
		var z = scale * ( ( cos( u ) - 2 * cos( 2 * u ) ) * ( 2 + cos( v ) ) * ( 2 + cos( v + 2 * pi / 3 ) ) / 4 );

		return new THREE.Vector3( x, y, z );

	};



	JAPE.umbilicTorus = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
// http://www.3d-meier.de/tut3/Seite57.html
// https://www.youtube.com/watch?v=Q1tSH4IPWvc

		scale =  scale ? scale: 10;

		u = ( u - 0.5 ) * 2 * pi;
		v = ( v - 0.5 ) * 2 * pi;

		var x = scale * ( sin( u ) * ( 7 + cos( u / 3 - 2 * v ) + 2 * cos( u / 3 + v ) ) );
		var y = scale * ( cos( u ) * ( 7 + cos( u / 3 - 2 * v ) + 2 * cos( u / 3 + v ) ) );
		var z = scale * ( sin( u / 3 - 2 * v ) + 2 * sin( u / 3 + v ) );

		return new THREE.Vector3( x, y, z );

	};


// 
	JAPE.simplePlane = function( u, v, xLength, zLength, xDelta, zDelta  ) {
/*
		xLength =  xLength ? xLength : 50;
		xDelta =  xDelta ? xDelta : -25;
		zLength =  zLength ? zLength : 100;
		zDelta =  zDelta ? zDelta : -50;
*/

		xLength =  xLength ? xLength : 10;
		xDelta =  xDelta ? xDelta : -5;
		zLength =  zLength ? zLength : 10;
		zDelta =  zDelta ? zDelta : -5;

//		u = u * xLength + xDelta;
//		v = v * zLength + zDelta;

// step from 0 to 1
/*
console.log( 'b', u, v );
		u = ( u - 0.5 ) * 2 * pi;
		v = ( v - 0.5 ) * 2 * pi;
console.log( 'a', u, v );
*/

		u = 50 * ( u - 0.5 );
		v = 100 * ( v - 0.5 );

		var x = u;
		var y = 0;
		var z = v;

		return new THREE.Vector3( x, y, z );
	};

	JAPE.radialWave = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
		xLength =  xLength ? xLength : Math.PI;
		xDelta =  xDelta ? xDelta : 0.5 * Math.PI ;
		zLength =  zLength ? zLength : Math.PI;
		zDelta =  zDelta ? zDelta : 0.5 * Math.PI;

		u = u * xLength - xDelta;
		v = v * zLength - zDelta;

		scale = scale ? scale : 50;

		u = ( u - 0.5 );
		v = ( v - 0.5 );

		var x = scale * sin( u );
		var y = ( Math.sin( 4 * Math.PI * u ) + 2.8 * Math.cos( 2 * Math.PI * v ) );
//		var z = 2 * scale * Math.sin( v / 2 );
		var z = scale * sin( v );

		return new THREE.Vector3( x, y, z );
	};

	JAPE.curve1 = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {

		xLength =  xLength ? xLength : Math.PI;
		xDelta =  xDelta ? xDelta : 0.5 * Math.PI ;
		zLength =  zLength ? zLength : Math.PI;
		zDelta =  zDelta ? zDelta : 0.5 * Math.PI;
		scale =  scale ? scale: 20;

//		u = u * xLength - xDelta;
//		v = v * zLength - zDelta;

		u = pi * ( u - 0.5 );
		v = pi * ( v - 0.5 );

		x = scale * ( u - ( (Math.pow( u, 3 ) / 3 ) + u * v * v ) );
		y = scale * ( v - ( (Math.pow( v, 3 ) / 3 ) + u * u * v ) );
		z = scale * ( u * u - v * v );
		return new THREE.Vector3( x, y, z );
	};

	JAPE.curve2 = function( u, v, xLength, zLength, xDelta, zDelta, scale ) {
//		u *= 30;
//		v *= 30;

		xLength =  xLength ? xLength : 200; // length of each facet
		xDelta =  xDelta ? xDelta : 80 ;
		zLength =  zLength ? zLength : 1; // height only
		zDelta =  zDelta ? zDelta : 0;

		scale =  scale ? scale: 10;

//		u = u * xLength - xDelta;
//		v = v * zLength - zDelta;

		u = 100 * ( u - 0.5 );
		v = 100 * ( v - 0.5 );

		x = scale * Math.sqrt( u ) * Math.cos( u );
		y = 0.1 * v;
		z = scale * Math.sqrt(u) * Math.sin( u );

		return new THREE.Vector3( x, y, z );
	};

	JAPE.addParametricGeometry = function( equation, u, v, name ) {
		geometry = new THREE.ParametricGeometry( equation, u, v );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI ) );
		JATH.material = JAMA.materials.PhongTextureRandom()
		JATH.material.side = 2;
		var mesh = new THREE.Mesh( geometry, JATH.material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		mesh.geometry.verticesNeedUpdate = true;
		mesh.geometry.computeFaceNormals();
		mesh.geometry.computeVertexNormals();
		mesh.name = name ? name : '';

		JATH.scene.add( mesh );

		JATH.selectedObject = mesh;
		JAPR.setWireframe();
	};


	var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
	var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians

	function cos( a ){ return Math.cos( a ); }
	function sin( a ){ return Math.sin( a ); }
	function tan( a ){ return Math.tan( a ); }
	function pow( a, b ){ return Math.pow( a, b ); }
	function ran(){ return Math.random(); }

