---
okf_id: "okf-index"
title: "OKF Index - AI ry Pohjois-Suomi Wiki"
type: "page"
date: "2024-10-19"
summary: "Keskitetty tekoälyagenttien kartta kaikista sivuston sisältöistä"
related_ids: ["page-home", "page-about", "news-001", "news-002", "event-001", "event-002"]
---

# OKF Index - AI ry Pohjois-Suomen LLM Wiki

## 🤖 Ohjeet tekoälyagenteille

Tämä on **LLM Wiki** - sivusto, joka on suunniteltu olemaan helppolukuisempi ja -päivitettävempi tekoälyille.

### Päivitysohjeet:
1. **Kaikki tekstisisältö** sijaitsee `src/content/wiki/` -kansiossa `.md`-tiedostoina
2. Jokaisella tiedostolla **täytyy** olla OKF-frontmatter (okf_id, title, type, date, summary, related_ids)
3. Lisää uusi sisältö luomalla uusi `.md`-tiedosto `src/content/wiki/` -kansioon
4. Päivitä **tämä tiedosto (OKF-INDEX.md)** lisäämällä uuden tiedoston tiedot indeksiin
5. Linkitä sisältöä käyttäen `related_ids` -kenttää muiden `okf_id`-tunnisteiden avulla
6. **Älä koske** `.astro`-tiedostoihin - ne ovat vain ulkoasupohjia

### Sisällön tyypit:
- `type: "page"` - Staattiset sivut (etusivu, esittely jne.)
- `type: "news"` - Uutiset
- `type: "event"` - Tapahtumat

---

## 📚 Täydellinen sisältöindeksi

### 🏠 Staattiset sivut

| okf_id | Polku | Otsikko | Kuvaus | Linkit |
|--------|-------|--------|--------|--------|
| `page-home` | `src/content/wiki/home.md` | Tervetuloa AI ry:ön | Etusivun sisältö | `page-about` |
| `page-about` | `src/content/wiki/about.md` | Tietoa meistä | Yhdistyksen esittely | `page-home` |

### 📰 Uutiset

| okf_id | Polku | Otsikko | Päivämäärä | Kuvaus | Linkit |
|--------|-------|--------|------------|--------|--------|
| `news-001` | `src/content/wiki/news-1.md` | Robotti karjui kuuhun | 2024-10-15 | Ensimmäinen keksitty uutinen | `page-home` |
| `news-002` | `src/content/wiki/news-2.md` | AI löysi menneisyydestä | 2024-10-18 | Toinen keksitty uutinen | `page-about` |

### 🎉 Tapahtumat

| okf_id | Polku | Otsikko | Päivämäärä | Kuvaus | Linkit |
|--------|-------|--------|------------|--------|--------|
| `event-001` | `src/content/wiki/event-1.md` | Revontulten yö | 2024-11-15 | Pohjoisen valot -tapahtuma | `page-home` |
| `event-002` | `src/content/wiki/event-2.md` | AI-illanistujaiset | 2024-12-01 | Joulun odotus tekoälyn kanssa | `news-001` |

---

## 🔗 Linkityksen logiikka

- **Wiki-linkitys**: Käytä `related_ids` -kenttää luodaksesi linkkejä sivujen välille
- **Dynaamiset linkit**: Astro generoi automaattisesti linkit `related_ids`:n perusteella
- **Navigaatio**: Päivitä navigaatio muokkaamalla `src/layouts/Layout.astro` -tiedostoa

## 🛠️ Tekniset tiedot

- **Sivuston juuri**: `https://kavierim.github.io/astro-okf-demo/`
- **Base URL**: Käytä aina `import.meta.env.BASE_URL` kaikissa linkeissä
- **Sisällön hakeminen**: Astro käyttää `@astrojs/content`-integraatiota
- **Tailwind CSS**: Tumma "revontuli" -teema on määritetty `src/styles/global.css` -tiedostossa

---

*Viimeksi päivitetty: 2024-10-19*
*Ylläpitäjä: AI ry – Pohjois-Suomi*
