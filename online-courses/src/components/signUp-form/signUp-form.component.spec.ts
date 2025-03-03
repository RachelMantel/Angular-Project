import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signUpFormComponent } from './signUp-form.component';

describe('SignUpFormComponent', () => {
  let component: signUpFormComponent;
  let fixture: ComponentFixture<signUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [signUpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(signUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
