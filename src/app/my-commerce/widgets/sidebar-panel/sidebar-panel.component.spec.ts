import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { myCommerceRouting } from '../../my-commerce.routing';

import { SidebarPanelComponent } from './sidebar-panel.component';

describe('SidebarPanelComponent', () => {
  let component: SidebarPanelComponent;
  let fixture: ComponentFixture<SidebarPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPanelComponent ],
      imports: [
        myCommerceRouting
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
