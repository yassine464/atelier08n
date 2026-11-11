import { Injectable } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { Marque } from '../model/marque.model';

@Injectable({ providedIn: 'root' })
export class AccessoireService {
  accessoires: Accessoire[];
  marques: Marque[];

  constructor() {
    this.marques = [
      { idMarque: 1, nomMarque: 'Samsung' },
      { idMarque: 2, nomMarque: 'Apple' },
      { idMarque: 3, nomMarque: 'Anker' }
    ];
    this.accessoires = [
      { idAccessoire: 1, nomAccessoire: 'Chargeur rapide', prixAccessoire: 45, dateCreation: new Date('2025-01-14'), marque: this.marques[0] },
      { idAccessoire: 2, nomAccessoire: 'Coque iPhone', prixAccessoire: 25, dateCreation: new Date('2025-02-20'), marque: this.marques[1] },
      { idAccessoire: 3, nomAccessoire: 'Câble USB-C', prixAccessoire: 15, dateCreation: new Date('2025-03-05'), marque: this.marques[2] }
    ];
  }

  listeAccessoires(): Accessoire[] {
    return this.accessoires;
  }

  listeMarques(): Marque[] {
    return this.marques;
  }

  consulterMarque(id: number): Marque {
    return this.marques.find(m => m.idMarque == id)!;
  }

  ajouterAccessoire(acc: Accessoire) {
    const maxId = this.accessoires.reduce((m, a) => Math.max(m, a.idAccessoire), 0);
    acc.idAccessoire = maxId + 1;
    this.accessoires.push(acc);
  }

  supprimerAccessoire(acc: Accessoire) {
    const index = this.accessoires.indexOf(acc);
    if (index > -1) this.accessoires.splice(index, 1);
  }

  consulterAccessoire(id: number): Accessoire {
    return this.accessoires.find(a => a.idAccessoire == id)!;
  }

  updateAccessoire(acc: Accessoire) {
    const index = this.accessoires.findIndex(a => a.idAccessoire == acc.idAccessoire);
    if (index > -1) this.accessoires[index] = acc;
  }
}
