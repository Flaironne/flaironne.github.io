import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, FadeInDirective],
  templateUrl: './about.html',
})
export class AboutComponent {
  readonly skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['React', 'React Native', 'Vue.js', 'TypeScript', 'JavaScript', 'Material UI', 'Fluent UI', 'Redux', 'Bootstrap', 'HTML5 / CSS3'],
    },
    {
      name: 'Backend',
      skills: ['Node.js / Express', 'Python (FastAPI)', 'PHP (Symfony · Laravel)', 'Java', 'Golang', 'C'],
    },
    {
      name: 'Bases de données',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Tortoise ORM'],
    },
    {
      name: 'DevOps & Outils',
      skills: ['Docker', 'Docker Compose', 'Kubernetes', 'CI/CD (Bitbucket)', 'Keycloak', 'Git'],
    },
    {
      name: 'Langues',
      skills: ['Français — natif', 'Anglais — C1', 'Allemand — B2', 'Chinois — B2 oral'],
    },
  ];
}
