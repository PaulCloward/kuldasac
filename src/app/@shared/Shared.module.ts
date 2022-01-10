import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TimestampDisplayPipe } from './pipes/timestamp-display.pipe';
import { NavComponent } from './components/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';


// *************** BUTTONS & INDICATORS ***************
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

const components = [
  ReversePipe,
  SortPipe,
  TimestampDisplayPipe,
  NavComponent
]

const modules = [
  RouterModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule
];


@NgModule({
  declarations: [
    // ...fromComponents.components,
    // ...fromDirectives.directives,
    ...components,
   
  ],
  imports: [
    ...modules,
  ],
    exports: [
        ...modules,
        // ...fromComponents.components,
        // ...fromDirectives.directives,
        ...components,
    ],
  providers: [
    // DatePipe
  ]
})
export class SharedModule { }
