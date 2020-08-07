import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-phy',
  templateUrl: './phy.component.html',
  styleUrls: ['./phy.component.css']
})
export class PhyComponent implements OnInit {
  phyQuestion:any;
  constructor(private shareService:SharingService) { }

  ngOnInit(): void {
  this.getUser() 


  }
  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.phyQuestion = data
      console.log(this.phyQuestion)
    }, err => {
      console.log(err);
    });
  }

}

