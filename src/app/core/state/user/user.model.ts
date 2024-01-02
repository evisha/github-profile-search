import { ID } from '@datorama/akita';

export interface UserDetails {
  username: string;
  id: ID;
  followers: number;
  following: number;
  repos: number;
}
