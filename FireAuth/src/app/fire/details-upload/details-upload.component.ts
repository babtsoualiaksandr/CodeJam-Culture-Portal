import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../fileupload';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.scss'],
})
export class DetailsUploadComponent implements OnInit {
  @Input() fileUpload: FileUpload;

  constructor(private uploadService: FirestoreService) {}

  ngOnInit() {}

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
