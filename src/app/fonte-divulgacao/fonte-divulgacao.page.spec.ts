import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FonteDivulgacaoPage } from './fonte-divulgacao.page';

describe('FonteDivulgacaoPage', () => {
  let component: FonteDivulgacaoPage;
  let fixture: ComponentFixture<FonteDivulgacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonteDivulgacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FonteDivulgacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
