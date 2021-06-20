import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  eventss: string[] = [];
  aberto: boolean = false;
  texto : string = "testando";
  cartoes : number = 0;
  isCard1Authorized : boolean = false;
  isCard2Authorized : boolean = false;
  isCard3Authorized : boolean = false;
  isCard4Authorized : boolean = false;
  isCard5Authorized : boolean = false;
  isCard6Authorized : boolean = false;
  isCard7Authorized : boolean = false;
  isCard8Authorized : boolean = false;
  
 
  shouldRun = [/./].some(h => h.test(window.location.host));
  constructor() { }

  ngOnInit(): void {
  }
  
 
  
  somaCartao():void {
    this.cartoes++;
    this.atualizaContadoresCartoes();
  }

  atualizaContadoresCartoes(): void{

    this.isCard1Authorized = this.cartoes >= 1 ? true : false; 
    this.isCard2Authorized = this.cartoes >= 2 ? true : false; 
    this.isCard3Authorized = this.cartoes >= 3 ? true : false; 
    this.isCard4Authorized = this.cartoes >= 4 ? true : false; 
    this.isCard5Authorized = this.cartoes >= 5 ? true : false; 
    this.isCard6Authorized = this.cartoes >= 6 ? true : false; 
    this.isCard7Authorized = this.cartoes >= 7 ? true : false; 
    this.isCard8Authorized = this.cartoes >= 8 ? true : false; 
}

}
