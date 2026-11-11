import { Routes } from '@angular/router';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AddAccessoireComponent } from './add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './update-accessoire/update-accessoire.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { accessoireGuard } from './accessoire.guard';

export const routes: Routes = [
  { path: 'accessoires', component: AccessoiresComponent },
  { path: 'add-accessoire', component: AddAccessoireComponent, canActivate: [accessoireGuard] },
  { path: 'updateAccessoire/:id', component: UpdateAccessoireComponent, canActivate: [accessoireGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'accessoires', pathMatch: 'full' }
];
