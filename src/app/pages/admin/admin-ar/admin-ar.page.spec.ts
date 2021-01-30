import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminArPage } from './admin-ar.page';

describe('AdminArPage', () => {
  let component: AdminArPage;
  let fixture: ComponentFixture<AdminArPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminArPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
