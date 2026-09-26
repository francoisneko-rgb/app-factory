# CARTE VISUELLE — BeHard (com.apps.behard)

> Fiche produite par l'analyste-visuel à partir de **8 captures Android réelles** du
> 2026-09-26 (usage réel, pas de screenshots marketing du store). Tout élément affirmé
> ici est visible dans une capture citée par nom de fichier (raccourci : jour + heure).
> Ce qui relève d'une inférence est marqué **[hypothèse]**.

---

## 1. Ce que les captures couvrent — et ne couvrent pas

Les 8 captures couvrent **uniquement** l'enchaînement : carousel de promesse → contrat signé
au doigt → écran de confirmation → **paywall** → retour confirmation. **Aucun écran interne de
l'app** (dashboard, checklist des règles, suivi quotidien, trackers) n'apparaît.
Conséquence structurelle : au moment où l'utilisateur a fini l'onboarding, il n'a
**encore rien vu du produit**. Le seul contenu interactif avant paiement = le contrat et le paywall.

**[hypothèse]** Des écrans d'onboarding précèdent 21-14-16-135 (splash, entrée du prénom, choix du
challenge) et n'ont pas été capturés.

---

## 2. Inventaire UI par écran (chaque élément visible → fonction supposée)

### Écran A — « See the transformation with BeHard » (21-14-16-135)
| Élément visible | Fonction supposée |
|---|---|
| Gros titre blanc « See the transformation with BeHard » | Ancrer la promesse : transformation personnelle, pas « tracker » |
| Colonne « Before » : items marqués d'une croix rouge | État actuel = échec (différenciation négative) |
| Colonne « After » : items avec coche verte | État projeté = réussite |
| Flèche dessinée à la main (Before → After) | Humaniser, style « sketch » |
| Bouton pill « Continue » | Avancer ; suggère un carousel [hypothèse : écran N d'une série] |

Une seule idée par écran, densité minimale, orientation émotion.

### Écran B — Le contrat « Fafa, let's make the contract » (21-14-20-392 / 21-14-22-619 / 21-14-28-773)
Trois états du même écran (A : signature vide, CTA grisé · B : signature en cours · C : signée, CTA activé).

| Élément visible | Fonction supposée |
|---|---|
| Titre personnalisé « Fafa, let's make the contract » | Personnalisation par le prénom [hypothèse : saisi plus tôt dans l'onboarding] |
| Liste de 5 engagements, coches jaunes ; 4 lisibles : « Show up every single day », « Move my body daily », « Track honesty & publicly », « Restart if I break a rule » | Rituel d'engagement ; règles fixées par l'app [hypothèse : déjà pré-cochées, l'utilisateur ne les choisit pas ici] |
| Zone de signature tactile (trait au doigt) | Geste physique d'engagement = moment « signature » |
| Mention fine « We don't store your signature » | Rassurance placée exactement là où l'utilisateur hésite (confidentialité du geste) |
| CTA grisé → activé une fois signé | Récompense micro : compléter un geste débloque la suite |

### Écran C — « You are all set! » (21-14-33-369)
Écran très court (fichier léger 78 Ko = grandes zones unies). Titre de félicitation +
**[hypothèse]** bouton CTA et petite illustration (détail peu lisible). Fonction : pause de
récompense avant l'écran monétisation.

### Écran D — Paywall « Set your price » (21-14-34-997 + état 21-15-06-160)
| Élément visible | Fonction supposée |
|---|---|
| Titre « Set your price » | Recadrage : ce n'est pas « paie », c'est « tu choisis ton prix » |
| Sous-titre « You decide what feels right for you » | Effet « à toi de décider »… alors que seuls 2 abonnements fixes existent — **[dark pattern léger : framing du choix]** |
| Plan n°1 : 12,99 EUR/an = 0,28 €/sem, badges « Save 71% » + « Best value », visuellement sélectionné | Ancre haute + re-pricing hebdomadaire (0,28/sem minimale psychologiquement) |
| Plan n°2 : 9,99 EUR / 3 mois = 0,77 €/sem, badge « Save 21% » | Option de comparaison qui valorise le plan annuel |
| Cartes features « Unlimited Challenges », « Stay Connected » | Bénéfices formulés en vie pratique, pas en fonctionnalités techniques |
| Croix (X) pour fermer | Sortie possible — paywall skippable |
| Fond en dégradé vert → bleu | Rupture visuelle avec le noir du reste de l'app : le paywall se « pose » différemment |

### Écran E — « You are all set! » (2ᵉ occurrence, 21-15-10-698)
**[hypothèse]** Retour sur la confirmation après fermeture du paywall (ou état final du parcours
d'entrée). L'app laisse ensuite entrer l'utilisateur **sans preuve du produit** (écrans internes
non capturés).

---

## 3. Wireflow déduit — texte

```
[Écrans pré-onboarding non capturés : splash, prénom, choix challenge ?]  [hypothèse]
   ↓
A. Carousel de promesse « See the transformation » (21-14-16)
   ↓ (tap Continue)
B. Le contrat — signature au doigt + 5 engagements (21-14-20 → 22 → 28)
   ↓ (signature complète → CTA activé)
C. « You are all set! » (21-14-33)
   ↓ (CTA, hypothèse)
D. PAYWALL « Set your price » (21-14-34 → 21-15-06)
   ↓ (si croix)
E. « You are all set! » (21-15-10) → entrée dans l'app [hypothèse]
```

**Enchaînement gagnant (à retenir)** : l'utilisateur s'engage (signature) AVANT de voir le prix ;
le paywall arrive au pic de l'engagement émotionnel et avant toute valeur perçue du produit.

---

## 4. Architecture de l'information (IA)

- Flux **linéaire à une colonne**, aucune navigation visible pendant l'onboarding (pas d'onglets).
- **L'IA interne est indéterminable** avec ces captures seules — aucun dashboard, aucune liste
  d'onglets n'apparaît. **[hypothèse : 1 tab bar standard (Accueil / Défi / Profil), mais non démontrée.]**
- Gap de données à combler : captures utilisateur des menus internes de BeHard (si possible).

---

## 5. Choix UX notables

1. **La signature manuscrite** = moment signature de l'onboarding : effort minuscule, engagement
   psychologique énorme (s'engager par un geste physique rend l'abandon coûteux).
2. **Prénom dans le contrat** : personnalisation émotionnelle immédiate.
3. **Paywall au pic d'engagement**, avant toute vue du produit — agressif mais délibéré.
4. **Framing « Set your price »** : sentiment de contrôle avec seulement 2 plans figés.
5. **Re-pricing en €/semaine** (0,28) : coût perçu fragmenté.
6. **Croix de fermeture présente** : paywall skippable, pression sans dead-end.
7. **Micro-rassurance chirurgicale** (« We don't store your signature ») au bon endroit.
8. **Aucune featurepreview pendant l'onboarding** : promesse → contrat → paiement. Aucune démonstration.

---

## 6. Qualité perçue : **7/10**

- **+** : un seul message par écran ; geste signature mémorable ; copywriting orienté émotion ;
  contraste visuel fort (avant rouge / après vert) ; badges prix très lisibles.
- **−** : paywall avant toute démonstration produit (risque churn + avis 1★ chez les plus
  exigeants) ; aucun aperçu fonctionnel ; IA interne non perceptible dans ces captures.
- Note conditionnée aux 8 écrans visibles (onboarding + monétisation), pas au produit en usage.

---

## 7. Design language

| Trait | Obs. (captures) |
|---|---|
| Fond | Noir absolu dominant |
| Typo | Bold condensed, blanc, très présente |
| Accent | Jaune-vert « chartreuse » (coches, badges) |
| Badges prix | Jaune vif sur cartes sombres, très contrastés |
| Émojis | Émojis natifs insérés dans le texte |
| Composants | Cartes arrondies, bordures fines sombres |
| Paywall | Break visuel dégradé vert → bleu (seul endroit coloré en masse) |
| Illustrations | Dessins « main levée » (flèche) → humanise le ton fitness |
| Ambiance | Motivation sportive, ton direct, binaire rouge/vert |

---

## 8. À retenir pour la suite du travail

- Le flow BeHard (promesse → contrat signé → confirmation → paywall) est **structurant pour la
  catégorie** et mérite d'être repris dans la trâme du funnel commun du plan.
- Le **paywall ultra-précoce** est loué pour sa mécanique d'engagement mais dépend d'une marque
  forte appuyée par l'ambiance d'acquis du store — analyse-globale fournit l'éclairage textuel
  (à ne pas dupliquer ici).
