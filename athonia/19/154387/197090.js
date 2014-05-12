
	init();

	function init() {
		zoomLevel = 19;
		tileX = 154387;
		tileY = 197090;

		var container = new THREE.Object3D();

		geometry = new THREE.BoxGeometry( 250, 10, 250 );
		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 5, 0 );
		container.add( mesh );

		mesh = mesh.clone();
		mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
		container.add( mesh );

		geometry = new THREE.BoxGeometry( 250, 10, 250 );
		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.y = 0.1;
		mesh.position.set( 20, 2, 3);
		material = new THREE.MeshLambertMaterial( {color: Math.random() * 0xffffff, wireframe: false } );
		container.add( mesh );

		mesh = mesh.clone();
		mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
		container.add( mesh );

		geometry = new THREE.BoxGeometry( 250, 10, 250 );
		material = new THREE.MeshLambertMaterial( {color: Math.random() * 0xffffff } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.y = -0.15;
		mesh.position.set( 50, -2, 13);
		material = new THREE.MeshLambertMaterial( {color: Math.random() * 0xffffff, wireframe: false } );
		container.add( mesh );

		mesh = mesh.clone();
		mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
		container.add( mesh );

// CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded )

		for (var i = 0; i < 3; i++) {
			var height = 150 * Math.random() + 100;
			geometry = new THREE.CylinderGeometry( 0, 20, height, 3, 1 );
			material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );
			mesh = new THREE.Mesh( geometry, material );
			mesh.rotation.y = 3 * Math.random();
			mesh.position.set( 200 * Math.random() - 100, 0.5 * height, 200 * Math.random() - 100);
			material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff, wireframe: false } );
			container.add( mesh );

			mesh = mesh.clone();
			mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
			container.add( mesh );
		}

		var x, y, z;
		for (var i = 0; i < 200; i++) {
			geometry = new THREE.BoxGeometry( 10, 10, 10 );
			material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );
			mesh = new THREE.Mesh( geometry, material );

			x = 250 * Math.random() - 125;
			z = 250 * Math.random() - 125;
			y = 300 * Math.sin ( 0.0011 * x ) * Math.cos( 0.018 * z ) + 100;
			mesh.position.set( x, y, z);
			mesh.lookAt( v( 0, 300, 0 ) );
			container.add( mesh );

			mesh = mesh.clone();
			mesh.material = new THREE.MeshBasicMaterial( { wireframe: true } );
			container.add( mesh );
		}

		placeTile( container, tileX, tileY );
	}

