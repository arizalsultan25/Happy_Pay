import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiwayatSaldoPage } from './riwayat-saldo.page';

describe('RiwayatSaldoPage', () => {
  let component: RiwayatSaldoPage;
  let fixture: ComponentFixture<RiwayatSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiwayatSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiwayatSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
