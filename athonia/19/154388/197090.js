

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154388;
		tileY = 197090;

		msg.innerHTML += 'circudilation ' + tileX + ' ' + tileY;

		var tile = new THREE.Object3D();
		var geometry = new THREE.BoxGeometry( 20, 150, 150 );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		tile.add( mesh );

		geometry = new THREE.PlaneGeometry( 256, 256, 50, 50 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );

		mesh = new THREE.Mesh( geometry, material );
		tile.add( mesh );

		mesh = mesh.clone();
		mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
		tile.add( mesh );

		for (var i = 0; i < 10; i++) {
			circuDilation( mesh);
		}
		mesh.geometry.verticesNeedUpdate = true;  

		placeTile( tile, tileX, tileY );
	}

	function circuDilation( mesh) {
		var point = v( 50 * Math.random(), 0,  50 * Math.random() );
		var radius = 20 * Math.random();
		var height = 222 * Math.random();

		var verts = mesh.geometry.vertices;
		for ( var x = 1; x < 50; x++ ) {
			for ( var y = 1; y < 50; y++ ) {
				if (  point.distanceTo( v( x, 0, y ) )  < radius ) {
					verts[ y * 51 + x ].y = height;
				}
			}
		} 
	}
