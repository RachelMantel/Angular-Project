import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sign-in',
        loadComponent: () =>
            import('../components/login/login.component').then(m => m.LoginComponent) 
    },
    {
        path: 'sign-up',
        loadComponent: () =>
            import('../components/signUp-form/signUp-form.component').then(m => m.signUpFormComponent) 
    },
    {
        path: 'home',
        loadComponent: () =>
            import('../components/home/home.component').then(m => m.HomeComponent) 
    },
    {
        path: 'about',
        loadComponent: () =>
            import('../components/about/about.component').then(m => m.AboutComponent) 
    },
    {
        path: 'courses',
        loadComponent: () =>
            import('../components/all-courses/all-courses.component').then(m => m.AllCoursesComponent) 
    },
    {path: 'courses/:id/lessons',loadComponent: () => 
        import('../components/lessons/lessons.component').then(m => m.LessonsComponent)
    }
];
