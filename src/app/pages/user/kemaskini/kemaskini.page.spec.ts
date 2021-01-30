import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KemaskiniPage } from './kemaskini.page';

describe('KemaskiniPage', () => {
  let component: KemaskiniPage;
  let fixture: ComponentFixture<KemaskiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KemaskiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
