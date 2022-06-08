import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConvenioComponent } from './list-convenio.component';

describe('ListConvenioComponent', () => {
  let component: ListConvenioComponent;
  let fixture: ComponentFixture<ListConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConvenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
