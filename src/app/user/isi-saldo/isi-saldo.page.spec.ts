import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsiSaldoPage } from './isi-saldo.page';

describe('IsiSaldoPage', () => {
  let component: IsiSaldoPage;
  let fixture: ComponentFixture<IsiSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsiSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
