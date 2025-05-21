import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 👇 Your root standalone component
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { ArViewerComponent } from './ar-viewer/ar-viewer.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';

const routes: Routes = [
    { path: '', component: QrCodeComponent },
    { path: 'ar-viewer', component: ArViewerComponent },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, QrCodeComponent],
  imports: [
    BrowserModule,
    QRCodeModule,
    routing,
    HttpClientModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
