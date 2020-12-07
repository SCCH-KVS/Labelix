import {Component, OnInit} from '@angular/core';
import {IRawImage} from '../../../utility/contracts/IRawImage';
import {ProjectImageUploadFacade} from '../../AbstractionLayer/ProjectImageUploadFacade';

@Component({
  selector: 'app-image-timeline',
  templateUrl: './image-timeline.component.html',
  styleUrls: ['./image-timeline.component.css']
})
export class ImageTimelineComponent implements OnInit {
  listOfRawImages: IRawImage[];

  constructor(private rawImageFacade: ProjectImageUploadFacade) {
  }
  ngOnInit(): void {
    this.rawImageFacade.rawImages$.subscribe(value => {
      this.listOfRawImages = value;
      for (const item of this.listOfRawImages) {
        if (item.base64Url === undefined) {
          this.getBase64(item);
        }
      }
    });
  }

  private getBase64(item: IRawImage) {
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.rawImageFacade.addBase64CodeToIFile({
        id: item.id,
        baseCode: event.target.result
      });
    });
    reader.readAsDataURL(item.file);
  }
}
