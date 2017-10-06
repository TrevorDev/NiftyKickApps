import NiftyOS from "../sharedLibs/niftyOS"
import THREE from "../sharedLibs/three"
import $ from "../sharedLibs/jquery"
import helper from "./helper"

var main = async()=>{
	var app = NiftyOS.createApp()
	
	//Create mesh and add to stage
	var box = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), new THREE.MeshStandardMaterial())
	box.position.z = -3
	app.stage.add(box)
	
	//Create mesh to put on hand
	var leftHand = helper.createCube(app)
	leftHand.scale.copy(new THREE.Vector3(0.15,0.15,0.15))
	leftHand.material.color.setRGB(0,0.1,0.4)

	//Create button to press
	var buttonMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), new THREE.MeshStandardMaterial())
	buttonMesh.position.z = -3
	buttonMesh.position.y = 2
	app.stage.add(buttonMesh)
	var button = app.input.UI.createButton(buttonMesh)
	button.onPress = ()=>{console.log("hit")}

	//Runs once per frame
	app.onFrame = (deltaTime, curTime)=>{
		//move mesh to hand location
		leftHand.position.copy(app.input.body.leftHand.position())
		leftHand.quaternion.copy(app.input.body.leftHand.rotation())
		if(app.input.body.leftHand.buttons.trigger().justPressed){
			box.position.y+=0.2
		}
		if(app.input.body.rightHand.buttons.trigger().justPressed){
			box.position.y-=0.2
		}

		box.position.x = Math.sin(curTime/1000)
	}
}
main()