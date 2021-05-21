import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements OnInit {
  
  tab:number = 2;

  constructor() {
  }

  ngOnInit() {
   
  }

  activateTab(n) {
    this.tab = n;
  }
}
