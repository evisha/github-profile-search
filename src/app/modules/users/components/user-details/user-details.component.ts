import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public user: any;
  public userRepos: any;
  public userFollowers: any;
  public loading = true;
  constructor(private route: ActivatedRoute, private US: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.getUserData(username);
    });
  }

  getUserData(username: string) {
    combineLatest([this.US.getSingleUser(username), this.US.getUserRepos(username), this.US.getUserFollowers(username)]).subscribe(
      ([userInfo, userRepos, userFollowers]: any) => {
        if (userInfo) {
          this.user = userInfo;
        }
        if (userRepos) {
          this.userRepos = userRepos //.filter((el:any) => Boolean(el.fork));
        }
        if (userFollowers){
          this.userFollowers = userFollowers;
        }
        this.loading = false;
      },
      error => {
        //do something
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }
}
