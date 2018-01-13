import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapCreateEditComponent } from './wrap-create-edit.component';

describe('WrapCreateEditComponent', () => {
  let component: WrapCreateEditComponent;
  let fixture: ComponentFixture<WrapCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
