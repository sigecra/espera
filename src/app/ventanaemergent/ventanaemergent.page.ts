import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'
@Component({
  selector: 'app-ventanaemergent',
  templateUrl: './ventanaemergent.page.html',
  styleUrls: ['./ventanaemergent.page.scss'],
})
export class VentanaemergentPage implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {
  }

  ClosePop() {
    this.popover.dismiss();
  }
}
