import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() show: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log('show overlay: ');
    console.log(this.show);
  }

  showOverlay(): string {
    const overlay = this.show ? 'show' : 'hide';
    return overlay;
  }

}
