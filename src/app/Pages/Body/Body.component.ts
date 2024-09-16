import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../Footer/Footer.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './Body.component.html',
  styleUrl: './Body.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent { }
