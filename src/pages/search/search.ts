import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  animals:any[];

  constructor(public navCtrl: NavController) {

	this.animals = [
		{	name: 'Cody',
			url:'https://g.petango.com/photos/651/e7f26d86-55f7-467c-8dad-18da9a5f30bc_TN1.jpg',
                        age: 7,
                        gender: 'Male'
                }
	];
  }

}
