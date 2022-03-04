import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
    let x = 10;
    
    x=20

    x = x -1
    /* debugger; */
    x= 0;
    console.log(x)
  }
}
