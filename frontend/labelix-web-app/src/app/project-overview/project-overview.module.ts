import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectOverviewRoutingModule } from './project-overview-routing.module';
import {ProjectOverviewBaseComponent} from './PresentationLayer/project-overview-base/project-overview-base.component';
import { ProjectGridViewComponent } from './PresentationLayer/project-grid-view/project-grid-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectCardComponent } from './PresentationLayer/project-card/project-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProjectsFacade} from './AbstractionLayer/ProjectsFacade';
import {MaterialModule} from '../material.module';
import {StoreModule} from '@ngrx/store';
import {featureStateName, projectReducers} from './CoreLayer/states/projectState';
import { AddProjectCardComponent } from './PresentationLayer/add-project-card/add-project-card.component';
import { ProjectCreationDialogComponent } from './PresentationLayer/project-creation-dialog/project-creation-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AiModelConfigFacade} from './AbstractionLayer/AiModelConfigFacade';


@NgModule({
  declarations: [
    ProjectOverviewBaseComponent,
    ProjectGridViewComponent,
    ProjectCardComponent,
    AddProjectCardComponent,
    ProjectCreationDialogComponent,
  ],
    imports: [
        CommonModule,
        ProjectOverviewRoutingModule,
        MatGridListModule,
        MatCardModule,
        StoreModule.forFeature(featureStateName, projectReducers),
        MatButtonModule,
        MatProgressSpinnerModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    ProjectsFacade,
    AiModelConfigFacade
  ]
})
export class ProjectOverviewModule { }
