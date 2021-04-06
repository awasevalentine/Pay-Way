import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDataService {


  constructor() { }

  getPaymentDetails(){
     const  details =[{
      subTOtal: 2497.00,
      estimatedTax: 119.64,
      promotionalCode: 'Z4KXLM9A',
      promotionalCodeAmount: -60.00
    }]
    return details;
  }
}
