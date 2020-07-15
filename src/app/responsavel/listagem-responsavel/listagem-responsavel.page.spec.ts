import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListagemResponsavelPage } from './listagem-responsavel.page';

describe('ListagemResponsavelPage', () => {
  let component: ListagemResponsavelPage;
  let fixture: ComponentFixture<ListagemResponsavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemResponsavelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
