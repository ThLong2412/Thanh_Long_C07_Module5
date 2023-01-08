import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoHang} from '../../model/lo-hang';
import {LoHangService} from '../../service/lo-hang.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input('loHang')
  loHang: LoHang = {};
  @Output()
  eventDelete = new EventEmitter();
  constructor(private loHangService: LoHangService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    if (this.loHang.id != null) {
      this.loHangService.delete(this.loHang.id).subscribe(() => {
        this.router.navigateByUrl('/');
        this.eventDelete.emit();
      }, error => {
        console.log(error);
      });
    }
  }

}
