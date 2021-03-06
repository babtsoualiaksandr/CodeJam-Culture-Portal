import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../shared/models/fileupload';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private uploadService: FirestoreService) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
