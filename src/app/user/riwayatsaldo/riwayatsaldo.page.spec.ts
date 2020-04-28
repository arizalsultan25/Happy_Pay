import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiwayatsaldoPage } from './riwayatsaldo.page';

describe('RiwayatsaldoPage', () => {
  let component: RiwayatsaldoPage;
  let fixture: ComponentFixture<RiwayatsaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiwayatsaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiwayatsaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
