import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryJungleBoxComponent } from './mystery-jungle-box.component';

describe('MysteryJungleBoxComponent', () => {
  let component: MysteryJungleBoxComponent;
  let fixture: ComponentFixture<MysteryJungleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysteryJungleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryJungleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
