import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IAIModelConfig} from '../core-layer/utility/contracts/IAIModelConfig';
import {select, Store} from '@ngrx/store';
import {AiModelConfigState, GetConfigs} from '../core-layer/states/aiModelConfigState';
import {AddConfig, AddConfigs, DeleteConfig, UpdateConfig} from '../core-layer/actions/aiModelConfig.actions';
import {AiModelConfigServiceService} from '../core-layer/services/aiModelConfig-service.service ';

@Injectable()
export class AiModelConfigFacade {

  aiModelConfigs$: Observable<IAIModelConfig[]>;

  constructor(private aiModelConfigApi: AiModelConfigServiceService, private store: Store<AiModelConfigState>) {
    this.aiModelConfigs$ = this.store.pipe(select(GetConfigs));
  }

  getConfigs() {
    this.aiModelConfigApi.getItems().subscribe((value: IAIModelConfig[]) => {
      this.store.dispatch(new AddConfigs(value));
    });
  }

  postConfig(config: IAIModelConfig): Observable<IAIModelConfig> {
    return this.aiModelConfigApi.postItem(config);
  }

  putConfig(config: IAIModelConfig): Observable<IAIModelConfig> {
    return this.aiModelConfigApi.putItem(config);
  }

  deleteConfig(config: IAIModelConfig): Observable<any> {
    return this.aiModelConfigApi.deleteItem(config);
  }

  addToState(config: IAIModelConfig) {
    this.store.dispatch(new AddConfig(config));
  }

  updateToState(config: IAIModelConfig) {
    this.store.dispatch(new UpdateConfig(config));
  }

  deleteToState(config: IAIModelConfig) {
    this.store.dispatch(new DeleteConfig(config.id));
  }

}