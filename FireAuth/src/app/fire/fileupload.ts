export class FileUpload {
  key: string;
  name: string;
  date: string;
  url: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
