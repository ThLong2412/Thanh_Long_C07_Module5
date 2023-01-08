import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  customerTypes: CustomerType[] = [];
  formEditCustomer: FormGroup = new FormGroup({});
  // tslint:disable-next-line:max-line-length
  constructor(private customerServiceService: CustomerServiceService, private customerTypeService: CustomerTypeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formEditCustomer = new FormGroup({
      id: new FormControl(this.customer.id),
      code: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
      customerTypeId: new FormControl(''),
      name: new FormControl(this.customer.name, [Validators.required, Validators.pattern('([A-Z][a-z]+[ ])+([A-Z][a-z]+)')]),
      dateOfBirth: new FormControl(this.customer.dateOfBirth),
      idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('([0-9]{9})|([0-9]{12})')]),
      phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
      gender: new FormControl(this.customer.gender),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      address: new FormControl(this.customer.address),
      flagDelete: new FormControl(this.customer.flagDelete)
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getCustomer(+id);
      }
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  compareCate(item1: Customer, item2: Customer): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  getCustomer(id: number): void {
    this.customerServiceService.findById(id).subscribe(data => {
      this.formEditCustomer.patchValue(data);
      this.customer = data;
    });
  }

  editCustomer(): void {
    this.customerServiceService.updateCustomer(this.formEditCustomer.value).subscribe(data => {
      console.log(data);
      alert('sửa thành công');
      this.router.navigateByUrl('/customer/list');
    });
  }

  // tslint:disable-next-line:typedef
  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypes = data;
    });
  }
}
