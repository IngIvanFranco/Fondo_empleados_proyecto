import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConvenioComponent } from './view-convenio.component';

describe('ViewConvenioComponent', () => {
  let component: ViewConvenioComponent;
  let fixture: ComponentFixture<ViewConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConvenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
