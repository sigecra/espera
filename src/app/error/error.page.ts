import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 20000);//40s
  }
}