import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Tab1Page} from '../tab1/tab1.page';
//import { Tab1Page } from '../tab1/tab1.module';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  // 처리한 건수/ 처리해야할 건수
 public tempDoughnutData: number[] = [0, 0];
 // 학대, 사고, 길, 기타
 public tempClassification: number[] = [0, 0, 0, 0];
 // tslint:disable-next-line: variable-name
 public temp_completeNum = 0;
 // tslint:disable-next-line: variable-name
 public temp_wholeNum = 0;
 public temp_wabuse = 0;
 public temp_waccident = 0;
 public temp_wcat =0;
 public temp_wother =0;
  constructor() {}

  public doughnutChartLabels: string[] = ['처리한 건수', '처리해야할 건수'];
  public doughnutChartType = 'doughnut';

  public labels: string[] = ['힉대', '사고', '길고양이', '기타'];
  public chartType = 'bar';

  public labels2: string[] = ['1월 ', '2월', '3월', '4월', '5월', '6월', '7월','8월', '9월', '10월', '11월', '12월'];
  public chartData2: number[] = [20, 15, 40, 25, 100, 20, 30, 60, 70, 80, 50, 12, 0];
  public chartType2 = 'line';

   ngOnInit() {
     /*처리할 건수 처리해야할 건수 firebase에서 데이터 읽어오기*/
    firebase.database().ref().once('value').then((snapshot) => {
      // tslint:disable-next-line: prefer-const
          let c = snapshot.child('seoulGu/completeNum').val();  //전체 제보 처리 완료 수
          this.temp_completeNum = c;
          console.log(this.temp_completeNum);
      // tslint:disable-next-line: prefer-const
          let k = snapshot.child(`seoulGu/wholeNum`).val(); // 전체 제보 받은 수
          this.temp_wholeNum = k;
          console.log(this.temp_wholeNum);
          this.tempDoughnutData = [this.temp_completeNum, this.temp_wholeNum];

          let a = snapshot.child(`seoulGu/wabuse`).val(); // 전체 학대 받는 고양이 수
          this.temp_wabuse = a;
          console.log(this.temp_wabuse);

          let b = snapshot.child(`seoulGu/waccident`).val(); // 전체 사고 고양이 수
          this.temp_waccident = b;
          console.log(this.temp_waccident);

          let d = snapshot.child(`seoulGu/wcat`).val(); // 전체 학대 받는 고양이 수
          this.temp_wcat = a;
          console.log(this.temp_wcat);

          let e = snapshot.child(`seoulGu/wother`).val(); // 전체 학대 받는 고양이 수
          this.temp_wother = a;
          console.log(this.temp_wother);

          this.tempClassification = [this.temp_wabuse, this.temp_waccident, this.temp_wcat, this.temp_wother];
    });
  }

}
