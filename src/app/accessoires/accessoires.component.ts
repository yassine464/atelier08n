import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accessoires',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './accessoires.component.html'
})
export class AccessoiresComponent {
  accessoires: Accessoire[];

  constructor(private accessoireService: AccessoireService,
              public authService: AuthService) {
    this.accessoires = accessoireService.listeAccessoires();
  }

  supprimerAccessoire(acc: Accessoire) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) this.accessoireService.supprimerAccessoire(acc);
  }
}
