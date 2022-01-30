import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarSelectorComponent } from './sidebar-selector.component';

describe('SidebarSelectorComponent', () => {
  let component: SidebarSelectorComponent;
  let fixture: ComponentFixture<SidebarSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
