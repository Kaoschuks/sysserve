import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

export const services: Array<any> = [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]

@NgModule({
	imports: [
    CommonModule,
	],
  providers: services
})
export class ServicesModule { }
