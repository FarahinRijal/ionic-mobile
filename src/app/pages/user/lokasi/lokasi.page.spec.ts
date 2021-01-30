import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LokasiPage } from './lokasi.page';

describe('LokasiPage', () => {
  let component: LokasiPage;
  let fixture: ComponentFixture<LokasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LokasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
