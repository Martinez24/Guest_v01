import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPageComponent } from './carta-page.component';

describe('CartaPageComponent', () => {
  let component: CartaPageComponent;
  let fixture: ComponentFixture<CartaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
