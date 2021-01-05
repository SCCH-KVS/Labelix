import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ProjectState} from '../../../core-layer/states/projectState';
import {AddProjectAction} from '../../../core-layer/actions/project.actions';
import {IProject} from '../../../core-layer/utility/contracts/IProject';
import {ProjectServiceService} from '../../../core-layer/services/project-service.service';
import {ProjectsFacade} from '../../../abstraction-layer/ProjectsFacade';
import {FormControl} from '@angular/forms';
import {AiModelConfigFacade} from '../../../abstraction-layer/AiModelConfigFacade';
import {IRawImage} from '../../../core-layer/utility/contracts/IRawImage';
import {ProjectImageUploadFacade} from '../../../abstraction-layer/ProjectImageUploadFacade';
import {IImage} from '../../../core-layer/utility/contracts/IImage';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-project-creation-dialog',
  templateUrl: './project-creation-dialog.component.html',
  styleUrls: ['./project-creation-dialog.component.css']
})
export class ProjectCreationDialogComponent implements OnInit {

  aiModelNames: string[];
  aiIds: number[] = [1, 2]; // todo set to Config ID wich is seleted
  images: IRawImage[];
  imageNumber = 5;
  breakpoint: number;
  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<ProjectCreationDialogComponent>, private projectFacade: ProjectsFacade, private aiModelConfigFacade: AiModelConfigFacade, private imageUploadFacade: ProjectImageUploadFacade) {
    this.imageUploadFacade.rawImages$.subscribe((m) => this.images = m);
    this.dialogRef.afterClosed().subscribe(() => { this.imageUploadFacade.deleteAllImages(0); });
  }
  project: IProject;
  newProjectName: string;
  newProjectDescription: string;
  aiModels = new FormControl();

  ngOnInit(): void {
    this.changeRelation(window.innerWidth);
    this.aiModelConfigFacade.getConfigs();
    this.aiModelConfigFacade.aiModelConfigs$.subscribe(value => {
      const names: string[] = [];
      value.forEach(value1 => {
        names.push(value1.name);
      });
      this.aiModelNames = names;
    });
  }
  onOkSubmit() {
    const imageData: IImage[] = [];
    for (const i of this.images){
      imageData.push({id: -1, Data: i.base64Url, format: '', imageId: -1, projectId: -1, name: i.name});
    }
    this.project = {
      id: 0,
      name: this.newProjectName,
      description: this.newProjectDescription,
      creationDate: new Date(),
      finishedAnnotation: false,
      images: imageData,
      label: '',
      timestamp: undefined,
      AIModelConfig: this.aiIds,
      cocoExport: undefined
    };
    this.projectFacade.postProject(this.project);
    this.dialogRef.close();
  }
  onResize(event) {
    this.changeRelation(event.target.innerWidth);
  }

  private changeRelation(width) {
    if (width >= 3840) {
      this.breakpoint = 8;
    } else if (width >= 3000) {
      this.breakpoint = 6;
    } else if (width >= 1860) {
      this.breakpoint = 4;
    } else if (width >= 1420) {
      this.breakpoint = 3;
    } else if (width >= 950) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 1;
    }
  }
}