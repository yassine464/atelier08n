import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { Marque } from '../model/marque.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-accessoire.component.html'
})
export class AddAccessoireComponent {
  newAccessoire = new Accessoire();
  marques: Marque[];
  newIdMarque!: number;

  constructor(private accessoireService: AccessoireService, private router: Router) {
    this.marques = accessoireService.listeMarques();
  }

  addAccessoire() {
    this.newAccessoire.marque = this.accessoireService.consulterMarque(this.newIdMarque);
    this.newAccessoire.dateCreation = new Date(this.newAccessoire.dateCreation);
    this.accessoireService.ajouterAccessoire(this.newAccessoire);
    this.router.navigate(['accessoires']);
  }
}
