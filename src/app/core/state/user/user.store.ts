import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import {UserDetails} from "./user.model";

export interface UserState extends EntityState<UserDetails>, ActiveState { }

@StoreConfig({ name: 'userDetails' })
export class UserDetailsStore extends EntityStore<UserState, UserDetails> {
  constructor() {
    super();
  }
}
