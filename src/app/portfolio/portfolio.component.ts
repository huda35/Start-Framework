import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [NgFor,LineComponent],
})
export class PortfolioComponent {
  imgsPaths: string[] = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];
}