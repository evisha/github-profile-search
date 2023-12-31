import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public user: any;
  public loading = true; // Add a loading indicator
  constructor(private route: ActivatedRoute, private US: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      console.log(params);
      this.US.getSingleUser(username).subscribe(doc => {
        this.user = doc;
        this.loading = false; // Turn off the loading indicator when data is received
      }, (error) => {
        console.error('Error fetching data:', error);
        this.loading = false; // Turn off the loading indicator in case of an error
      })
    });
  }
}
