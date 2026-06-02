# Mokum Meesters

Statische website voor Mokum Meesters, een schaak- en strategiekamp voor kinderen van 7 tot 12 jaar in Amsterdam-West.

## Lokaal bekijken

Open `index.html` direct in de browser, of start een simpele lokale server:

```sh
python3 -m http.server 8000
```

Ga daarna naar `http://localhost:8000`.

## Formulier

Het inschrijfformulier is geschikt voor GitHub Pages en opent een e-mailconcept naar `Mokummeesters@gmail.com`. Pas `CONTACT_EMAIL` in `script.js` aan als het definitieve adres anders wordt.

Automatisch mailen zonder e-mailprogramma kan niet met alleen GitHub Pages. Daarvoor is een formulierdienst nodig, zoals Formspree, Basin, Netlify Forms of een eigen backend.

## Video

De originele AanZet-video is te groot om direct in git of GitHub Pages te publiceren. GitHub weigert bestanden boven 100 MB en een video van honderden MB's laadt traag voor bezoekers.

De site gebruikt daarom een YouTube-embed in `wie-zijn-wij.html`. De originele lokale MP4 staat in `.gitignore`, zodat die niet per ongeluk wordt meegecommit.

## Publiceren op GitHub Pages

Zet GitHub Pages aan via `Settings` -> `Pages` -> `Deploy from a branch` -> `main` -> `/root`.

## Domein koppelen

Deze repo bevat een `CNAME`-bestand voor `mokummeesters.nl`. Stel bij TransIP de DNS-records in:

- `A` record: naam `@`, waarde `185.199.108.153`
- `A` record: naam `@`, waarde `185.199.109.153`
- `A` record: naam `@`, waarde `185.199.110.153`
- `A` record: naam `@`, waarde `185.199.111.153`
- `CNAME` record: naam `www`, waarde `svdl1185.github.io.`

Controleer daarna in GitHub bij `Settings` -> `Pages` of het domein is geverifieerd en zet `Enforce HTTPS` aan zodra dit beschikbaar is.
