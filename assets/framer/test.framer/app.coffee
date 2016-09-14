# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "alex norton"
	twitter: ""
	description: ""



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



# Screen background color
Screen.backgroundColor = '#fff'

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

button.states.add
	stateA:
		y: 1387

Framer.Defaults.Animation = curve: 'spring(400,40,0)'

button.onClick (event, layer) ->
	react_image.states.next()
	button.states.next()

