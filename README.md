# Tetris

Kopia i deployment: `b-lukaszuk/PB_angular_2020_2021`

---

# Spis tresci

1. [Info](#info)
   + [Wymagania 1](#wymagania-1)
   + [Wymagania 2](#wymagania-2)
   + [Wymagania 3](#wymagania-3)
   + [Wymagania 4](#wymagania-4)
   + [Wymagania 5](#wymagania-5)
2. [Wymagania oryginalne](#wymagania-oryginalne)
2. [Uruchomienie](#uruchomienie)
3. [Authors](#authors)
4. [Licence](#licence)

---

# Info

Projekt zapoczatkowany jako praca domowa na zaliczenie semestru 1 z przedmiotu Angular od Podstaw na podyplomowce PB JS developer (2020/2021)

## Wymagania 1

[Powrot do spisu tresci](#spis-tresci)

### Convert showing/hiding to routing

1. Intro page (smart component, route)
+ handles navigation
+ composed from:
  - Intro text
  - Player form component (dumb component)
2. Game page (smart component, route)
+ handles navigation (going back, Location service)
+ composed from:
  - Personalized welcoming tex
  - Game info: status, points (dumb component)
  - tetris game code (library)
  - Controller (dumb component)

App should be broken now - no data being passed from Intro to Game page

## Wymagania 2

[Powrot do spisu tresci](#spis-tresci)

### Store player data in a service

1. Create service for storing player data
2. Intro page - puts player data to store
3. Game page - reads player data from store

## Wymagania 3

[Powrot do spisu tresci](#spis-tresci)

### Parameters

1 .Extend game route to accept parameter: 'colors'
2. Intro page
- Allow player to select color palette: normal, high contrast
- Pass selected color palette through route parameter
3. Game page
- Add support for 'high contrast' color palette ([heres how](https://www.npmjs.com/package/ngx-tetris#styling))
- Read route 'colors' param
- Bind route param to game component ([] or [ngClass])

extra: allow color palette switching from game page (keep the url synced)

### Guards (optional?)

Prerequisite: Data from 'Intro page' form stored in service

1. Player data service modifications
- Should expose interface indicating whether there is a player data inside or not (flag, check(), whatever)
- Visiting intro page should clear data stored in player data service
2. Guard creation
- generation
```bash
ng generate service playerDataGuard
```
**Tu chyba wkradl sie blad**, bo [dokumentacja angulara](https://angular.io/guide/router#preventing-unauthorized-access) podaje:
```bash
ng generate guard your-guard
```
- Inject player data service
- Implement CanActivate interface
- Use player data service in 'decision making process'
  + Player data NOT EMPTY: allow navigation
  + Player data EMPTY: redirect to intro page
- Add created guard to game page route
- Hint: player data service should use local storage for player data persisting

## Wymagania 4

[Powrot do spisu tresci](#spis-tresci)

### Reading and displaying highscores

1. Read current highscores (GET /scores)
- reading as text/html - default
- reading as json - add accept: application/json header
2. Display highscores (component):
- List with entries (name - score pairs)
- show only top 10 entries
3. List sorting
- allow sorting by: score asc/desc

### Authentication input (optional?)

(Intro page form)

1. Add token input ( student ID - any 4-digit number)
- remove email from the form
- add token input field (text entry, just required, no special validations)
2. Upon form submission validate entered token (POST/check-token)

### My score (optional?)

1. On game finished
- submit player score and name (POST /scores)
- sign with auth token (auth-token header)
2. Display my scores list (component):
- filter data (only my entries)
- sorting by score asc/desc
3. Update score lists every 30 seconds (removed from deployed version)

## Wymagania 5

[Powrot do spisu tresci](#spis-tresci)

### Intro page - transition to reactive form

1. Player name
- required
- min length 5 chars
2. Auth code input
- required
- min length 5 chars?
**Tu chyba wkradl sie maly blad.** W wersji opcjonalnej jest uwierzytelnianie na serwerze, a tam token to dowolny numer 4 cyfrowy.
Min length powinno wiec wynosic >= 4 chars
3. Color selection
- with initial value
- upon change make some element either colored or black&white

extra: store user input in local storage and fill the form for returning users
(dont store auth code)

# Wymagania oryginalne

[Powrot do spisu tresci](#spis-tresci)

Wymagania na zaliczenie 1 semestru

## Overview

Two pages
- Intro page with intro text and player form
- Game page

## Intro page specification

- some quick introductory text
- form with two inputs
    - player name
    - player email
- start game button
- upon clicking 'start' we check name and email and notify player whats wrong
- if name and email are fine then store this data and move to the game page

## Game page specification

**basic version**
- there should be a button 'exit game' which will move player to intro page
- there should be nice, personalized welcome message (with player name)
- integrate [ngx-tetris](https://www.npmjs.com/package/ngx-tetris) library
- big indication of the game status (ready, started, paused...)
- we need points counting mechanism (each cleared line counts)
- display current amount of points
- display time spent wile playing

**extra points version should additionally have:**
- there should be a 'gameplay history' with all actions and each entry should have
    - timestamp
    - action name (player started the game, paused, line cleared...)
- gameplay history should be
    - filterable by event type (ie. show only 'line cleared' events)
    - sortable by timestamp (latest first or oldest first)

# Uruchomienie

[Powrot do spisu tresci](#spis-tresci)

```bash
cd tetris
ng serve -o
```

# Authors

[Powrot do spisu tresci](#spis-tresci)

- [Chrystian Ruminowicz](http://chrum.it) autor [ngx-tetris](https://www.npmjs.com/package/ngx-tetris)
- Bartlomiej Lukaszuk - autor 'obudowy'

# Licence

[Powrot do spisu tresci](#spis-tresci)

This project is licensed under the MIT license. See the [LICENSE](https://opensource.org/licenses/MIT) file for more info.
