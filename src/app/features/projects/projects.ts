import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface Project {
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
  stack: string[];
  githubUrl?: string;
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
    // — Projets pro —
    {
      title: "Carnet d'Adresses",
      description:
        "Référentiel tiers multi-environnement (Cloud + intégration Devisoc) : " +
        "architecture modulaire React/TypeScript, API REST Node/Express, " +
        "back-end Python FastAPI et base PostgreSQL.",
      gradient: 'from-violet-900/50 to-indigo-900/50',
      accentColor: '#818cf8',
      stack: ['React', 'TypeScript', 'Node.js', 'Python (FastAPI)', 'PostgreSQL', 'Docker'],
      badge: 'Projet pro',
    },
    {
      title: 'SOC AI Server',
      description:
        "Serveur IA permettant d'intégrer des modèles clients via RAG " +
        "pour des réponses contextualisées au sein des logiciels Devisoc et JustBim. " +
        "Conception de l'API, modélisation de la base et gestion des embeddings.",
      gradient: 'from-fuchsia-900/50 to-purple-900/50',
      accentColor: '#e879f9',
      stack: ['Python (FastAPI)', 'PostgreSQL', 'Tortoise ORM', 'RAG'],
      badge: 'Projet pro',
    },
    {
      title: 'SOC Online',
      description:
        "Plateforme web de gestion de projets à destination des clients de SOC Informatique. " +
        "Développement des interfaces React et du back-end Python FastAPI, " +
        "avec authentification Keycloak et déploiement Kubernetes.",
      gradient: 'from-blue-900/50 to-slate-900/50',
      accentColor: '#60a5fa',
      stack: ['React', 'Python (FastAPI)', 'Keycloak', 'Kubernetes'],
      badge: 'Projet pro',
    },
    // — Projets scolaires —
    {
      title: 'Big Data Dashboard',
      description:
        "Pipeline temps réel de données cryptomonnaies via Apache Kafka, " +
        "visualisation sur un dashboard React et conteneurisation Docker.",
      gradient: 'from-orange-900/50 to-amber-900/50',
      accentColor: '#f59e0b',
      stack: ['React', 'Python', 'Apache Kafka', 'Docker'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
    {
      title: 'Job Board',
      description:
        "Plateforme full-stack de recherche d'emploi : dépôt d'offres, " +
        "candidatures et back-office — du front au back.",
      gradient: 'from-sky-900/50 to-cyan-900/50',
      accentColor: '#38bdf8',
      stack: ['React', 'Next.js', 'PHP Laravel', 'MySQL'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
    {
      title: 'Time Manager',
      description:
        "Application de gestion du temps de travail pour une mairie fictive (projet Gotham) : " +
        "suivi des présences, dashboards hebdomadaires/journaliers, gestion des équipes " +
        "et rôles (employé, manager, directeur général). Back-end Elixir/Phoenix, front Vue.js.",
      gradient: 'from-rose-900/50 to-red-900/50',
      accentColor: '#fb7185',
      stack: ['Vue.js', 'Elixir', 'Phoenix', 'Docker'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
    {
      title: 'Travel Order Resolver',
      description:
        "Chatbot intelligent de recherche d'itinéraires ferroviaires : " +
        "extraction des gares en langage naturel (CamemBERT/NLP) " +
        "et analyse du réseau SNCF modélisé en graphe Neo4j.",
      gradient: 'from-emerald-900/50 to-teal-900/50',
      accentColor: '#34d399',
      stack: ['React Native', 'Python', 'CamemBERT', 'NLP', 'Neo4j'],
      githubUrl: 'https://github.com/flaironne',
      badge: 'Projet scolaire',
    },
  ];
}
