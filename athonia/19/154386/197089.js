

	init();

	function init() {
		tileX = 154386;
		tileY = 197089;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY 

		geometry = new THREE.BoxGeometry( 100, 20, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		placeTile( mesh, tileX, tileY );

	}