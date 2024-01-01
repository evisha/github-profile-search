import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ],  { optional: true }),
      query(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(20px)' })),
      ],  { optional: true }),
    ]),
  ]),
]);

export const slideAnimation = trigger('slideAnimation', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' })),
      ],   { optional: true }),
      query(':leave', [
        animate('1s ease-out', style({ transform: 'translateX(-100%)' })),
      ],   { optional: true }),
    ]),
  ]),
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
    ], ),
  ], )
])
