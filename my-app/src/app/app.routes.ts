import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
        {
            path: 'data-entry',
            component: FormComponent
        },
        {
            path: 'sign-in',
            component: SignInComponent
        },
        {
            path: 'sign-up',
            component: SignUpComponent
        },
];
