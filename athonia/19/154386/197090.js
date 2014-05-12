

	init();

	function init() {
		zoomLevel = 19;
		tileX = 154386;
		tileY = 197090;

		msg.innerHTML += 'Stary from ' + tileX + ' ' + tileY;
		var container = new THREE.Object3D();

		var geometry = new THREE.BoxGeometry( 200, 40, 150 );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );

		var verts = mesh.geometry.vertices;
		var len = verts.length;
		var scale;
		for ( var i = 0; i < len; i += 2 ) {
			scale = 1 + Math.random() * 1;
			verts[i].x *= scale;
			verts[i].y *= scale;
			verts[i].z *= scale;
		}
		container.add( mesh );

		geometry = new THREE.SphereGeometry( 50, 30, 30 );
		material = new THREE.MeshNormalMaterial( { opacity: 0.8, shading: THREE.SmoothShading, tranaparent: true });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 50, -80 );
		mesh.scale.z = 2;

		verts = mesh.geometry.vertices;
		len = verts.length;
		for ( var i = 0; i < len; i += 5 ) {
			scale = 1 + Math.random() * 1;
			verts[i].x *= scale;
			verts[i].y *= scale;
			verts[i].z *= scale;
		}
		container.add( mesh );

		placeTile( container, tileX, tileY );
	}