import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public nombresReg: string;

  tarifa: any[] = [];
  constructor(public regService: ApiService, private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.nombresReg = this.route.snapshot.paramMap.get("id");

  }


  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 40000);  //40s
    this.regService.getTarifa()
      .subscribe(
        (data) => { // Success
          console.log(data);
          this.tarifa = data[0]['tarifa'];
          console.log(this.tarifa);
          return (this.tarifa)
        },
        (error) => {
          console.error(error);
        }
      )
  }

  /* goBack() {
     // this.navCtrl.back();
     this.navCtrl.navigateBack('/home');
     this.router.navigate(['/home'])
   }*/

}
