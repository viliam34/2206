import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js'
import { texture } from 'three/examples/jsm/nodes/Nodes.js'

var model
var model_roof
var is_secondary_color_added = false
var is_roof_added = false
var controller_secondary_color
/**
 * Base
 */
// Debug
const gui = new GUI()




// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const exrLoader = new EXRLoader()
exrLoader.load('environment/forest.exr', (environmentMap) => {
    console.log(environmentMap)
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.background = new THREE.Color(0xF8F9F9)
    scene.environment = environmentMap
})
/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null

gltfLoader.load(
    '/models/Uaz/uaz-base.glb',
    (gltf) => {
        gltf.scene.scale.set(1, 1, 1)

        model = gltf.scene
        model.name = "base_car"
        console.log(model.name)
        scene.add(model)

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        ; // Object
    }
)

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
        color: '#F8F9F9',
        metalness: 0,
        roughness: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
floor.name = "floor"
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.4)
scene.add(ambientLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 8, 2)

scene.add(camera)


// GUI
const UazObject = {
    roof_rack: true,
    roof: 'roof',
    two_tone_paint: false,
    color_primary: 'rgb(56, 111, 89)'
};
gui.add(UazObject, 'roof', { "Standard": 0, "High roof": 1, "Folding roof": 2 })
gui.add(UazObject, 'roof_rack')
gui.add(UazObject, 'two_tone_paint')
gui.addColor(UazObject, 'color_primary')

// add conditional controls



// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true
controls.screenSpacePanning = false
controls.minDistance = 4 // Zoom min
controls.maxDistance = 8 // Zoom max
controls.rotateSpeed = 0.5
controls.panSpeed = 0
controls.minPolarAngle = 0
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas

})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0


document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 65: // A
            model.rotation.y -= 0.05;
            break;
        case 68: // D
            model.rotation.y += 0.05;
            break;
    }
});

// need to be done recursively in order to explore all branches
var models = scene.children
for (let i = 0; i < models.length; i++) {
    console.log(models[i])
}
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if (mixer) {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    if (UazObject.two_tone_paint == true && is_secondary_color_added == false) {
        UazObject.color_secondary = 'rgb(56, 111, 89)'
        controller_secondary_color = gui.addColor(UazObject, 'color_secondary')
        is_secondary_color_added = true
    }
    if (UazObject.two_tone_paint == false && is_secondary_color_added == true) {
        controller_secondary_color.hide()
        is_secondary_color_added = false
    }
    if (UazObject.roof == 1 && is_roof_added == false) {
        gltfLoader.load(
            '/models/Uaz/highroof.glb',
            (gltf) => {
                gltf.scene.scale.set(1, 1, 1)
                model_roof = gltf.scene
                model_roof.name = "high_roof"
                scene.add(model_roof)
                is_roof_added = true

                // Animation
                mixer = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.clipAction(gltf.animations[2])
                action.play()
            }
        )
    }
    if (is_roof_added == true && UazObject.roof == 0) {
        is_roof_added = false
        models = scene.children
        for (let i = 0; i < models.length; i++) {
            if (models[i].name == 'high_roof') {
                scene.remove(models[i])
            }
        }
        console.log(is_roof_added)
    }
    // Render
    renderer.render(scene, camera)
    camera.lookAt(0, 10, 0); // Fix camera to vehicle
    if (camera.position.y < 1.2) {  // To prevent camera from going lower than desired
        camera.position.y = 1.2;
    }


    // Add items to GUI based on user behaviour



    controls.target.set(0, 0, 0);
    controls.update();
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

