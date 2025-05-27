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
// https://test-ar-esraa.vercel.app/assets/Smartphone_Display_0517224312_texture.glb

 androidModelUrl = 'https://test-ar-esraa.vercel.app/assets/Smartphone_Display_0517224312_texture.glb'; // Must be HTTPS and public
  iosModelUrl = 'https://test-ar-esraa.vercel.app/assets/Smartphone_Display_0521123212_texture.usdz';   // Must be HTTPS and public
  modelUrl = '';
  iosUrl='';
  showIos= false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.modelUrl = '../../assets/Smartphone_Display_0517224312_texture.glb';
      this.iosUrl = '../../assets/Smartphone_Display_0521123212_texture.usdz';

    });
  }

   launchAR() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes('android');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isAndroid) {
      this.showIos = false;
      this.launchSceneViewer();
    } else if (isIOS) {
      this.showIos = true;
      this.launchQuickLook();
    } else {
      this.showIos = true;
      alert('AR is only supported on mobile devices.');
    }
  }

   launchSceneViewer() {
    const modelUrl = encodeURIComponent(this.androidModelUrl);
    const sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${modelUrl}&mode=ar_preferred&resizable=false#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`;

    window.location.href = sceneViewerUrl;
  }

  launchQuickLook() {
    const anchor = document.createElement('a');
    anchor.setAttribute('rel', 'ar');
    anchor.setAttribute('href', this.iosModelUrl);
    anchor.style.display = 'none'; // Optional: keep it hidden
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); // Clean up
  }
}
