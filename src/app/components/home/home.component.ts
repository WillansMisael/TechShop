import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public productos = [];
  public producto = '';

  ngOnInit() {
    this.dataApi.getAllProductos().subscribe(productos =>{
      this.productos = productos;
    })
  }
}
