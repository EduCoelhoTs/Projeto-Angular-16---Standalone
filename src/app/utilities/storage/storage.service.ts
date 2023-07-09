import { Injectable } from '@angular/core';
import { GeneralStorage } from './general-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends GeneralStorage {

  constructor() {
    super();
  }
}
