import THREE from "../sharedLibs/three"

export default {
	createCube: (app:App)=>{
		var box = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), new THREE.MeshStandardMaterial())
		app.stage.add(box)
		return box
	}
}