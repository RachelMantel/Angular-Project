import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-signUp-form',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatInputModule,MatFormFieldModule,MatSelectModule,MatButtonModule],
  templateUrl: './SignUp-form.component.html',
  styleUrl: './SignUp-form.component.css',
})
export class signUpFormComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.authService.register(formData).subscribe(
        (response) => {
          const helper={email:formData.email,password:formData.password}
          this.authService.login(helper).subscribe(
            (loginResponse:any) => {
              const token = loginResponse.token;
              sessionStorage.setItem('authToken', token);
              this.userService.setCurrentUser(formData); 
              this.userService.setConnected(true); 
              this.router.navigate(['/home']);
            },
            (error) => {
              console.error('Login after registration error:', error);
            }
          );
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
    } else {
      console.log('Invalid form');
    }
  }
  
}
