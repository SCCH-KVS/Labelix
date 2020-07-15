import {annotationReducer, ReducerAnnotationState} from './reducerAnnotationState';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export const annoationStateName = 'annotationStateFeature';

export interface AnnotationState {
  annotation: ReducerAnnotationState;
}

export const annotationStateReducers: ActionReducerMap<AnnotationState> = {
  annotation: annotationReducer,
};

export const getAnnotationFeatureState = createFeatureSelector<AnnotationState>(
  annoationStateName
);

// Methods to subscribe to

export const getCurrentAnnotatingImage = createSelector(
  getAnnotationFeatureState,
  (state: AnnotationState) => state.annotation.currentAnnotatingImage
);

export const getCurrentAnnotationMode = createSelector(
  getAnnotationFeatureState,
  (state: AnnotationState) => state.annotation.currentAnnotationMode
);

export const getCurrentImageAnnotations = createSelector(
  getAnnotationFeatureState,
  (state: AnnotationState) => state.annotation.currentImageAnnotations
);

export const getNumberOfImageAnnotations = createSelector(
  getAnnotationFeatureState,
  (state: AnnotationState) => state.annotation.currentImageAnnotations.length
);