import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaftarkematianPage } from './daftarkematian.page';

describe('DaftarkematianPage', () => {
  let component: DaftarkematianPage;
  let fixture: ComponentFixture<DaftarkematianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarkematianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarkematianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
