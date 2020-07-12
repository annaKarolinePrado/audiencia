import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaturezaTextoJuridicoPage } from './natureza-texto-juridico.page';

describe('NaturezaTextoJuridicoPage', () => {
  let component: NaturezaTextoJuridicoPage;
  let fixture: ComponentFixture<NaturezaTextoJuridicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturezaTextoJuridicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaturezaTextoJuridicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
