import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  superHerores: Observable<any>;
  publisher_selected = '';


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHerores = this.dataService.getHerores();
  }

  segmentChanged(event){
    this.publisher_selected = event.detail.value;
    
    if(this.publisher_selected === 'todos'){
      this.publisher_selected = '';
      return;
    }
    
    this.superHerores = this.dataService.getHerores();
  }

}
