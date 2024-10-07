import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { AppModule } from './app.module';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
