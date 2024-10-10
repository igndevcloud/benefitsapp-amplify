import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Component } from '@angular/core';
import { BenefitsApplication } from '../benefits-application';
import { Observable } from 'rxjs';
import { BenefitsApplicationService } from '../benefits-application.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-add-benefits-application',
  templateUrl: './add-benefits-application.component.html',
  styleUrls: ['./add-benefits-application.component.css']
})
export class AddBenefitsApplicationComponent //implements OnInit//
{

  constructor(
    private benefitsApplicationService: BenefitsApplicationService,
    public authenticator: AuthenticatorService,
    private router: Router,

  ) {
    this.benefitsApplication.email = authenticator.username;
  }

  submitform!: NgForm;
  benefitsApplication: BenefitsApplication = new BenefitsApplication();

  saveBenefitsApplication() {
    this.benefitsApplicationService.addBenefitsApplication(this.benefitsApplication).subscribe(data => {
      console.log(data);
      this.goToBenefitsApplicationList();
    },
      error => console.log(error));
  }

  goToBenefitsApplicationList() {
    this.router.navigate(['/show-all-benefits-applications']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.benefitsApplication);


    this.saveBenefitsApplication();
  }


}









