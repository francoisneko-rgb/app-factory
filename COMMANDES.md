# COMMANDES — Vocabulaire canonique de la factory

> L'utilisateur emploie ces termes exacts. Chaque commande = une intention précise pour l'orchestrateur.




| Commande utilisateur | Signification pour l'orchestrateur |
|---|---|---|
| `RADAR` | Skill `radar-tendances` → signaux du moment, mise à jour `brain/tendances.md` |
| `SCAN <marché/catégorie>` | Skill `recherche-marche` sur la cible → rapport + scoring `brain/niches.md` |
| `DÉCORTIQUE <app concurrente>` | Skill `reverse-engineering-concurrent` → carte écrans/flux/features (`CARTE.md`) |
| `FORGE <nom-app>` | Création normalisée de l'app（section 2 SOMMAIRE） + gates G3→G3.7（PRD→spec→plan→tasks）. Tout le contenu produit（ETAT, design, spec, code）va dans `apps/<nom-app>/`；`brain/apps/<nom-app>/` = recherche + marketing uniquement |
| `STYLE <nom-app>` | Phase G4 design. MODE ACTIF depuis ADR-017 (2026-09-28, comparatif en cours) ：si l'utilisateur fournit des images（screenshots app/site）, passer par le skill `design-system`（BuilderOS）→ carnet design.md + page de contrôle visuel design.html → validation utilisateur → traduction RN → gauntlet. Notre skill `pipeline-design` = mode veille（réactivable si meilleur verdict）. |
| `BÂTIT <nom-app>` | Implémentation `tasks.md`,1 tâche =1 session =  ẟ1 PR revue CodeRabbit, puis TESTE automatiquement à chaque milestone |
| `TESTE <nom-app>` | Boucle QA complète ：testeur-qa（flux Maestro + critères + bugs）→ correctifs → re-vérifie. Prépare le build APK preview pour ton test personnel. |
| `GAUNTLET <surface>` | Boucle `gauntlet-loop` sur la surface（icône, paywall, screenshots…） |
| `EMBALLAGE <nom-app>` | store-conversion (screenshots narratifs, icône, preview, descriptions par store) + aso-metadata + landing-page |
| `LANCE <nom-app>` | Build EAS + soumission stores（après validation G6） |
| `PROMOUVOIS <nom-app>` | Assets marketing（carrousels, vidéos Remotion） |
| `PILOTE <nom-app>` | Skill `post-lancement` ：avis, analytics PostHog, itérations |
| `"PETIT FIX <nom-app> : <description en langage naturel>"` | Correction rapide hors boucle lourde ：l'agent corrige directement, test rapide ciblé, commit, et me montre le résultat. Pour tout ce qui est petit（texte, couleur, bug ponctuel, ajustement）. Réservé aux changements mineurs——toute nouvelle feature passe par FORGE/la spec. |