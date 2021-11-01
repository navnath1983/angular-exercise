import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})

export class DialogBoxComponent implements OnInit {
  @Input() title: string = '';
  @Input() showHide?: boolean;
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.showHide = false;
    this.onClose.emit('Dialog Closed');
  }
}
