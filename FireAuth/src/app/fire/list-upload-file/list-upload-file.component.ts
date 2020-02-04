import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-upload-file',
  templateUrl: './list-upload-file.component.html',
  styleUrls: ['./list-upload-file.component.scss'],
})
export class ListUploadFileComponent implements OnInit {
  fileUploads: any[];
  constructor(private uploadService: FirestoreService) {}

  ngOnInit() {
    console.log(this.uploadService);
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService
      .getFileUploads(10)
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
  }
}
