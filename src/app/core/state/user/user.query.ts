import { QueryEntity } from '@datorama/akita';
import {UserDetailsStore, UserState} from "./user.store";
import {UserDetails} from "./user.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<UserState, UserDetails> {
  constructor(protected store: UserDetailsStore) {
    super(store);
  }
}
