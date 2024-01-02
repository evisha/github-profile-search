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
  isSearching = false;
  private readonly router = inject(Router);
  constructor(public US: UserService, private chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.searchQuery$.pipe(switchMap(x => {
      this.isSearching = true;
          if (x === null || x === '') {
            this.isSearching = false;
            return [];
          }
        return this.US.getAllUsers(x);
      })).subscribe((x) => {
        this.userList = x.items;
      })
    }

  navigateToUser(slug: string) {
    this.router.navigate(['/users', slug]);
  }
}
