import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminrequestPage } from './adminrequest.page';

describe('AdminrequestPage', () => {
  let component: AdminrequestPage;
  let fixture: ComponentFixture<AdminrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
