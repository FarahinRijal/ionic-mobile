import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSearchPage } from './admin-search.page';

describe('AdminSearchPage', () => {
  let component: AdminSearchPage;
  let fixture: ComponentFixture<AdminSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
