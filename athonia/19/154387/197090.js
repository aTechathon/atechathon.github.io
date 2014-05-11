

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154387;
		tileY = 197090;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 20, 150, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );
	}