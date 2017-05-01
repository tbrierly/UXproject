
$(document).ready(function() {
    $('#vmap').vectorMap({ 
	map: 'world_en',
    backgroundColor: 'none',
    borderColor: '#ffffff',
    borderOpacity: 0.35,
    borderWidth: 1,
    color: '#111111',
	colors:{
		us: '#fff600',
		pl: '#fff600',
		jp: '#fff600',
		br: '#fff600',
		ca: '#fff600',
		fr: '#fff600',
		ru: '#fff600',
		es: '#fff600',
		de: '#fff600',
		gb: '#fff600',
		kr: '#fff600',
	},
    enableZoom: true,
    hoverColor: '#9f9c4b',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#cef78f',
    selectedRegions: null,
    showTooltip: true,
	//Events
	onRegionClick: function(element, code, region){
		if ($(event.currentTarget).data('mapObject').isMoving) {
			e.preventDefault();
		}else{
			var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

       // alert(message);
		}
    },
	//Select a country
	onRegionSelect: function(element, code, region){
		                                     // Prevent loading
    var country = "ctu.html#"+code;                               // Title is in href

    country = country.replace('#', ' #');                 // Add space after#
    $('#CTcontent').load(country);                           // To load info

    $('#CTcontent a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
	}
	
	});
	//End of Map Creation
	//Canvas tile sprite
	
	//var gridRenderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	//$("#grid").append(gridRenderer.view);
	var gridStage = new PIXI.Container();
	
	var app = new PIXI.Application(window.innerWidth, window.innerHeight);
	$('#grid').append(app.view);

	// create a texture from an image path
	var texture = PIXI.Texture.fromImage('images/grid.png');

	/* create a tiling sprite ...
	 * requires a texture, a width and a height
	 * in WebGL the image size should preferably be a power of two
	 */
	var tilingSprite = new PIXI.extras.TilingSprite(
		texture, 
		app.renderer.width,
		app.renderer.height
	);
	app.stage.addChild(tilingSprite);

	var count = 0;

	app.ticker.add(function() {

		count += 0.5;
		tilingSprite.tilePosition.x += 0.3;
		//tilingSprite.tilePosition.y += 1;
	});
	//End of tile generator
	
	//Click events
	$('#content').on('click', '#listBox li a', function(e) { // Click on session
    e.preventDefault();                                     // Prevent loading
    var fragment = this.href;                               // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#CTcontent').load(fragment);                           // To load info

    $('#CTcontent a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
  });

  

});


	