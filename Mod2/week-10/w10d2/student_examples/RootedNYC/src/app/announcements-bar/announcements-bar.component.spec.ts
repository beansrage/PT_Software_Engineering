import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsBarComponent } from './announcements-bar.component';

describe('AnnouncementsBarComponent', () => {
  let component: AnnouncementsBarComponent;
  let fixture: ComponentFixture<AnnouncementsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
