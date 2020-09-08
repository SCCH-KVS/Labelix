import {Injectable} from '@angular/core';
import {ProjectServiceService} from '../CoreLayer/services/project-service.service';
import {select, Store} from '@ngrx/store';
import {getAllProjects, getNumberOfExistingProjects, ProjectState} from '../CoreLayer/states/projectState';
import {IProject} from '../../utility/contracts/IProject';
import {AddProjectAction, DeleteProjectAction, GetProjectsAction} from '../CoreLayer/actions/project.actions';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ProjectsFacade {
  projects$: Observable<IProject[]>;
  numberOfProjects$: Observable<number>;

  constructor(private projectApi: ProjectServiceService, private store: Store<ProjectState>) {
    this.projects$ = this.store.pipe(select(getAllProjects));
    this.numberOfProjects$ = this.store.pipe(select(getNumberOfExistingProjects));
  }

  async getProjects() {
    this.projectApi.getItems().subscribe((value: IProject[]) => {
      value.forEach(item => console.log(item.name));
      this.store.dispatch(new GetProjectsAction(value));
    });
  }

  addProject(importProject: IProject) {
    this.projectApi.postItem(importProject);
    this.store.dispatch(new AddProjectAction(importProject));
  }
}
