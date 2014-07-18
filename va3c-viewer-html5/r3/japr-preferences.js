	JAPR = {} || JAPR;

	JAPR.addPreferencesBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Change the ways things are viewed';
		tab.innerHTML =
			'<a href=# id=tabPreferences ><p class=button >' +
				'<i class="fa fa-wrench"></i> Preferences...' +
			'</p></a>';
		tabPreferences.onclick = function() {JA.toggleTab( JAPR.PreferencesBox ); };

		JAPR.PreferencesBox = tab.appendChild( document.createElement( 'div' ) );
		JAPR.PreferencesBox.style.cssText = 'cursor: auto; display: none; ' ;
		JAPR.PreferencesBox.innerHTML =
			'<h3 >Helpers</h3>' +
			'<p>' +
				'<input type=checkbox id=chkWires /> Wireframe<br>' +

				'<input type=checkbox id=chkFaceNormals /> Face Normals<br>' +
				'<input type=checkbox id=chkVertexNormals /> Vertex Normals<br>' +
//				'<input type=checkbox id=chkVertexTangents /> Vertex Tangents<br>' +

				'Vertical scale<br><input type=range id=rngVerticalScale min=1 max=100 step=1 value=50 >' +

			'</p>' +
			'<h3 >Background</h3>' +
			'<p>' +
				'<input type=radio name=background id=randomGradient /> Random gradient<br>' +
				'<input type=radio name=background id=randomColor /> Random color<br>' +
				'<input type=radio name=background id=selectColor /> Select color ' +
					'<input type=color id=selColor value=#aaaaaa />' +
					'<output id=outBackColor >#aaaaaa</output>' +
			'</p>' +
		'';

		randomGradient.checked = true;
		randomGradient.onchange = function() { JAPR.updateBackground( this.id ); };
		randomColor.onchange = function() { JAPR.updateBackground( this.id ); };
		selectColor.onchange = function() { JAPR.updateBackground( this.id ); };
		selColor.onchange = function() { outBackColor.value = this.value; };

		chkWires.checked = false;
		chkWires.onchange = function() {
			if ( chkWires.checked === true ) {
				JATH.wires = new THREE.WireframeHelper( JATH.selectedObject );
				JATH.scene.add( JATH.wires );
			} else {
				JATH.scene.remove( JATH.wires );
			}
		}

		chkFaceNormals.checked = false;
		chkFaceNormals.onchange = function() {
			if ( chkFaceNormals.checked === true ) {
				JATH.FaceNormals = new THREE.Object3D();
				JATH.FaceNormals.add( new THREE.FaceNormalsHelper( JATH.selectedObject, 5 ) );
				JATH.FaceNormals.add( new THREE.FaceNormalsHelper( JATH.selectedObject, -5 ) );
				JATH.scene.add( JATH.FaceNormals );
			} else {
				JATH.scene.remove( JATH.FaceNormals );
			}
		}

		chkVertexNormals.checked = false;
		chkVertexNormals.onchange = function() {
			if ( chkVertexNormals.checked === true ) {
				JATH.VertexNormals = new THREE.Object3D();
				JATH.VertexNormals.add( new THREE.VertexNormalsHelper( JATH.selectedObject, 5, 'magenta' ) );
				JATH.VertexNormals.add( new THREE.VertexNormalsHelper( JATH.selectedObject, -5, 'magenta' ) );
				JATH.scene.add( JATH.VertexNormals );
			} else {
				JATH.scene.remove( JATH.VertexNormals );
			}
		}
/* broken?
		chkVertexTangents.checked = false;
		chkVertexTangents.onchange = function() {
			if ( chkVertexTangents.checked === true ) {
				JATH.VertexTangents = new THREE.Object3D();
				JATH.VertexTangents.add( new THREE.VertexTangentsHelper( JATH.selectedObject, 50, 'red' ) );
//				JATH.VertexTangents.add( new THREE.VertexTangentsHelper( JATH.selectedObject, -5, 'red' ) );
				JATH.scene.add( JATH.VertexTangents );
			} else {
				JATH.scene.remove( JATH.VertexTangents );
			}
		}
*/

		rngVerticalScale.onchange = function() {
			JATH.selectedObject.scale.y = rngVerticalScale.value * 0.02 * JATH.selectedObject.scale.y; 
			if ( wires ) { wires.scale.y = JATH.selectedObject.scale.y ; }
		};
	};

//		scene.add( new THREE.FaceNormalsHelper( mesh, -50, col ) );

	JAPR.updateBackground = function( id ) {
		if ( JAPR.cssBackround ) { JA.body.removeChild( JAPR.cssBackround ); }
		if ( id === 'randomGradient' ) {
			JAPR.setRandomGradient();
		} else if ( id === 'randomColor' ) {
			JAPR.randomColor();
		} else {
			JAPR.selectColor();;
		}
	};

	JAPR.setRandomGradient = function() {
		JAPR.cssBackround = V3JM.ifr.contentDocument.body.appendChild( document.createElement('style') );
		var col1 = "#" + Math.random().toString(16).slice(2, 8);
		var col2 = "#" + Math.random().toString(16).slice(2, 8);
		var col3 = "#" + Math.random().toString(16).slice(2, 8);
		var X = ( Math.random() * window.innerWidth ).toFixed(0);
		var Y = ( Math.random() * window.innerHeight ).toFixed(0);
		var center =  20 + ( Math.random() * 60 ).toFixed(0);

		JAPR.cssBackround.innerText = 'body { ' +
			'background: -webkit-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: -moz-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); }' +
		'';
// console.log( JAPR.cssBackround ); 
	};

	JAPR.randomColor = function() {
		JAPR.cssBackround = V3JM.ifr.contentDocument.body.appendChild( document.createElement('style') );
		JAPR.cssBackround.innerText = 'body { background-color: #' + Math.random().toString(16).slice(2, 8) + '; }';
	};

	JAPR.selectColor = function() {
		JAPR.cssBackround = V3JM.ifr.contentDocument.body.appendChild( document.createElement('style') );
		JAPR.cssBackround.innerText = 'body { background-color: ' + selColor.value + '; }';
	}
