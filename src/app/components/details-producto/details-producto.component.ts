import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductoInterface } from '../../models/producto';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details-producto',
  templateUrl: './details-producto.component.html',
  styleUrls: ['./details-producto.component.css']
})
export class DetailsProductoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public producto: ProductoInterface = {};

  ngOnInit() {
    const idProducto = this.route.snapshot.params['id'];
    this.getDetails(idProducto);
  }

  getDetails(idProducto: string): void {
    this.dataApi.getOneProducto(idProducto).subscribe(producto => {
      this.producto = producto;
    });
  }

}
