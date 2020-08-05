import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentanaemergentPage } from './ventanaemergent.page';

describe('VentanaemergentPage', () => {
  let component: VentanaemergentPage;
  let fixture: ComponentFixture<VentanaemergentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaemergentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentanaemergentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
