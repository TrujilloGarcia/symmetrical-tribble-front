import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/Services/company-service/company.service';

import { Company } from './company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Array<Company>;

  showId: boolean = false;


  constructor(private companyService: CompanyService) { }
  switchId(): void {
    this.showId = !this.showId;
  }
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    )
  }

}
