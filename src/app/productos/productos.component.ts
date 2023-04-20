import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  urlBebidas!: string;
  urlTabaco!: string;

  ngOnInit(): void {
    this.urlBebidas = 'https://drive.google.com/file/d/1OB5x0AlOAQk50vwgB55NVQcci-9pkWwX/view';
    this.urlTabaco = 'https://drive.google.com/file/d/1G6nnJGJVg91uryVX6DsJ1hvaGgV4k4to/view';
  }

}
