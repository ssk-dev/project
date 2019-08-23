import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from "@angular/core";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {BreadcrumbsComponent} from './components/partials/breadcrumbs/breadcrumbs.component';
import {SidebarComponent} from './components/layout/sidebar/sidebar.component';
import {ContentComponent} from './components/layout/content/content.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {ColorSchemaComponent} from './components/partials/color-schema/color-schema.component';
import {ColorSchemaDirective} from './components/partials/color-schema/color-schema.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatTabsModule, MatToolbarModule
} from "@angular/material";
import { DatepickerComponent } from './components/partials/material/datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ColorSchemaComponent,
    ColorSchemaDirective,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
