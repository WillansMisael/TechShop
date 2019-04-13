import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductoInterface } from '../../models/producto';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private productos: ProductoInterface[];
  ngOnInit() {
    this.getDestacados();
    //console.log('OFERTAS', this.productos);
  }


  getDestacados() {
    this.dataApi.getAllProductosDestacado().subscribe(destacados => this.productos = destacados);
  }
 
}
