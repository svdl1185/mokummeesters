# Mokum Meesters

Statische website voor Mokum Meesters, een schaak- en strategiekamp voor kinderen van 7 tot 12 jaar in Amsterdam-West.

## Lokaal bekijken

Open `index.html` direct in de browser, of start een simpele lokale server:

```sh
python3 -m http.server 8000
```

Ga daarna naar `http://localhost:8000`.

## Formulier

Het inschrijfformulier is geschikt voor GitHub Pages en opent een e-mailconcept naar `info@mokummeesters.nl`. Pas `CONTACT_EMAIL` in `script.js` aan als het definitieve adres anders wordt.

Automatisch mailen zonder e-mailprogramma kan niet met alleen GitHub Pages. Daarvoor is een formulierdienst nodig, zoals Formspree, Basin, Netlify Forms of een eigen backend.

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
