import {TestBed, inject} from '@angular/core/testing';

import {UserService} from './user.service';
import {userInfo} from "os";
import {User} from "../models/user";


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });


  it('should have add function',
    inject([UserService], (service: UserService) => {
      //expect(service.getUser(user)).toBeTruthy();
    }));
  // it('should be created', inject([UserService], (service: UserService) => {
  //   expect(service).toBeTruthy();
  // }));
});
