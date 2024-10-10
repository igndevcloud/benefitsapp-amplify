import { Component } from '@angular/core';
import { BenefitsApplication } from '../benefits-application';
import { BenefitsApplicationService } from '../benefits-application.service';
import{FormsModule} from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule],
  selector: 'app-benefits-application-list',
  templateUrl: './benefits-application-list.component.html',
  styleUrls: ['./benefits-application-list.component.css'],
})
export class BenefitsApplicationListComponent {

  benefitsApplications: BenefitsApplication[];
  EnteredID!:number;
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'address', 'city', 'approval'];

  constructor(private benefitsApplicationService: BenefitsApplicationService,
    public authenticator: AuthenticatorService,
    private router: Router) {
    this.benefitsApplications=[];
   }

  ngOnInit(): void {
    this.getBenefitsApplications();
  }

  goToBenefitsApplication(){
    console.log(this.EnteredID);
    this.router.navigate(['details-of-benefits-application',this.EnteredID]);
  }

  getBenefitsApplications(){
    console.log(this.authenticator);
    this.benefitsApplicationService.getBenefitsApplicationsList(this.authenticator.username).subscribe(data => {this.benefitsApplications = data;});
  }

  updateBenefitsApplication(id: number){
    this.router.navigate(['updating-by-id', id]);
  }

  deleteBenefitsApplication(id: number){

    if(confirm("Are you sure to delete BenefitsApplication ID: "+id)){
    this.benefitsApplicationService.deleteBenefitsApplication(id).subscribe( data => {
      console.log(data);
      this.getBenefitsApplications();
    })}
  }

  detailsOfBenefitsApplication(id: number){
    this.router.navigate(['details-of-benefitsApplication', id]);
  }

  addNewApplication(){
    this.router.navigate(['/add-benefits-application']);
  }
}
