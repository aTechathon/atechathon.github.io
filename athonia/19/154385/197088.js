

	init();

	function init() {

		tileX = 154385;
		tileY = 197088;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY  ;

		var tile = new THREE.Object3D();

		var geometry = new THREE.BoxGeometry( 50, 200, 150 );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		tile.add( mesh );

		mesh = drawSprite( ['bumble-puppy'] , 0.3, '#0f0', -100, 100, -100 );
		mesh.material.opacity = 0.5;
		tile.add( mesh );

		placeTile( tile, tileX, tileY );

	}