import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  @Input('customer')
  customer: Customer = {};
  @Output()
  eventDelete = new EventEmitter();

  constructor(private customerServiceService: CustomerServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  delete() {
    this.customerServiceService.deleteCustomer(this.customer.id).subscribe(() => {
      this.router.navigate(['/customer/list']);
      this.eventDelete.emit();
    }, e => {
      console.log(e);
    });
  }
}
