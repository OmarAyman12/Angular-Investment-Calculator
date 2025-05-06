import { Component, computed, inject, Input } from '@angular/core';

import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',

  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService=inject(InvestmentService);

  results=computed(()=> this.investmentService.resultsData());
}
