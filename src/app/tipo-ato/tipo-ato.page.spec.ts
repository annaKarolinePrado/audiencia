import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoAtoPage } from './tipo-ato.page';

describe('TipoAtoPage', () => {
  let component: TipoAtoPage;
  let fixture: ComponentFixture<TipoAtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAtoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoAtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
