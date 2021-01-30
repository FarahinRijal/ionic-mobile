import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminDaftarkematianPage } from './admin-daftarkematian.page';

describe('AdminDaftarkematianPage', () => {
  let component: AdminDaftarkematianPage;
  let fixture: ComponentFixture<AdminDaftarkematianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDaftarkematianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDaftarkematianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
