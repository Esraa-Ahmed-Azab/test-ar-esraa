import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ArViewerComponent } from './ar-viewer/ar-viewer.component';

const routes: Routes = [
    { path: '', component: ArViewerComponent }, 
    { path: 'ar-viewer', component: ArViewerComponent },
    { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // automatically scrolls to top
  anchorScrolling: 'enabled',    
  useHash: true        // enables scrolling to anchors
};

export const routing = RouterModule.forRoot(routes, routerOptions);
