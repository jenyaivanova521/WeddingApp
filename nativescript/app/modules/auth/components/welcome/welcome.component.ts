import { Component } from '@angular/core';
import { AuthService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'welcome',
	templateUrl: 'welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
	constructor(private authService: AuthService,) {
		console.log("---Welcome---")		
	}
}
