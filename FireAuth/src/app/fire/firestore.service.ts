import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileUpload } from './fileupload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private basePath = '/uploads';
  items: Observable<any[]>;

  constructor(
    private afa: AngularFireAuth,
    private dbUsers: AngularFirestore,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
  ) {}
  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    let uidUser = '';
    this.afa.user.subscribe(user => {
      uidUser = user.uid;
      console.log(uidUser);
    });
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            console.log('File available at', downloadURL);
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            fileUpload.date = moment().format('YYYY MM DD hh:mm:ss');
            this.saveFileData(fileUpload);
          });
        }),
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

  getUsersAll() {
    return this.dbUsers.collection('users').valueChanges();
  }
}
