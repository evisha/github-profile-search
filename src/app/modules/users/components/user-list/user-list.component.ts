import {ChangeDetectorRef, Component} from '@angular/core';
import {BehaviorSubject, switchMap} from "rxjs";
import {UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  searchQuery$ = new BehaviorSubject<string>('');

  constructor(public US: UserService, private chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.searchQuery$.pipe(switchMap(x => {
            console.log(x);

        return this.US.getAllUsers(x);
      })).subscribe(() => {
        // for edge cases when it doesn't trigger cd
       // setTimeout(() => this.chRef.detectChanges(), 2000);
      })
    }
}
