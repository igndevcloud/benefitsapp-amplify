import { DatePipe } from '@angular/common';

export class BenefitsApplication {
    id!: number;
    fname!: string;
    lname!: string;;
    email!: string;;
    address!: string;
    city!:string;
    startDate!: string;

  constructor() {

    this.email="@gmail.com";
    this.address="";
    this.city="";

}}
