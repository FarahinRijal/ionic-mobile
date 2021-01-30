import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasterhomePage } from './masterhome.page';

describe('MasterhomePage', () => {
  let component: MasterhomePage;
  let fixture: ComponentFixture<MasterhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasterhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
