import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHeaderComponent } from "./app-header/app-header.component";

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BenefitsApplicationListComponent, AmplifyAuthenticatorModule, FormsModule, AppHeaderComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(public authenticator: AuthenticatorService,   private router: Router) {
    Amplify.configure(outputs);
  }



  handleClick() {
    window.location.assign("https://benefitsapp.auth.us-east-2.amazoncognito.com/login?client_id=6rhlo71avsgv4mbplqu3svncc5&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fd1yjoyh4fh2a9u.cloudfront.net")  // add your hosted ui link here
  }
}
