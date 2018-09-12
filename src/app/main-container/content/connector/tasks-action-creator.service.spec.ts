import { TestBed, inject } from '@angular/core/testing';

import { TasksActionCreatorService } from './tasks-action-creator.service';

describe('TasksActionCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksActionCreatorService]
    });
  });

  it('should be created', inject([TasksActionCreatorService], (service: TasksActionCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
