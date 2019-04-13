import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductoInterface } from '../../../models/producto';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private productos: ProductoInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  pageActual: number = 1;
  ngOnInit() {
    this.getListProductos();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  getListProductos() {
    this.dataApi.getAllProductos()
      .subscribe(productos => {
        this.productos = productos;
      });
  }

  onDeleteProducto(idProducto: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteProducto(idProducto);
    }
  }

  onPreUpdateProducto(producto: ProductoInterface) {
    //console.log('Producto', producto);
    this.dataApi.selectedProducto = Object.assign({}, producto);
  }


}
