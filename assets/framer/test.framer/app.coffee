# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "alex norton"
	twitter: ""
	description: ""


tap_interaction = ->
	button = new Layer
		y: 1165
		x: 322
		borderRadius: 40
		backgroundColor: 'blue'
		opacity: 0.75
		shadowY: 5
		shadowBlur: 10
		shadowSpread: 0
		shadowColor: "rgba(128,128,128,0.25)"
		width: 107
		height: 107
	
	layer_background = new BackgroundLayer
	    backgroundColor: "white"
	
	react_image = new Layer
		width: 300
		image: "images/rd.jpg"
		borderRadius: 50
		x: 225
		y: 181
	
	react_image.states.add
		stateA:
			y: 424
			borderRadius: 0
			x: 10
			width: 730
			height: 487
	
	Framer.Defaults.Animation = curve: 'spring(400,40,0)'
	button.onClick (event, layer) ->
		layer_background.states.next()
		react_image.states.next()
		button.states.next()
	
	button.states.add
		stateA:
			scale: 0.50
			borderRadius: 100
	
	layer_background.states.add
		stateA:
			backgroundColor: "rgba(65,65,65,1)"

# tap_interaction()


# Test Stuff --> Iteratively loop creating images sourced from the web
photo_loop = ->
	scroll = new ScrollComponent # Variable definition + constructor
		size: Screen.size
	scroll.scrollHorizontal = false

	for i in [0..10]
		photos = new Layer
			y: 250 * i
			image: "https://unsplash.it/500/50#{i}" # Inline compute URL
			width: 750
			height: 225
			parent: scroll.content
	
		profile = new Layer
			parent: photos
			width: 143
			height: 143
			y: 41
			x: 41
			borderRadius: 71
			backgroundColor: "rgba(255,255,255,0.75)"
			shadowSpread: 1
			shadowColor: "rgba(122,122,122,0.5)"
			shadowBlur: 25

# photo_loop()




# Explore the pinch function
create_pinch = ->

	photo = new Layer
		x: Align.center
		y: Align.center
		image: "https://unsplash.it/500/50" # Inline compute URL
		width: 400
		height: 400
	
	
	# Enable pinching 
	photo.pinchable.enabled = true
	
	# Enable panning 
	photo.draggable.enabled = true
	 
	# Animate back to original position // Pinch
	photo.onPinchEnd ->
		photo.animate
			properties:
				scale: 1
				rotation: 0
			curve: "spring(300,20,0)"
	
	# Animate back to original position // Drag/Pan
	photo.onDragEnd ->
		photo.animate
			properties:
				scale: 1
				rotation: 0
				x: Align.center
				y: Align.center
			curve: "spring(300,20,0)"
	
	photo_child = new Layer
		x: 0
		y: 25
		width: 50
		height: 50
		backgroundColor: 'red'
		parent: photo

# create_pinch()

# Create a PageComponent 
pager = ->
	
	square_size = 500
	square_padding = 25
	
	layer_background = new BackgroundLayer
		backgroundColor: "white"

	page = new PageComponent
		width: square_size
		height: square_size
		scrollVertical: true
		scrollHorizontal: false
		x: Align.center
		y: Align.center

	# Create 10 layers 
	for index in [0...10]
		layer = new Layer
			parent: page.content
			backgroundColor: index % 2 == 0 && 'red' || 'blue'
			size: square_size
			x: 0
			y: (square_size + square_padding) * index

pager()










