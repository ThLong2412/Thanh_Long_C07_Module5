import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage';
import {finalize} from 'rxjs/operators';
import {url} from 'inspector';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  selectedImage: any = null;
  imgSrc: any;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  sumbit() {
    if (this.selectedImage !== null) {
      const filePath = `avatar/${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imgSrc = url;
          });
        })
      ).subscribe();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.sumbit();
    } else {
      this.imgSrc = '../../../assets/img.Placeholder.jdg';
      this.selectedImage = null;
    }
  }
}
