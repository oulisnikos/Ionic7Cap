import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SearchPageRoutingModule } from './search-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
