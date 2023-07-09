/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TesteService } from './teste.service';

describe('Service: Teste', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteService]
    });
  });

  it('should ...', inject([TesteService], (service: TesteService) => {
    expect(service).toBeTruthy();
  }));
});
