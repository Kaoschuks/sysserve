import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { CommentsService } from './comments/comments.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicGestureConfig } from '../gestures/ionic-gesture-config';

export const services: Array<any> = [
  CommentsService,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
  },
]

@NgModule({
	imports: [
    CommonModule,
	],
  providers: services
})
export class ServicesModule { }
