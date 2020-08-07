import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {

  mathQuestion:any
  constructor(private shareService:SharingService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.mathQuestion = data
      console.log(this.mathQuestion)
    }, err => {
      console.log(err);
    });
  }


}
