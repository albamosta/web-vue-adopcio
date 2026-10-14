# Web Vue Adopció - Peluts

## Descripció

Aquest projecte és una aplicació web feta amb Vue sobre una protectora d'animals. Permet consultar animals disponibles per a l'adopció i veure informació de contacte de la protectora.

## Instal·lació i execució

Instal·lar les dependències:

```bash
npm install
```

Executar el projecte en local:

```bash
npm run dev
```

Generar la versió de producció:

```bash
npm run build
```

Publicar a Firebase:

```bash
firebase deploy
```

## Components propis

### BarraNavegacio.vue

Mostra l'encapçalament de la pàgina amb el nom i la informació principal de la protectora.

### TargetaAnimal.vue

Mostra la informació de cada animal, com la foto, el nom, l'espècie, l'edat i la descripció.

### PeuPagina.vue

Mostra la informació de contacte i el peu de pàgina.

## Exemple de comunicació amb props

Component pare:

AnimalsView.vue

Component fill:

TargetaAnimal.vue

Dades que es passen mitjançant props:

- nom
- specie
- edat
- descripcio
- imatge

AnimalsView llegeix les dades dels animals des de Firestore i les passa al component TargetaAnimal perquè les mostri.

## Rutes

### /inici

Mostra la pàgina principal de la protectora.

### /animals

Mostra els animals disponibles per a l'adopció.

### /contacte

Mostra la informació de contacte de la protectora.

## Firestore

Col·lecció utilitzada:

animals

Camps principals:

- nom
- specie
- edat
- descripcio
- imatge

Les dades de la col·lecció es mostren a la vista AnimalsView.vue.

## Repositori GitHub

https://github.com/albamosta/web-vue-adopcio

## Web publicada amb Firebase Hosting

https://web-vue-adopcio.web.app
