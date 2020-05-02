import { TestBed } from '@angular/core/testing';

import { SubredditService } from './subreddit.service';

describe('SubredditService', () => {
  let service: SubredditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubredditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
