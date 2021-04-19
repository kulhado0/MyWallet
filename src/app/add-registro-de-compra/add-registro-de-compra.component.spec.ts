import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AddRegistroDeCompraComponent } from './add-registro-de-compra.component';

describe('AddRegistroDeCompraComponent', () => {
  let component: AddRegistroDeCompraComponent;
  let fixture: ComponentFixture<AddRegistroDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegistroDeCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegistroDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
