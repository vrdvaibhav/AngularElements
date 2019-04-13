import { Component, EventEmitter, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() action = new EventEmitter();

  private numberOfClicks = 0;

  constructor() { }

  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
    console.log(this.numberOfClicks);
  }
  ngOnInit() {}
}

