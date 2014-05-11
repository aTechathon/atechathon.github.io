

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154385;
		tileY = 197090;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 20, 50, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );
	}