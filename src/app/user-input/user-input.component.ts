import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',

  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');
  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
  }
}
