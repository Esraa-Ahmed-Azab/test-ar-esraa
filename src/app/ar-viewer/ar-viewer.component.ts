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
  // @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
   @ViewChild('modelViewer', { static: true }) modelViewer!: ElementRef;

  private mixer!: THREE.AnimationMixer;
  private clock = new THREE.Clock();

  modelUrl = '';
  iosUrl='';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.modelUrl = '../../assets/Smartphone_Display_0517224312_texture.glb';
      this.iosUrl = '../../assets/Smartphone_Display_0521123212_texture.usdz';

    });
  }

  openAR() {
    const button = document.getElementById('enterAR');
    if (button) button.style.display = 'none';

    // Must be triggered by user gesture
    (this.modelViewer.nativeElement as any).activateAR();
  }
}
