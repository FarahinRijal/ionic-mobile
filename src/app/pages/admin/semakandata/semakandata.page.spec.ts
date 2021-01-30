import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemakandataPage } from './semakandata.page';

describe('SemakandataPage', () => {
  let component: SemakandataPage;
  let fixture: ComponentFixture<SemakandataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemakandataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemakandataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
