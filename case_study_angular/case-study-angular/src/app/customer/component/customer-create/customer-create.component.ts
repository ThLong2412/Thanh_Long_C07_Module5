import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  formCreateCustomer = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
    customerTypeId: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    }),
    name: new FormControl('', [Validators.required, Validators.pattern('([A-Z][a-z]+[ ])+([A-Z][a-z]+)')]),
    dateOfBirth: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('([0-9]{9})|([0-9]{12})')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
    gender: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl(),
    flagDelete: new FormControl()
  });
  // tslint:disable-next-line:typedef
  createCustomer() {
    const customer = this.formCreateCustomer.value;
    this.customerServiceService.saveCustomer(customer).subscribe(() => {
      this.router.navigateByUrl('/customer/list');
      this.formCreateCustomer.reset();
      alert('Thêm mới thành công');
    }, error => {

    });
  }

  constructor(private customerServiceService: CustomerServiceService,
              private customerTypeService: CustomerTypeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  // tslint:disable-next-line:typedef
  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypes = data;
    }, error => {
      console.log(error);
    });
  }

}
