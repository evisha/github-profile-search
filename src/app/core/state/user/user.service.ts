import { ID } from '@datorama/akita';
import {UserDetailsStore} from "./user.store";
import {UserDetails} from "./user.model";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserStoreService {
  constructor(private userStore: UserDetailsStore) {
  }

  addUserDetails(user: UserDetails) {
    this.userStore.add(user);
  }

  updateUserDetails(data: UserDetails) {
    this.userStore.update(data.id, userDetails => {
      return {
        ...userDetails,
      }
    });
  }

  selectUserDetails(id: ID) {
    this.userStore.setActive(id);
  }

  deleteUserDetails(id: ID) {
    this.userStore.remove(id);
  }
}
