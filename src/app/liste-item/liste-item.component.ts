import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste-item',
  templateUrl: './liste-item.component.html',
  styleUrls: ['./liste-item.component.css']
})
export class ListeItemComponent implements OnInit {

  produits : Observable<Produit[]>

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.produits = this.apiService.getProduits ();
  }

}