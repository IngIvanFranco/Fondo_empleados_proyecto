import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahorroComponent } from './listahorro.component';

describe('ListahorroComponent', () => {
  let component: ListahorroComponent;
  let fixture: ComponentFixture<ListahorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListahorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListahorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
