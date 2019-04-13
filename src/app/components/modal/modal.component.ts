import { Component, OnInit ,ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductoInterface } from '../../models/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveProducto(productoForm: NgForm): void {
    if (productoForm.value.id == null) {
      // New 
      productoForm.value.userUid = this.userUid;
      this.dataApi.addProducto(productoForm.value);
    } else {
      // Update
      this.dataApi.updateProducto(productoForm.value);
    }
    productoForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
