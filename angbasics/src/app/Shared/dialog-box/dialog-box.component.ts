import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})

export class DialogBoxComponent implements OnInit {
  @Input() title: string = '';
  @Input() showHide?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.showHide = false;
  }
}
