import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './customPipe';
import { AppComponent } from './app.component';
import { AddProductComponenetComponent } from './add-product-componenet/add-product-componenet.component';
import { ProductListCompoenentComponent } from './product-list-compoenent/product-list-compoenent.component';
import { CouleurPrix } from '../pipes/couleurPrix.pipe';
import { PriceDirective } from './price.directive';
import { RouterModule, Routes } from '@angular/router';
import { CoutriesComponent } from './coutries/coutries.component';
import { CountryService} from './services/country.service';
import { WebApi1Service } from './services/web-api1.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProductPComponent } from './add-product-p/add-product-p.component';
import { DetailsComponent } from './details/details.component';
import { TestPipePipe } from './test-pipe.pipe';
import { OcServiceService } from './services/oc-service.service';

const  appRoutes: Routes = [
  { path: 'addProduct', component: AddProductPComponent},
  { path: 'home', component: ProductListCompoenentComponent},
  { path: 'app', component: AppComponent},
  { path: 'country/:country', component: DetailsComponent},
  { path: 'country', component: CoutriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponenetComponent,
    ProductListCompoenentComponent,
    CustomPipe,
    CouleurPrix,
    PriceDirective,
    CoutriesComponent,
    AddProductPComponent,
    DetailsComponent,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CountryService, OcServiceService, WebApi1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
