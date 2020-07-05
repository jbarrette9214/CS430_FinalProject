import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContacttowPage } from './contacttow.page';

describe('ContacttowPage', () => {
  let component: ContacttowPage;
  let fixture: ComponentFixture<ContacttowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacttowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
