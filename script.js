// import MathUtils from './MathUtlis'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ antialias: true });

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.RingGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const ring = new THREE.Mesh( geometry, material );
scene.add( ring );

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper, lightHelper)

const controls = new THREE.OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z]= Array(3).fill().map(() => 200 * Math.random() - 100)

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture

const jeffTexture = new THREE.TextureLoader().load('jeff.jpg')

const jeff = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshStandardMaterial({map:jeffTexture})
)

scene.add(jeff)
const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const normalTexture = new THREE.TextureLoader().load('normal.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(2, 31, 31),
  new THREE.MeshStandardMaterial({map: moonTexture})
)
scene.add(moon)

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg')
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(5, 35, 35),
  new THREE.MeshStandardMaterial({map: saturnTexture})
)
scene.add(saturn)

const earthTexture = new THREE.TextureLoader().load('flat_earth03.jpg')
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: earthTexture})
)
scene.add(earth)

const mecuryTexture = new THREE.TextureLoader().load('208852main_merc_craters.jpg')
const mecury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: mecuryTexture})
)
scene.add(mecury)

const marsTexture = new THREE.TextureLoader().load('mars.jpg')
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: marsTexture})
)
scene.add(mars)

const venusTexture = new THREE.TextureLoader().load('venus.jpg')
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: venusTexture})
)
scene.add(venus)

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg')
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(4, 34, 34),
  new THREE.MeshStandardMaterial({map: jupiterTexture})
)
scene.add(jupiter)

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg')
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: uranusTexture})
)
scene.add(uranus)

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg')
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: neptuneTexture})
)
scene.add(neptune)

const sunTexture = new THREE.TextureLoader().load('sun.jpg')
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(6, 36, 36),
  new THREE.MeshStandardMaterial({map: sunTexture})
)
scene.add(sun)

moon.position.z = 30
moon.position.setX(15)

earth.position.z = 20
earth.position.setX(10)

mecury.position.z = 40
mecury.position.setX(15)

mars.position.z = 50
mars.position.setX(20)

venus.position.z = 60
venus.position.setX(25)

jupiter.position.z = 70
jupiter.position.setX(30)

uranus.position.z = 80
uranus.position.setX(35)

neptune.position.z = 90
neptune.position.setX(40)

sun.position.z = 100
sun.position.setX(45)

function movecamera(){
  const t = document.body.getBoundingClientRect().top
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  
  // jeff.rotation.x += 0.01;
  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  camera.rotation.z = t * -0.01
  camera.rotation.x = t * -0.0002
  camera.rotation.y = t * -0.0002

  earth.rotation.z += 1.75
  earth.rotation.x += 1.5
  earth.rotation.y += 1.5

}
document.body.onscroll = movecamera
function animate() {
  requestAnimationFrame(animate);

  ring.rotation.x += 0.01;
  ring.rotation.y += 0.005;
  ring.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}
animate()