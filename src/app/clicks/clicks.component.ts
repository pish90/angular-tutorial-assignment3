import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css'],
  // styles: [`
  //   .toggle {

  //   }
  // `]
})
export class ClicksComponent implements OnInit {
  clicks = ['click1', 'click2'];
  showText = false;

  constructor() { }

  ngOnInit() {
  }

  displayText() {
    this.showText = true;
  }

}
