/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideojuegoService } from './videojuego.service';

describe('Service: Videojuego', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideojuegoService]
    });
  });

  it('should ...', inject([VideojuegoService], (service: VideojuegoService) => {
    expect(service).toBeTruthy();
  }));
});
