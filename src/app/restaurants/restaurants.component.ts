import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.less'
})
export class RestaurantsComponent {
  restaurants:any[];
constructor(private dataservice : DataService){
this.dataservice.getRestaurants().subscribe(res => this.restaurants = res);
}

  
}
