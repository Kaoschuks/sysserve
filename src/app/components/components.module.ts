import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChatsBubblesComponent } from './chats-bubbles/chats-bubbles.component';
import { AddChatComponent } from './add-chat/add-chat.component';


export const component = [
	ChatsBubblesComponent, AddChatComponent
]

@NgModule({
	declarations: component,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,
		IonicModule
	],
	exports: component
})
export class ComponentsModule {}
