import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface Project {
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  badge?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, FadeInDirective],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Big Data Dashboard',
      description:
        `Pipeline temps réel de données cryptomonnaies via Apache Kafka,
        visualisation sur un dashboard React et conteneurisation Docker.`,
      gradient: 'from-orange-900/50 to-amber-900/50',
      accentColor: '#f59e0b',
      stack: ['React', 'Python', 'Apache Kafka', 'Docker'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
    {
      title: "Carnet d'Adresses",
      description:
        `Référentiel tiers multi-environnement (Cloud + intégration Devisoc) :
        architecture modulaire React/TypeScript, API REST Node/Express,
        back-end Python FastAPI et base PostgreSQL.`,
      gradient: 'from-violet-900/50 to-indigo-900/50',
      accentColor: '#818cf8',
      stack: ['React', 'TypeScript', 'Node.js', 'Python (FastAPI)', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet pro',
    },
    {
      title: 'Job Board',
      description:
        `Plateforme full-stack de recherche d'emploi : dépôt d'offres,
        candidatures et back-office — du front au back.`,
      gradient: 'from-sky-900/50 to-cyan-900/50',
      accentColor: '#38bdf8',
      stack: ['React', 'Next.js', 'PHP Laravel', 'MySQL'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
  ];
}
