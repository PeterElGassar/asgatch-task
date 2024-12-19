import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss',
})
export class LayoutWrapperComponent {
  /**
   *
   */
  constructor() {
    console.log('layout');
  }
}
