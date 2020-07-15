import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListagemAudienciaPage } from './listagem-audiencia.page';

describe('ListagemAudienciaPage', () => {
  let component: ListagemAudienciaPage;
  let fixture: ComponentFixture<ListagemAudienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAudienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemAudienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
