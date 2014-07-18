	var JA = {} || JA;

	JA.titleIcon = '<i class="fa fa-bomb"></i>';  // screen grab please
	JA.TitleText = '"3D Parametric Equations"';

	JA.camX = 100;
	JA.camY = 100;
	JA.camZ = 100; 

	JA.tarX = 0;
	JA.tarY = 0;
	JA.tarZ = 0; 


	JA.addCSS = function() {
		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow: hidden; }' +
			'h1 { margin: 0; }' +
			'a { text-decoration: none; opacity: 0.8; }' +
			'#closer p { margin: 0; opacity: 0.8; }' +
			'#movable { background-color: #ccc; opacity: 0.8; cursor: move; left: 20px; width: 300px; max-height: ' + (window.innerHeight - 100) + 'px; ' +
				'overflow-x: hidden; overflow-y: auto; padding: 10px; position: absolute; top: 20px; z-index: 50; }' +
			'.button { background-color: #eee; outline: 1px #aaa solid; padding: 5px; }' +
		'';
	};

// GUI
	JA.addMenu = function() {
		JA.menu = JA.container.appendChild( document.createElement( 'div' ) );
		JA.menu.id = 'movable';
		JA.menu.title = 'Move this menu panel around the screen or iconize it';
		JA.menu.addEventListener( 'mousedown', JA.mouseMove, false );
		JA.menu.innerHTML = '<a href=# id=closer ><p><i class="fa fa-bars"></i></p></a>' +
			'<h1>' +
				'<a href="" title=' + JA.TitleText + '>' + document.title + ' ' + JA.titleIcon + '</a> ' +
			'</h1>';

		closer.onclick = function() { JA.toggleMenu(); };
	};

	JA.addHR = function(){
		JA.hr = JA.menu.appendChild( document.createElement( 'hr' ) );
	};

	JA.addLibrariesTab = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'View available libraries';
		tab.innerHTML =
			'<a href=# onclick=JA.toggleTab(JA.libraries); ><p class=button >' +
				'<i class="fa fa-paw"></i> Libraries & Tabs...' +
			'</p></a>'; 

		JA.libraries = JA.menu.appendChild( document.createElement( 'div' ) );
		JA.libraries.style.cssText = 'cursor: auto; display: none; ' ;
		JA.libraries.innerHTML =
			'<h4><input type=checkbox id=chkMeier onchange=JA.toggleTab(V3CO.controlsTab.parentElement);JA.toggleTab(V3FR.FileReader.parentElement); > Jurgen Meier Gallery</h4>' +
			'<p>170+ Parametric equations that create 3D objects</p>' +

			'<h4><input type=checkbox id=chkGeometry onchange=JA.toggleTab(JAGE.geometryTab.parentElement); > Geometry</h4>' +
			'<p>Edit position, rotatiion and scale of the selected element</p>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(JA.libraries); >Close</a> ' +
			'</p>' +
		'';
	};

	JA.addAboutTab = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'View useful information';
		tab.innerHTML =
			'<a href=# onclick=JA.toggleDialogs(JA.about);ASFR.ifr.style.display=""; ><p class=button >' +
				'<i class="fa fa-paw"></i> About...' +
			'</p></a>'; 

		JA.about = JA.container.appendChild( document.createElement( 'div' ) );
		JA.about.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; z-index:10; ';
		JA.about.innerHTML =
			'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
			'<h4>Features include the following:</h4>' +
			'<ul>' +
				'<li>xxx</li>' +
				'<li>xxx</li>' +
			'</ul>' +

			'<small>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source code</a> ' +
				'Credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
				'copyright &copy; 2014 Jaanga authors ~ MIT license' +
			'</small><br><br>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleDialogs(JA.about); >Close</a> ' +
			'</p>' +
		'';
	};

	JA.addMessageArea = function() {
		JA.msg = JA.menu.appendChild( document.createElement( 'div' ) );
		JA.msg.style.cssText = 'cursor: auto;';
		JA.msg.innerHTML =
			'<div id=divMsg1 ></div>' +
			'<div id=divMsg2 ></div>' +
			'<div id=divMsg3 ></div>' +
			'<div id=divMsg4 ></div>' +
			'<div id=divMsg5 ></div>' +
		''; 
	};

	JA.addThreeFooter = function() {
		var footer = JA.menu.appendChild( document.createElement( 'div' ) );
		footer.style.cssText = 'cursor: auto;';
		footer.innerHTML =
			'<h2>' +
				'<a id=iconHome ><i class="fa fa-home"></i></a> ' +
			'</h2>'; 
		iconHome.title = "Reset to default view";
		iconHome.href = 'JavaScript:JA.resetCamera();';
	};

	JA.resetCamera = function() {
		app.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
		app.camera.position.set( JA.camX, JA.camY, JA.camZ );
		app.controls = new THREE.TrackballControls( app.camera, app.renderer.domElement );
		app.controls.target.set( JA.tarX, JA.tarY, JA.tarZ );
	};

// Toggles
	JA.toggleMenu = function(  ) {
		var toggle = JA.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < JA.menu.children.length; i++) {
			JA.menu.children[i].style.display = toggle;
		}
	};

	JA.toggleTab = function( tab ) {
		tab.style.display = tab.style.display === 'none' ? '' : 'none' ;
	};

	JA.toggleDialogs = function( dialog ) {
		var toggle = dialog.style.display;
		for (var i = 1, len = JA.container.children.length; i < len; i++) {
			JA.container.children[i].style.display = 'none';
		}
		dialog.style.display = toggle === 'none' ? '' : 'none';
	};

// Events
	JA.onWindowResize = function () {
		JATH.camera.aspect = window.innerWidth / window.innerHeight;
		JATH.camera.updateProjectionMatrix();
		JATH.renderer.setSize( window.innerWidth, window.innerHeight );
		JATH.controls.handleResize(); // todo: verify if needed?
	};

	JA.mouseUp = function() {
		window.removeEventListener('mousemove', JA.divMove, true);
	};

	JA.mouseMove = function( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', JA.divMove, true);
		}
	};
// add move cursor 
	JA.divMove = function( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	};
