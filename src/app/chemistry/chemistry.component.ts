import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {

  chemQuestion:any;

  constructor( private shareService:SharingService ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.chemQuestion = data
      console.log(this.chemQuestion)
    }, err => {
      console.log(err);
    });
  }


}
