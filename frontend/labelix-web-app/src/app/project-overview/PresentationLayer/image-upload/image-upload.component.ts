import { Component, OnInit } from '@angular/core';
import {IRawImage} from '../../../utility/contracts/IRawImage';
import {IImage} from '../../../utility/contracts/IImage';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileDropped($event: any) {
    const tmp: IRawImage[] = [];

    for (const item of $event) {
      // base 64 encoding wird später hinzugefügt
      const reader = new FileReader();
      const image = new Image();
      reader.addEventListener('load', (event: any) => {
        image.src = event.target.result;
        image.onload = () => {
          tmp.push({id: -1, file: item, height: image.height, width: image.width, base64Url: image.src, name: item.name});
        };
      });
      reader.readAsDataURL(item);
    }

  }
}