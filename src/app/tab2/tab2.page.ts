import { Component,OnInit, ViewChild } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public title:string;
public items=[];
segment:string;
  constructor( 
    public router: Router, 
    public navCtrl: NavController,
    public plat:Platform,
    public stor:Storage,
    public activatedRoute:ActivatedRoute,
    public db:AngularFireDatabase
  ) {}
  ngOnInit(){
    this.segment='help';
    this.loadList();
  }

  segmentChanged(event){
    this.segment=event.detail.value;
    this.loadList();
  }
  loadList(){
    this.db.list('regisTxt/',ref=>ref.orderByChild('category/').equalTo(this.segment)).valueChanges().subscribe(
      data=>{
        this.items=data;
      });
  }

  // getPost(item: any) {
  //   this.title = item.title;
  //   // window.location.href = 'post/' + this.title + '/' + this.userid;
  //   this.router.navigate(['post', this.title, this.userid]);
  // }
  goCreatePost(){
    this.router.navigate(['create-post']);
  }
  getPost(item:any){
    this.title=item.title;
    this.router.navigate(['post',this.title]);
  }

}
