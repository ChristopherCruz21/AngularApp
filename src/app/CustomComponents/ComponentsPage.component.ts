import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../Footer/Footer.component';


@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './ComponentsPage.component.html',
  styleUrl: './ComponentsPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsPageComponent { }
