import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {ProjectFormComponent} from "./project-form/project-form.component";
import {ProjectFormDurationComponent} from "./controller/project-form-duration.component";
import {DataServiceImpl} from "./shared/service/data.service";
import {DataSerializerImpl} from "./shared/service/data.serializer";








@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule

  ],
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProjectFormComponent,
    ProjectFormDurationComponent,

  ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: "DataService", useClass: DataServiceImpl},
    {provide: "DataSerializer", useClass: DataSerializerImpl}
  ],
})
export class AppModule { }
