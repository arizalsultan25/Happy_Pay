import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisSellerPage } from './regis-seller.page';

describe('RegisSellerPage', () => {
  let component: RegisSellerPage;
  let fixture: ComponentFixture<RegisSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
