import {Action} from '@ngrx/store';
import {IRawImage} from '../utility/contracts/IRawImage';
import {ICategory} from '../utility/contracts/ICategory';
import {AnnotaionMode} from '../annotaionModeEnum';
import {IImageAnnotation} from '../utility/contracts/IImageAnnotation';
import {IProject} from '../utility/contracts/IProject';

// TODO split these actions into different files
export enum ActionTypes {
  AddRawImages = '[ImageAnnotation] Add RawImages',
  AddAnnotationLabel = '[ImageAnnotation] Add AnnotationLabel',
  SetCurrentAnnotationPicture = '[ImageAnnotation] Set Current Annotating Image',
  ChangeCurrentAnnotationMode = '[ImageAnnotation] Change Current Annotation Mode',
  AddImageAnnotation = '[ImageAnnotation] Add Annotation to CurrentImageAnnotations',
  ChangeCategoryOfCurrentImageAnnotation = '[ImageAnnoation] Change Category Of Current Image Annotation',
  UpdateRawImage = '[ImageAnnotation] UpdateRawImage',
  ChangeActiveLabel = '[ImageAnnotation] Change Active Label',
  DeleteImageAnnotation = '[ImageAnnotation] Delete Image Annotation',
  IncrementAnnotationCount = '[ImageAnnotation] Increment Annotation Count',
  SetActiveAnnotation = '[ImageAnnotation] Set active Annotation',
  AddPositionToActivePolygonAnnotation = '[ImageAnnotation]Add Position to active Polygon Annotation',
  AddBase64CodeToIFile = '[ImageAnnotation] Add Base64Code to IFile',
  AddWholeImageAnnotation = '[ImageAnnotation] Add whole image annotation',
  UpdateImageAnnotation = '[ImageAnnotation] Update Image Annotation',
  ReplaceActiveProject = '[ImageAnnotation] Replace active project',
  ClearRawImages = '[ImageAnnotation] Clear Raw Images',
  ResetAnnotationState = '[ImageAnnotation] ResetAnnotationState',
  ResetCategoryLabelState = '[ImageAnnotation] ResetCategoryLabelState',
  ResetActiveImageAnnotation = '[ImageAnnotation] Reset Active Image Annotation to undefined',
  ChangeVisibilityOfImageAnnotation = '[ImageAnnotation] Change visibility',
  UpdateCategory = '[ImageAnnotation] Update Category',
  DeleteCategory = '[ImageAnnotation] Delete Category',
  UpdateCategoryOnAnnotations = '[ImageAnnotation] Update Category on Image Annotations'
}

export class AddRawImagesAction implements Action {
  readonly type = ActionTypes.AddRawImages;

  constructor(public payload: IRawImage[]) {
  }
}

export class AddAnnotationLabel implements Action {
  readonly type = ActionTypes.AddAnnotationLabel;

  constructor(public payload: ICategory) {
  }
}

export class SetCurrentAnnotationPicture implements Action {
  readonly type = ActionTypes.SetCurrentAnnotationPicture;

  constructor(public payload: IRawImage) {
  }
}

export class ChangeCurrentAnnotationMode implements Action {
  readonly type = ActionTypes.ChangeCurrentAnnotationMode;

  constructor(public payload: AnnotaionMode) {
  }
}

export class AddImageAnnotation implements Action {
  readonly type = ActionTypes.AddImageAnnotation;

  constructor(public payload: IImageAnnotation) {
  }
}

export class ChangeCategoryOfCurrentImageAnnotation implements Action {
  readonly type = ActionTypes.ChangeCategoryOfCurrentImageAnnotation;

  constructor(public payload: ICategory) {
  }
}

export class UpdateRawImage implements Action {
  readonly type = ActionTypes.UpdateRawImage;

  constructor(public payload: IRawImage) {
  }
}

export class ChangeActiveLabel implements Action {
  readonly type = ActionTypes.ChangeActiveLabel;

  constructor(public payload: ICategory) {
  }
}

export class DeleteImageAnnotation implements Action {
  readonly type = ActionTypes.DeleteImageAnnotation;

  constructor(public payload: IImageAnnotation) {
  }
}

export class IncrementAnnotationCount implements Action {
  readonly type = ActionTypes.IncrementAnnotationCount;

  constructor() {
  }
}

export class AddPositionToActivePolygonAnnotation implements Action {
  readonly type = ActionTypes.AddPositionToActivePolygonAnnotation;

  constructor(public payload: { x: number, y: number }) {
  }
}

export class SetActiveAnnotation implements Action {
  readonly type = ActionTypes.SetActiveAnnotation;

  constructor(public payload: IImageAnnotation) {
  }
}

export class AddBase64CodeToIFile implements Action {
  readonly type = ActionTypes.AddBase64CodeToIFile;

  constructor(public payload: { id: number, baseCode: string }) {
  }
}

export class AddWholeImageAnnotation implements Action {
  readonly type = ActionTypes.AddWholeImageAnnotation;

  constructor(public payload: ICategory) {
  }
}

export class UpdateImageAnnotation implements Action {
  readonly type = ActionTypes.UpdateImageAnnotation;

  constructor(public payload: IImageAnnotation) {
  }
}

export class ReplaceActiveProject implements Action {
  readonly type = ActionTypes.ReplaceActiveProject;

  constructor(public payload: IProject) {
  }
}

export class ClearRawImages implements Action {
  readonly type = ActionTypes.ClearRawImages;
}

export class ResetAnnotationState implements Action {
  readonly type = ActionTypes.ResetAnnotationState;
}

export class ResetCategoryLabelState implements Action {
  readonly type = ActionTypes.ResetCategoryLabelState;
}

export class ResetActiveImageAnnotation implements Action {
  readonly type = ActionTypes.ResetActiveImageAnnotation;
}

export class ChangeVisibilityOfImageAnnotation implements Action {
  readonly type = ActionTypes.ChangeVisibilityOfImageAnnotation;

  constructor(public payload: IImageAnnotation) {
  }
}

export class UpdateCategory implements Action {
  readonly type = ActionTypes.UpdateCategory

  constructor(public payload: ICategory) {
  }
}

export class DeleteCategory implements Action {
  readonly type = ActionTypes.DeleteCategory

  constructor(public payload: number) {
  }
}

export class UpdateCategoryOInAnnotations implements Action {
  readonly type = ActionTypes.UpdateCategoryOnAnnotations;

  constructor(public payload: ICategory) {
  }
}


export type ImageAnnotationActions =
  | AddRawImagesAction
  | AddAnnotationLabel
  | SetCurrentAnnotationPicture
  | ChangeCurrentAnnotationMode
  | AddImageAnnotation
  | ChangeCategoryOfCurrentImageAnnotation
  | UpdateRawImage
  | ChangeActiveLabel
  | DeleteImageAnnotation
  | IncrementAnnotationCount
  | AddPositionToActivePolygonAnnotation
  | SetActiveAnnotation
  | AddBase64CodeToIFile
  | AddWholeImageAnnotation
  | UpdateImageAnnotation
  | ReplaceActiveProject
  | ClearRawImages
  | ResetAnnotationState
  | ResetCategoryLabelState
  | ResetActiveImageAnnotation
  | ChangeVisibilityOfImageAnnotation
  | UpdateCategory
  | DeleteCategory
  | UpdateCategoryOInAnnotations;