import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ProjectsComponent } from './features/projects/projects';
import { ExperienceComponent } from './features/experience/experience';
import { ContactComponent } from './features/contact/contact';
import { FooterComponent } from './features/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
