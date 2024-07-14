import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductlistsService } from './productlists.service';
import { Router } from '@angular/router';
import { Product } from './model/product';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-products-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  ProductlistsService = inject(ProductlistsService);
  router = inject(Router);
  products$: Observable<Product[]>;
  productlist: Product[];
  filteredProducts: Product[];
  filteredProducts$: Observable<Product[]>;
  ngOnInit(): void {
    this.products$ = this.ProductlistsService.getProductLIst();
    this.filteredProducts$ = this.products$;
  }

  /**
   * A function to search products based on the input search query.
   *
   * @param {any} event - The event object triggering the search.
   * @return {void} It updates the filteredProducts$ based on the search query.
   */
  searchProduct(event) {
    if (event.target.value) {
      this.filteredProducts$ = this.products$.pipe(
        map((products) =>
          products.filter((product) =>
            product.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          )
        )
      );
    } else {
      this.filteredProducts$ = this.products$; // Reset to all products if searchquery is empty
    }
  }
  navigateToDetails(id) {
    console.log(id);
    this.router.navigate(['/product-deatils', id]);
  }
}
