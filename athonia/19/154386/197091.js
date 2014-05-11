

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154386;
		tileY = 197091;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 150, 20, 100 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );
	}