import { Injectable } from '@angular/core';
import { GeneralStorage } from './general-storage';

@Injectable({
  providedIn: 'root'
})
export class TesteService extends GeneralStorage {

  constructor() {
    super();
  }

}
