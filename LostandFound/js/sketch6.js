import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1,1,1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x000ff } );
//const geometry = new THREE.CapsuleGeometry( 1, 2, 3, 9 );



const texture = new THREE.TextureLoader().load('textures/stars.jpeg');

const material = new THREE.MeshBasicMaterial( { map:texture } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 8;

cube.position.set(-9.1,0.3); 



function animate() {

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera );

}


// --> load glTf

//load dog model 









// Create Geometry 
class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

 //set up scene, camera, + renderer

//scene = new THREE.Scene();
//camera = new THREE.PerspectiveCamera(75,window,innerWidth/window.innerHeight,0.1,1000);

//renderer = newThree.WebGLRenderer({antialias:true});

//renderer.setSize(window.innerWidth,window.innerHeight);
//document.body.appendChild(renderer.domElement);

//--- Add light--

const light = new THREE.DirectionalLight(0xffffff, 7); 
    light.position.set(3, 6, 5);
    scene.add(light);

