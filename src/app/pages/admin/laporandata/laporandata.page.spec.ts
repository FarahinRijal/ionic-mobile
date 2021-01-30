import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaporandataPage } from './laporandata.page';

describe('LaporandataPage', () => {
  let component: LaporandataPage;
  let fixture: ComponentFixture<LaporandataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporandataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaporandataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
