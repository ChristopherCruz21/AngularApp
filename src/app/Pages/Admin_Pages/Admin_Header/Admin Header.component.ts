import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Admin Header.component.html',
  styleUrl: './Admin Header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHeaderComponent { }
