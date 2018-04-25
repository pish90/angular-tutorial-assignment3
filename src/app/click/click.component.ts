import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
  styles: [`
        .clicked {
            color: blue;
        }
    `]
})
export class ClickComponent implements OnInit {
  clickTimer: number = 0;
  clicked: string = 'clicked';

  constructor() { }

  ngOnInit() {
  }

  increaseTimer() {
    this.clickTimer++;
  }

  getClicks() {
    return this.clicked;
  }

  getColor() {
    return this.clickTimer === 5 ? 'clicked' : 'white';
  }

}
