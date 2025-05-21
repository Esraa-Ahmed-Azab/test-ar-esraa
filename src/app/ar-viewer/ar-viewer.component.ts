import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
declare const window: any;
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-ar-viewer',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ar-viewer.component.html',
  styleUrl: './ar-viewer.component.scss'
})
export class ArViewerComponent {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  private mixer!: THREE.AnimationMixer;
  private clock = new THREE.Clock();

  modelUrl = '';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.modelUrl = '../../assets/Smartphone_Display_0521123212_texture.usdz';
    });
  }

  // ngAfterViewInit(): void {
  //   this.initScene();
  // }

  // initScene(): void {
  //   const container = this.rendererContainer.nativeElement;
  //   const width = container.clientWidth;
  //   const height = 500;

  //   // Renderer
  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(width, height);
  //   container.appendChild(renderer.domElement);

  //   // Scene & Camera
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  //   camera.position.z = 5;

  //   // Light
  //   const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  //   scene.add(light);

  //   // GLTF Loader
  //   const loader = new GLTFLoader();
  //   let model: THREE.Object3D;


  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true; // optional, for smoother motion
  //   controls.dampingFactor = 0.05;
  //   controls.screenSpacePanning = false;
  //   controls.minDistance = 2;
  //   controls.maxDistance = 10;
  //   loader.load('assets/Smartphone_Display_0517224312_texture.glb', (gltf) => {
  //     model = gltf.scene;
  //     scene.add(model);

  //     animate();
  //   });

  //   const animate = () => {
  //     requestAnimationFrame(animate);
    
  //     controls.update(); // ✅ this is required for damping
  //     if (this.mixer) this.mixer.update(this.clock.getDelta());
    
  //     renderer.render(scene, camera);
  //   };

  //   // Animate loop
  //   // const animate = () => {
  //   //   requestAnimationFrame(animate);

  //   //   if (this.mixer) {
  //   //     const delta = this.clock.getDelta();
  //   //     this.mixer.update(delta);
  //   //   }

  //   //   renderer.render(scene, camera);
  //   // };
  // }

  // async ngAfterViewInit() {
  //   await new Promise(resolve => setTimeout(resolve, 100)); // small delay

  //   const MINDAR = (window as any).MINDAR;
  //   if (!MINDAR || !MINDAR.IMAGE) {
  //     console.error('MindAR is not loaded');
  //     return;
  //   }

  //   const MindARThree = MINDAR.IMAGE.MindARThree;
  //   const mindarThree = new MindARThree({
  //     container: document.querySelector("#ar-container"),
  //     imageTargetSrc: "assets/targets.mind",
  //   });

  //   const { renderer, scene, camera } = mindarThree;
  //   const anchor = mindarThree.addAnchor(0);

  //   const loader = new GLTFLoader();
  //   loader.load("assets/Smartphone_Display_0517224312_texture.glb", (gltf) => {
  //     const model = gltf.scene;
  //     model.scale.set(0.5, 0.5, 0.5); // Adjust size if needed
  //     anchor.group.add(model);
  //   });

  //   await mindarThree.start();

  //   renderer.setAnimationLoop(() => {
  //     renderer.render(scene, camera);
  //   });

  //   anchor.onTargetFound = () => {
  //     console.log("✅ Image target found!");
  //   };
    
  //   anchor.onTargetLost = () => {
  //     console.log("🔁 Image target lost!");
  //   };
  // }
}
