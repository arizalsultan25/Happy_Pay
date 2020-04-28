import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateQrPage } from './create-qr.page';

describe('CreateQrPage', () => {
  let component: CreateQrPage;
  let fixture: ComponentFixture<CreateQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
