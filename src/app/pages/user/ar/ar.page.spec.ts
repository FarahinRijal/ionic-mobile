import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArPage } from './ar.page';

describe('ArPage', () => {
  let component: ArPage;
  let fixture: ComponentFixture<ArPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
