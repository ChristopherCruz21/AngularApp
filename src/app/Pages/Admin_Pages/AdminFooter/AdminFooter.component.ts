import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './AdminFooter.component.html',
  styleUrl: './AdminFooter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFooterComponent { }
