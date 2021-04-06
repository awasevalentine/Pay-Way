import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { PaymentDataService } from '../../Core/Services/payment.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paymentForm: FormGroup;
  paymentData = []
  loaderIsActive: boolean;

  constructor(private _paymentDataService: PaymentDataService, private _snackBar: MatSnackBar) {
    this.paymentForm = new FormGroup({
      cardNumber : new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      securityCode: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      saveCard: new FormControl('')
    })
  }

  ngOnInit(): void {
    //fetching from the service..
    this.paymentData = this._paymentDataService.getPaymentDetails()
  }

  addCard() {
    this.loaderIsActive = true;
    setTimeout(()=>{
      this.loaderIsActive = false;
  //this is for toast display confirming sumbition.
    this._snackBar.open('Card added successfully! Please check console for details', 'ok',{
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
    }, 3000);
    console.log(this.paymentForm.value);
    this.paymentForm.reset();
  }


  // method for sompleting payment
  completePayment() {
    console.log('Order completed!')
  }



  //method for error validation message
  formValidationErrorMessage(value){
    if (this.paymentForm.get(`${value}`).hasError('required') && this.paymentForm.get(`${value}`).touched){
      return `${value} is required!`;
    }


  }

}
