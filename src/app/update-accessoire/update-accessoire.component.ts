import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { Marque } from '../model/marque.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-update-accessoire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-accessoire.component.html'
})
export class UpdateAccessoireComponent implements OnInit {
  currentAccessoire = new Accessoire();
  marques: Marque[];
  updatedMarqueId!: number;
  dateString = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private accessoireService: AccessoireService) {
    this.marques = accessoireService.listeMarques();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const found = this.accessoireService.consulterAccessoire(id);
    this.currentAccessoire = { ...found };
    this.updatedMarqueId = found.marque.idMarque;
    this.dateString = new DatePipe('en-US').transform(found.dateCreation, 'yyyy-MM-dd')!;
  }

  updateAccessoire() {
    this.currentAccessoire.marque = this.accessoireService.consulterMarque(this.updatedMarqueId);
    this.currentAccessoire.dateCreation = new Date(this.dateString);
    this.accessoireService.updateAccessoire(this.currentAccessoire);
    this.router.navigate(['accessoires']);
  }
}
