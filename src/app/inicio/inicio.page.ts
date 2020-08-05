import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public nombresReg: string;

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.nombresReg = this.route.snapshot.paramMap.get("id");

  }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 20000);  //30s*/
  }

  /* goBack() {
     // this.navCtrl.back();
     this.navCtrl.navigateBack('/home');
     this.router.navigate(['/home'])
   }*/

}
