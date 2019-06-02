import { Component } from '@angular/core';

import { Favorites } from '../favorites/favorites';
import { Search } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Search;
  tab2Root = Favorites;
  

  constructor() {

  }
}
