import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiwayatTransaksiPage } from './riwayat-transaksi.page';

describe('RiwayatTransaksiPage', () => {
  let component: RiwayatTransaksiPage;
  let fixture: ComponentFixture<RiwayatTransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiwayatTransaksiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiwayatTransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
