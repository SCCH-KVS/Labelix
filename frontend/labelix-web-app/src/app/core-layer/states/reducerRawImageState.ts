import {IRawImage} from '../utility/contracts/IRawImage';
import {ActionTypes, ImageAnnotationActions} from '../actions/image-annotation.actions';

export interface ReducerRawImageState {
  rawImages: IRawImage[];
}

export const initialRawImageState: ReducerRawImageState = {
  rawImages: [],
};

export function rawImageReducer(
  state = initialRawImageState,
  action: ImageAnnotationActions): ReducerRawImageState {
  switch (action.type) {
    case ActionTypes.AddRawImages: {
      const tempActions: IRawImage[] = [];

      state.rawImages.forEach(value => tempActions.push(value));
      action.payload.forEach(value => tempActions.push(value));

      return {
        rawImages: tempActions
      };
    }
    case ActionTypes.UpdateRawImage: {
      const tempActions: IRawImage[] = [];

      state.rawImages.forEach(value => {
        if (value.id === action.payload.id) {
          tempActions.push(action.payload);
        } else {
          tempActions.push(value);
        }
      });

      return {
        rawImages: tempActions
      };
    }
    case ActionTypes.AddBase64CodeToIFile: {
      const tempImages: IRawImage[] = [];
      state.rawImages.forEach(value => {
        if (value.id === action.payload.id) {
          tempImages.push({
            id: value.id,
            file: value.file,
            base64Url: action.payload.baseCode,
            height: value.height,
            width: value.width,
            name: value.name
          });
        } else {
          tempImages.push(value);
        }
      });
      return {
        rawImages: tempImages
      };
    }
    case ActionTypes.ClearRawImages: {
      return {
        rawImages: []
      };
    }
    default:
      return state;
  }
}