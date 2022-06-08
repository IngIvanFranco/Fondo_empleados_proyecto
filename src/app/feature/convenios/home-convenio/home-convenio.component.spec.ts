import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConvenioComponent } from './home-convenio.component';

describe('HomeConvenioComponent', () => {
  let component: HomeConvenioComponent;
  let fixture: ComponentFixture<HomeConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConvenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
