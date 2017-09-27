import NiftyOS from "../sharedLibs/niftyOS"
import THREE from "../sharedLibs/three"
import $ from "../sharedLibs/jquery"
import helper from "./helper"

var main = async()=>{
	var app = NiftyOS.createApp()
	
	//Create mesh and add to stage
	var box = helper.createCube(app)
	
	//Runs once per frame
	app.onFrame = (deltaTime, curTime)=>{
		//console.log(app.input.body.rightHand.position())
		box.position.x = Math.sin(curTime/1000)
	}
}
main()