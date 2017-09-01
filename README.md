# NiftyKickApps (More Coming soon)
Apps and Guides for Niftykick.com
Demo video: https://www.youtube.com/watch?v=R3xZ1G291Ks

How to write apps is still in progress and I would love your feedback.

Example app that displays 2 cubes, one infront of user and one that is placed on their hand
```
import App from "../../../libs/niftyOS/app"
import os from "../../../libs/niftyOS/niftyOS"
import MATERIALS from "../../../libs/niftyWorld/libs/materials"
import $ = require("jquery")

//Create app
var app = os.createApp()
var THREE = app.libs.THREE

//Create Button
var buttonMesh = new THREE.Mesh( new THREE.BoxGeometry( 0.1, 0.1, 0.1 ), MATERIALS.DEFAULT )
buttonMesh.position.z = -1
buttonMesh.position.y = 1
app.stage.add(buttonMesh)
var btn = app.libs.UI.createButton(buttonMesh)
btn.onPress = ()=>{
	console.log("hello world")
}

//Create mesh that will be put on users hand
var handMesh = new THREE.Mesh( new THREE.BoxGeometry( 0.1, 0.1, 0.1 ), MATERIALS.DEFAULT )
app.stage.add(handMesh)

//GameLoop
app.onFrame = (delta, time)=>{
	handMesh.position.copy(app.input.body.leftHand.position())
	handMesh.quaternion.copy(app.input.body.leftHand.rotation())
}
```
