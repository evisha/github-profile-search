import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: `./user-card.component.html`,
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: any;
  @Output() navigateToUser: EventEmitter<string> = new EventEmitter();
}
