import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Body.component.html',
  styleUrl: './Body.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent { }
