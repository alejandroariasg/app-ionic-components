import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static:false}) lista: IonList;

  usuarios : Observable<any>;

  constructor(private dataService : DataService, public toastController: ToastController) { }

  ngOnInit() {

    this.usuarios =this.dataService.getUsers();

  }

  async presentToast( message : string ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user){
    this,this.presentToast('Guardado en favoritos!');
    this.lista.closeSlidingItems();

  }

  share(user){
    this,this.presentToast('Compartido en favoritos!');
    this.lista.closeSlidingItems();

  }

  borar(user){
    this,this.presentToast('Borrado de favoritos!');
    this.lista.closeSlidingItems();

  }
  

}
