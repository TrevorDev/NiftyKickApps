# NiftyKickApps
Apps and Guides for Niftykick.com
Demo video: https://www.youtube.com/watch?v=R3xZ1G291Ks

This repo is for developers looking to quickly make a webVR application with:
  - No annoyingly large SDK dependencies (Unity, Unreal, etc)
  - App model (Multi-tasking, buttons, windowing mode)
  - Simple APIs (No need to learn hardware specific APIs, or deal with raw WebVR apis)
  - Easy cross platform (WebVR will run on any OS and any device soon enouph)

How to write apps is still in progress and I would love your feedback.
# Required dependenies
  - Nodejs (https://nodejs.org/en/)
  - Typescript enabled editor (Recomended: https://code.visualstudio.com/, Others: https://atom.io/, https://www.sublimetext.com/)
  - VR enabled browser (https://www.mozilla.org/en-US/firefox/new/)
  - Git (https://git-scm.com/)
  - VR Headset (Currently only tested with Vive https://www.vive.com/us/)

# Guide
  - Install dependencies above
  - Open command prompt window (cmd)
  - Install typescript (run: npm install typescript -g)
  - Checkout this git repo (run: git checkout https://github.com/TrevorDev/NiftyKickApps)
  - Navigate to NiftyKickApps folder (run: cd NiftyKickApps;)
  - Run typescript to build all files and rebuild on file changes (tsc -w)
  - Open another command prompt and navigate to NiftyKickApps folder
  - Start local server (run: node server.js) (This will start a local js file server, test at http://localhost:3008/v1/helloWorld/app.js)
  - Try out the existing local hello world app (http://niftykick.com/niftyreality?appUrl=http://localhost:3008/v1/helloWorld/app.js&launcher=false)
  - Modify helloWorld.ts file and observe changes take effect on refresh
  - Build your app
  - Create pull request

# Example app
```
import NiftyOS from "../sharedLibs/niftyOS"
import THREE from "../sharedLibs/three"
import $ from "../sharedLibs/jquery"

var main = async()=>{
  var app = NiftyOS.createApp()
  
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
```
