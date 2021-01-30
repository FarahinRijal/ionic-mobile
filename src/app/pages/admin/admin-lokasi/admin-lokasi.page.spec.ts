import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminLokasiPage } from './admin-lokasi.page';

describe('AdminLokasiPage', () => {
  let component: AdminLokasiPage;
  let fixture: ComponentFixture<AdminLokasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLokasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminLokasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
