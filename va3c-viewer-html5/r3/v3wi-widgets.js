// Widgets are things that appear in the menu
// different for each app
// displayed in order of apppearance on the menu

	var TAWI = {} || TAWI;

//	JA.titleIcon = '<i class="fa fa-bomb"></i>';
//	JA.TitleText = '"3D View-Maker"';

	TAWI.addWidgetsBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Do useful things';
		tab.innerHTML =
			'<a href=# id=tabWidgets ><p class=button >' +
				'<i class="fa fa-cogs"></i> Typical Widgets...' +
			'</p></a>'; 
		tabWidgets.onclick = function() { JA.toggleTab( TAWI.widgetsBox ); };

		TAWI.widgetsBox = tab.appendChild( document.createElement( 'div' ) );
		TAWI.widgetsBox.style.cssText = 'cursor: auto; display: none;' ;
		TAWI.widgetsBox.innerHTML =
			'<div id=wiMsg >Messages appear here...</div>' +
			'<p>A number: <input type=number id=inpNumber title="0 to 30: OK" min=0 max=30 step=1 value=18 /> ' +
					'<output id=outNumber>2x = 36</output></p>' +

				'<p>Pretty things: <input type=checkbox id=inpPretty checked > <output id=outPretty />true</output></p>' +

				'<p>' +
				'Radio 1 <input type=radio name=rad id=radio1 /><br>' +
				'Radio 2 <input type=radio name=rad id=radio2 checked /></br>' +
				'Radio 3 <input type=radio name=rad id=radio3 /> <output id=outRadio >radio2</output></p>' +

				'<p>' +
					'Overlay: <select id=selList title="Select the 2D overlay" >select option</select> ' +
					'<output id=outList >bbb</output>' +
				'</p>' +

				'<p>color: <input type=color id=inpWidgetColor /> <output id=outWidgetColor></output></p>' +

				'<p>' +
					'Range: <input type=range id=inpWidgetRange min=0 max=10 step=1 value=8 /> ' +
					'<output id=outWidgetRange >0.8</output>' +
				'</p>' +

				'<input type=button onclick=alert("saveIt();") value="Save as PNG" >' +
			'</p>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(TAWI.widgetsBox); >Close</a> ' +
			'</p>' +
		'';
		inpNumber.onchange = function() { outNumber.value = '2x = ' + 2 * inpNumber.value; };
		inpPretty.onchange = function() { outPretty.value = inpPretty.checked; };

		radio1.onchange = function() { outRadio.value = this.id; };
		radio2.onchange = function() { outRadio.value = this.id; };
		radio3.onchange = function() { outRadio.value = this.id; };

		var list = [ 'aaa','bbb','ccc','ddd','eee' ];
		for (var option, i = 0; i < list.length; i++) {
			option = document.createElement( 'option' );
			option.innerText = list[i];
			selList.appendChild( option );
		}

		selList.onchange = function() { outList.value = selList.value; };
		selList.selectedIndex = 1;

		inpWidgetColor.onchange = function() { console.log( this.value ); outWidgetColor.value = this.value; }; 
		inpWidgetRange.onmousemove = function() { outWidgetRange.value = this.value; }; 
	};

	TAWI.addAbout = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'View useful information';
		tab.innerHTML =
			'<a href=# onclick=JA.toggleDialogs(TAWI.about);ASFR.ifr.style.display=""; ><p class=button >' +
				'<i class="fa fa-paw"></i> About...' +
			'</p></a>'; 

		TAWI.about = JA.container.appendChild( document.createElement( 'div' ) );
		TAWI.about.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; z-index:10; ';
		TAWI.about.innerHTML =
			'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
			'<h4>Features include the following:</h4>' +
			'<ul>' +
				'<li>xxx</li>' +
				'<li>xxx</li>' +
			'</ul>' +

			'<small>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source code</a> ' +
				'Credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
				'copyright &copy; 2014 Jaanga authors ~ MIT license' +
			'</small><br><br>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleDialogs(TAWI.about); >Close</a> ' +
			'</p>' +
		'';
	};

	TAWI.addMessageArea = function() {
		TAWI.msg = JA.menu.appendChild( document.createElement( 'div' ) );
		TAWI.msg.style.cssText = 'cursor: auto;';
		TAWI.msg.innerHTML =
			'<div id=divMsg1 >Msg aaa</div>' +
			'<div id=divMsg2 >Msg bbb</div>' +
			'<div id=divMsg3 >Msg ccc</div>' +
			'<div id=divMsg4 ></div>' +
			'<div id=divMsg5 ></div>' +
		''; 
	};
