import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';

describe('CompanyServiceComponent', () => {
  let component: CompanyService;
  let fixture: ComponentFixture<CompanyService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
