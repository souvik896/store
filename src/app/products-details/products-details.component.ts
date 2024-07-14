import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProDetailsService } from './pro-details.service';
import { Productdetails } from './model/productdetails';
import { Title, Meta } from '@angular/platform-browser';
import { catchError, Observable, take, tap } from 'rxjs';
@Component({
  selector: 'app-products-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  productId: string;
  productDetails: Productdetails;
  productDetails$: Observable<Productdetails>;
  fallbackImage = 'assets/image.png';
  constructor(
    private route: ActivatedRoute,
    private proDetailsService: ProDetailsService,
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id']; // Get 'id' parameter from route
      console.log('Product ID:', this.productId);
      if (this.productId) {
        this.productDetails$ = this.proDetailsService
          .getProductDetails(this.productId)
          .pipe(
            tap((product) => {
              this.titleService.setTitle(product.title);
              this.metaService.updateTag({
                name: 'description',
                content: product.description,
              });
              this.metaService.updateTag({
                property: 'og:image',
                content: product.image,
              });
            }),
            catchError((error) => {
              console.error(error);
              return [];
            })
          );
      }
    });
  }
  onLoad() {}
}
