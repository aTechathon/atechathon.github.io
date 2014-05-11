

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154386;
		tileY = 197090;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 20, 100, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );
	}