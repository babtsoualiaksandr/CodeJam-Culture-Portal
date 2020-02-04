import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreComponent } from './firestore/firestore.component';
import { FirestoreService } from './firestore.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ListComponent } from './user/list/list.component';
import { UserComponent } from './user/user/user.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ListUploadFileComponent } from './list-upload-file/list-upload-file.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';

@NgModule({
  declarations: [
     FirestoreComponent,
     ListComponent,
     UserComponent,
     ListUploadFileComponent,
     FormUploadComponent,
     DetailsUploadComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [FirestoreComponent],
  providers: [FirestoreService],
})
export class FireModule {}
