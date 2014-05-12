

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154388;
		tileY = 197089;

		msg.innerHTML += 'Bon jour, monde! de ' + tileX + ' ' + tileY ;

		geometry = new THREE.BoxGeometry( 150, 20, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );

	}