import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  show: boolean = false;
  constructor() { }
  ngOnInit(): void {}
  showOverlay(): string {
    const overlay = this.show ? 'show' : 'hide';
    return overlay;
  }

}
