import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  go() {
    navigateToUrl('/');
  }
}
