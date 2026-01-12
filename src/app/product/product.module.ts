import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.servise';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: ':productId', component: ProductDetailComponent },
      { path: '', component: ProductListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [ProductService],
  bootstrap: [],
})
export class ProductModule {}
