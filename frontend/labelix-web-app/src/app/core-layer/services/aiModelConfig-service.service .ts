import { Injectable } from '@angular/core';
import {GenericApiService} from '../utility/logic/generic-api.service';
import {HttpClient} from '@angular/common/http';
import {IAIModelConfig} from '../utility/contracts/IAIModelConfig';

@Injectable({
  providedIn: 'root'
})
export class AiModelConfigServiceService extends GenericApiService<IAIModelConfig>{

  constructor(protected  httpClient: HttpClient) {
    super(httpClient);
    this.urlRoot = 'api/AIModelConfig';
  }
}
