import { Component } from '@angular/core';

const FEATURES = [
  {
    name: "Home",
    icon: "assets/home.svg",
    link: "/home-component"
  },
  {
    name: "Einkaufsliste",
    icon: "assets/shopping.svg",
    link: "/shoppinglist-component"
  },
  {
    name: "Finanzen",
    icon: "assets/euro.svg",
    link: "/finance-component"
  },
  {
    name: "Putzplan",
    icon: "assets/cleaning.svg",
    link: "/cleaningplan-component"
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  features = FEATURES;
  opened = true;
  
  log(state:any) {
    console.log(state);
  }
}
