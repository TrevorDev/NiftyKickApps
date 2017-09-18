// Reference to libs
var os = window.niftyOS
var app = os.createApp()
var THREE = app.libs.THREE
var $ = app.libs.$

var main = async()=>{
	//Create mesh and add to stage
	var box = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), new THREE.MeshStandardMaterial())
	box.position.z = -3
	app.stage.add(box)
	
	//Runs once per frame
	app.onFrame = (deltaTime, curTime)=>{
		box.position.x = Math.sin(curTime/1000)
	}
}
main()

