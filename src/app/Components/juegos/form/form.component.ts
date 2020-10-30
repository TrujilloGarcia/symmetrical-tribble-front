import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { Game } from 'src/app/obj/game';
import { CompanyService } from 'src/Services/company-service/company.service';
import { JuegoService } from 'src/Services/juego-service/juego.service';
import { Company } from '../../companies/company';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string = 'Create Game';
  game: Game = new Game();
  companies: Company[];

  categorias: any[] = [{title: 'Shooter', value: 'SHOOTER'},
  {title: 'MOBA', value: 'MOBA'},
  {title: 'RPG', value: 'RPG'},
  {title: 'MMORPG', value: 'MMORPG'},
  {title: 'Roguelike', value: 'ROGUELIKE'},
  {title: 'Metrovida', value: 'METROVIDA'}];


  constructor(private juegoService: JuegoService, private companyService: CompanyService, private router: Router, private activatedRoute: ActivatedRoute, private alertService: AlertService){}

  ngOnInit(): void {
    this.loadCopmanies();
    this.loadJuego();
  }

  /**
   * create
   */
  loadJuego(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.title = 'Editar Juego';
        this.juegoService.getJuego(id).subscribe(
          game => this.game = game
        );
      } else {
        this.title = 'Crear Juego';
      }
    });
  }
  loadCopmanies(): void {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
  }

  public create(): void {
    console.log(this.game);
    this.juegoService.create(this.game).subscribe( game => {
      this.alertService.success(`Se ha creado correctamente el juego: "${game.titulo}"`,{autoClose:true,keepAfterRouteChange:true});
      this.router.navigate(['/juegos']);
    }
    );
  }
  compareCompany(companyToCompare: Company, companySelected: Company) {
    if (!companyToCompare || !companySelected) {
      return false;
    }
    return companyToCompare.idCompany === companySelected.idCompany;
  }
  public update(): void {
    this.juegoService.update(this.game).subscribe(
      response => this.router.navigate(['/juegos'])
    );
  }
}
