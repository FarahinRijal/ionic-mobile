import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminModalpopupPage } from './admin-modalpopup.page';

describe('AdminModalpopupPage', () => {
  let component: AdminModalpopupPage;
  let fixture: ComponentFixture<AdminModalpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModalpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminModalpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
