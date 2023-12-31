import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {BehaviorSubject, switchMap} from "rxjs";
import {UserService} from "../../../../core/services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  searchQuery$ = new BehaviorSubject<string>('');
  userList = [];
  private readonly router = inject(Router);
  constructor(public US: UserService, private chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.searchQuery$.pipe(switchMap(x => {
          if (x === null || x === '') {
            return [];
          }
        return this.US.getAllUsers(x);
      })).subscribe((x) => {
        console.log(x)
        this.userList = x.items;
        // for edge cases when it doesn't trigger cd
       // setTimeout(() => this.chRef.detectChanges(), 2000);
      })
    }

  navigateToUser(slug: string) {
    this.router.navigate(['/users', slug]);
  }
}
