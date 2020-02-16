import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortFormComponent } from './components/sort-form/sort-form.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatSliderModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { YouTubeComponent } from './components/you-tube/you-tube.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SortFormComponent,
    SetBorderDirective,
    SortPipe,
    FilterPipe,
    YouTubeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,

  ]
})
export class YouTubeModule { }
