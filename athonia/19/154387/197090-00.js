

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154387;
		tileY = 197090;

		msg.innerHTML += 'Hello, world! from ' + tileX + ' ' + tileY;

		geometry = new THREE.BoxGeometry( 20, 150, 150 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );

		var container = new THREE.Object3D();
		var geometry = new THREE.SphereGeometry( 50, 30, 30 );
		var material = new THREE.MeshNormalMaterial( { opacity: 0.8, shading: THREE.SmoothShading, tranaparent: true });
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, -10, 0 );
//		container.add( mesh );
		
		var verts = mesh.geometry.vertices;
		var len = verts.length;
		var scale;
		for ( var i = 0; i < len; i += 5 ) {
			scale = 1 + Math.random() * 1;
			verts[i].x *= scale;
			verts[i].y *= scale;
			verts[i].z *= scale;
		}


		placeTile( mesh, tileX, tileY );
	}