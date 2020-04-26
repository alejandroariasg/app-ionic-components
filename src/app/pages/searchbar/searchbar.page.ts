import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumnes: any[] = [];
  textoBuscar = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    
    this.dataService.getAlbunes().subscribe(albumnes => {
      console.log(albumnes);
      this.albumnes = albumnes;
    });
  }

  buscar(event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
