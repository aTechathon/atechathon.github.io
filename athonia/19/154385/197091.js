

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154385;
		tileY = 197091;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 150, 20, 50 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );

	}