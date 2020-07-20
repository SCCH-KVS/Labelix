import {Action} from '@ngrx/store';
import {IProject} from '../../../utility/contracts/IProject';

export enum ActionTypes {
  AddProject = '[Project] Add Projects',
  DeleteProject = '[Project] Delete Projects'
}

export class AddProjectAction implements Action {
  readonly type = ActionTypes.AddProject;

  constructor(public payload: IProject[]) {
  }
}
export class DeleteProjectAction implements Action {
  readonly type = ActionTypes.DeleteProject;

  constructor(public payload: IProject) {
  }
}

export type ProjectActions =
  | AddProjectAction
  | DeleteProjectAction;