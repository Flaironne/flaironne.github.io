import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

@Component({
  selector: "app-experience",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, FadeInDirective],
  templateUrl: "./experience.html",
})
export class ExperienceComponent {
  readonly experiences: TimelineItem[] = [
    {
      type: "work",
      title: "Développeur Full Stack — Alternance",
      organization: "SOC Informatique",
      period: "Janvier 2024 — Présent",
      location: "Lingolsheim, France",
      description:
        "« Carnet d'Adresses » : référentiel tiers multi-environnement (React/TS + Node/Express + Python FastAPI + PostgreSQL). " +
        "Interfaces métier Devisoc (React + Fluent UI + Redux). " +
        "API d'IA en R&D via Python FastAPI. " +
        "Industrialisation Docker/Compose, pipeline CI/CD Bitbucket, authentification Keycloak. Méthodes Agile.",
      tags: ["React", "TypeScript", "Node.js", "Python (FastAPI)", "PostgreSQL", "Docker", "Keycloak"],
    },
    {
      type: "education",
      title: "Master en Informatique — IA & Big Data",
      organization: "EPITECH",
      period: "2023 — Présent",
      location: "Strasbourg, France",
      description:
        "MSc Pro en alternance, spécialité Intelligence Artificielle et Big Data. " +
        "Projets en pipelines de données temps réel, Machine Learning et développement full-stack.",
      tags: ["IA", "Big Data", "Apache Kafka", "Machine Learning", "Alternance"],
    },
    {
      type: "work",
      title: "Développeur Full Stack — Stage",
      organization: "BottomLine Technologies",
      period: "Juillet — Août 2022",
      location: "Genève, Suisse",
      description:
        "Développement en Golang d'une API REST améliorant la visibilité produit auprès d'une trentaine d'utilisateurs internes. " +
        "Montée en compétences sur les architectures REST et le développement frontend React.",
      tags: ["Golang", "REST API", "React"],
    },
    {
      type: "education",
      title: "Licence en Informatique",
      organization: "Université de Strasbourg",
      period: "2019 — 2023",
      location: "Strasbourg, France",
      description:
        "Formation généraliste en informatique : algorithmique, bases de données, développement logiciel, systèmes et réseaux.",
      tags: ["Java", "Python", "C", "SQL", "Algorithmique"],
    },
  ];
}
