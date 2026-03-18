---
theme: apple-basic
addons:
  - "@keynotes/slidev-addon-cheil"
title: Samsung Premium TV — Omnichannel Strategy
colorSchema: dark
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
:root {
  --color-vivid-orange: #FF7300;
  --color-neon-green: #96FA00;
  --color-bright-pink: #FA50DC;
  --color-sunny-yellow: #FFF000;
  --color-black: #000000;
  --color-anthrazite: #2D2D2D;
  --color-dark-grey: #656565;
  --color-grey: #CDCDCD;
  --color-white: #FFFFFF;
  --font-family: "Cheil Roman", "DM Sans", system-ui, sans-serif;
}

.slidev-layout {
  background: var(--color-black) !important;
  color: var(--color-white) !important;
  font-family: var(--font-family) !important;
}

h1 { font-size: 64px; line-height: 80px; font-weight: 800; color: var(--color-white); }
h2 { font-size: 42px; line-height: 60px; font-weight: 700; color: var(--color-white); }
h3 { font-size: 32px; line-height: 44px; font-weight: 500; color: var(--color-white); }

.accent-lime   { color: var(--color-neon-green); }
.accent-orange { color: var(--color-vivid-orange); }
.accent-cyan   { color: #00D4FF; }
.accent-pink   { color: var(--color-bright-pink); }
.text-grey     { color: var(--color-dark-grey); }
.text-white    { color: var(--color-white); }

.tag {
  font-size: 0.6rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-vivid-orange);
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.mono {
  font-size: 0.55rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-dark-grey);
}

.card {
  background: var(--color-anthrazite);
  border: 1px solid #333;
  padding: 0.9rem 1.1rem;
  position: relative;
}
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: transparent;
}
.card-lime::before   { background: var(--color-neon-green) !important; }
.card-cyan::before   { background: #00D4FF !important; }
.card-orange::before { background: var(--color-vivid-orange) !important; }
.card-pink::before   { background: var(--color-bright-pink) !important; }

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.25rem;
}

.stat-big { font-size: 3.5rem; font-weight: 800; line-height: 1; }

.jblock {
  background: var(--color-anthrazite);
  border: 1px solid #333;
  padding: 0.35rem 0.45rem;
  margin-bottom: 0.25rem;
  border-left: 3px solid transparent;
  font-size: 0.6rem;
  line-height: 1.35;
  color: var(--color-grey);
}
.jblock-mental   { border-left-color: var(--color-neon-green); }
.jblock-physisch { border-left-color: var(--color-vivid-orange); }
.jblock-digital  { border-left-color: #00D4FF; }
.jblock-analog   { border-left-color: var(--color-bright-pink); }
.jblock-label {
  font-size: 0.42rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}
.jblock-mental   .jblock-label { color: var(--color-neon-green); }
.jblock-physisch .jblock-label { color: var(--color-vivid-orange); }
.jblock-digital  .jblock-label { color: #00D4FF; }
.jblock-analog   .jblock-label { color: var(--color-bright-pink); }

.luecke {
  font-size: 0.62rem;
  color: var(--color-grey);
  line-height: 1.35;
  padding-left: 0.7rem;
  position: relative;
  margin-bottom: 0.28rem;
}
.luecke::before {
  content: '';
  position: absolute;
  left: 0; top: 0.4rem;
  width: 5px; height: 5px;
  border-radius: 50%;
}
.luecke.f1::before { background: var(--color-vivid-orange); }
.luecke.f2::before { background: var(--color-bright-pink); }
.luecke.f3::before { background: var(--color-neon-green); }

.opti-block {
  background: var(--color-anthrazite);
  border: 1px solid #333;
  padding: 0.7rem 0.85rem;
  position: relative;
  overflow-y: scroll !important;
  max-height: 72vh;
}

.slidev-layout .grid {
  overflow: visible !important;
}

.opti-block::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
}
.opti-digital::before { background: #00D4FF; }
.opti-analog::before  { background: var(--color-vivid-orange); }
.opti-dist::before    { background: var(--color-bright-pink); }
.opti-chwo liegt
annel {
  font-size: 0.42rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #555;
  margin: 0.35rem 0 0.18rem;
}
.opti-bullet {
  font-size: 0.65rem;
  color: var(--color-grey);
  line-height: 1.3;
  padding-left: 0.55rem;
  position: relative;
  margin-bottom: 0.18rem;
}
.opti-bullet::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--color-dark-grey);
}

.finding-num {
  font-size: 8rem;
  font-weight: 800;
  color: rgba(255,115,0,0.08);
  line-height: 1;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  pointer-events: none;
}
</style>
---
layout: intro
---

<div class="tag">// Samsung Premium TV · Cheil Germany 2026</div>

# <span class="accent-lime">Beste Produkte.</span><br>Größte Chance.

<p class="text-grey text-sm mt-4 max-w-lg">Eine vollständige Omnichannel-Analyse der Premium-TV Buying Journey — und wo die größten Chancen liegen.</p>

<div class="flex gap-8 mt-8">
  <div><div class="text-3xl font-black">30+</div><div class="mono">Quellen</div></div>
  <div><div class="text-3xl font-black">12</div><div class="mono">Touchpoints</div></div>
  <div><div class="text-3xl font-black">64</div><div class="mono">AI-Käufe dok.</div></div>
  <div><div class="text-3xl font-black">884</div><div class="mono">AI-Quellen</div></div>
</div>

---
class: text-sm
---

<div class="tag">// Wo liegt das Potenzial?</div>

## 50% des Premium-Markts.<br><span class="accent-lime">Der größte Hebel.</span>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

| Persona | Marktanteil | Samsung Share |
|---------|-------------|---------------|
| **High Spec Premium** | **30%** | 23,5% |
| **Digitally Receptive** | **19%** | 21,9% |
| Brand Enthusiasts | 14% | — |
| Store Seekers | 14% | — |
| Low Value Traditionals | 8% | — |
| Brand Agnostic Digitals | 7% | — |
| Pragmatics | 7% | — |

</div>
<div class="flex flex-col gap-3">

<div class="card card-lime">
  <div class="text-2xl font-black accent-lime">HSP</div>
  <div class="mono mb-2">High Spec Premium</div>
  <div class="text-sm text-grey">30% Marktanteil · Samsung gewinnt weniger als der Markt erwarten würde. Meinungsführer. Primär offline erreichbar.</div>
</div>

<div class="card card-cyan">
  <div class="text-2xl font-black accent-cyan">DR</div>
  <div class="mono mb-2">Digitally Receptive</div>
  <div class="text-sm text-grey">19% Marktanteil · 54% gehen im MSD-Funnel verloren. Teilt auf Social Media. Hybrid erreichbar.</div>
</div>

</div>
</div>

---

<div class="tag">// High Spec Premium</div>

## Ø 56 Jahre. Bereits entschieden<br>bevor er den Store betritt.

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="card card-lime mb-3">
  <div class="text-4xl font-black accent-lime">HSP</div>
  <div class="mono mb-2">High Spec Premium · 30% des Premium-TV-Markts</div>
  <table class="text-sm w-full">
    <tr><td class="text-grey py-1 pr-4">Kaufkraft</td><td>TOP · Idx 382</td></tr>
    <tr><td class="text-grey py-1 pr-4">Motivation</td><td>Qualität · Features · Markentreue</td></tr>
    <tr><td class="text-grey py-1 pr-4">Entscheidung</td><td>Geringe Preissensitivität</td></tr>
    <tr><td class="text-grey py-1 pr-4">Samsung</td><td>23,5% vs. 30% Marktanteil</td></tr>
  </table>
</div>
<div class="mono mb-1">// Digitale Erreichbarkeit</div>
<div class="text-sm text-grey">Internet 36% · Social 27% · Multi-Device 22%</div>
</div>
<div>
<div class="mono mb-2">// Was ihn bewegt</div>
<div class="card mb-3"><div class="text-sm font-bold accent-lime mb-1">Statusrelevanz</div><div class="text-sm text-grey">Das richtige Gerät zur richtigen Zeit. Der sein den andere fragen.</div></div>
<div class="card mb-3"><div class="text-sm font-bold accent-lime mb-1">Vertrauen</div><div class="text-sm text-grey">Vertrauen in wenige starke Quellen: Stiftung Warentest, Fachhandel, persönliches Netzwerk.</div></div>
<div class="card"><div class="text-sm font-bold accent-lime mb-1">Meinungsführerschaft</div><div class="text-sm text-grey">Was HSP kauft beeinflusst sein Umfeld überproportional.</div></div>
</div>
</div>

---

<div class="tag">// Digitally Receptive</div>

## Ø 35 Jahre. Kennt den Markt.<br>Will das Optimum.

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="card card-cyan mb-3">
  <div class="text-4xl font-black accent-cyan">DR</div>
  <div class="mono mb-2">Digitally Receptive · 19% des Premium-TV-Markts</div>
  <table class="text-sm w-full">
    <tr><td class="text-grey py-1 pr-4">Kaufkraft</td><td>TOP · Idx 476</td></tr>
    <tr><td class="text-grey py-1 pr-4">Motivation</td><td>Preis-Leistung · Features · Marke</td></tr>
    <tr><td class="text-grey py-1 pr-4">Entscheidung</td><td>56% preissensitiv · fintech-offen</td></tr>
    <tr><td class="text-grey py-1 pr-4">Samsung</td><td>21,9% vs. 19% Marktanteil</td></tr>
  </table>
</div>
<div class="mono mb-1">// Digitale Erreichbarkeit</div>
<div class="text-sm text-grey">Internet 61% · Social 56% · Multi-Device 78%</div>
</div>
<div>
<div class="mono mb-2">// Was sie bewegt</div>
<div class="card mb-3"><div class="text-sm font-bold accent-cyan mb-1">Beste Entscheidung</div><div class="text-sm text-grey">Das Optimum finden — nicht das Billigste. Intensive Recherche über mehrere Kanäle.</div></div>
<div class="card mb-3"><div class="text-sm font-bold accent-cyan mb-1">Sicherheit</div><div class="text-sm text-grey">52% kaufen hybrid: Online-Recherche gefolgt von stationärem Kauf.</div></div>
<div class="card"><div class="text-sm font-bold accent-cyan mb-1">Orientierung</div><div class="text-sm text-grey">37% starten Produktsuchen bereits mit AI statt Google.</div></div>
</div>
</div>

---

<div class="tag">// Buying Journey · HSP · High Spec Premium · Ø 56 Jahre</div>

## Wie Samsung HSP <span class="accent-lime">heute begegnet.</span>

<div class="grid grid-cols-6 gap-2 mt-3" style="font-size: 0.6rem;">

<div>
<div class="mono mb-1">// 01</div><div class="font-black mb-2" style="font-size:0.85rem;">Awareness</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Need durch Trigger: Gespräch, TV-Erlebnis, Gerätedefekt. <strong>50–60%</strong> Notkäufe. Samsung: <strong>94%</strong> Bekanntheit.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Umzug, Hauskauf als potenzielle Trigger.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>Passiver Konsum: HIFI.DE, audiovision, YouTube.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>StiWa: <strong>2,79 Mio.</strong> Leser/Ausg. <strong>96%</strong> Kenntnis, <strong>80%</strong> Vertrauen. Expert + Euronics Prospekte.</div>
</div>

<div>
<div class="mono mb-1">// 02</div><div class="font-black mb-2" style="font-size:0.85rem;">Informational</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Sucht Empfehlung von vertrauenswürdiger Quelle. StiWa Einfluss-Index: <strong>85/100</strong>.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Erstes Orientierungsgespräch im Fachhandel. Pers. Empfehlung: <strong>50/100</strong>.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>test.de: <strong>78 Mio.</strong> Visits/Jahr, <strong>179k</strong> Abonnenten.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Testberichte StiWa, HIFI.DE, audiovision. Gespräch mit Fachhändler.</div>
</div>

<div>
<div class="mono mb-1">// 03</div><div class="font-black mb-2" style="font-size:0.85rem;">Navigational</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Grobe Markenvorstellung. LG-Kunden: konkreter Wunsch. Samsung: offen.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div><strong>76–78%</strong> offline. Expert: <strong>15%</strong> TV-Marktanteil.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>Modellspezifisch auf samsung.com und Händlerseiten. HIFI.DE: <strong>21 Sales</strong>, 42.917€.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Fachhandel-Beratung: Ø <strong>30 Min.</strong> Entscheidend.</div>
</div>

<div>
<div class="mono mb-1">// 04</div><div class="font-black mb-2" style="font-size:0.85rem;">Commercial</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>HSP betritt Store offen und beratungsbereit.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>POS-Vergleich mehrerer Marken. S95F mattes Display: stärkstes Arg. 2024. <strong>+89%</strong> offline über 1.950€.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>Onlinevergleich vor Storebesuch. <strong>91.000</strong> Keywords/Mo.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Bis zu <strong>6 Promoter</strong> auf der Fläche. 1. Besuch: Orientierung. 2. Besuch: Kauf.</div>
</div>

<div>
<div class="mono mb-1">// 05</div><div class="font-black mb-2" style="font-size:0.85rem;">Transactional</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Preissensitivität: <strong>41%</strong>. Qualitätssensitiv. S95D: UVP 4.099€ → 1.739€.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Kauft im Fachhandel / MediaMarkt. MSD: <strong>2/3</strong> Umsatz.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>idealo: <strong>78 Mio./Monat</strong>. 69% männl., 45–54 J. <strong>80%+</strong> nutzen Preisvergleich.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Verfügbarkeit + Service-Paket entscheidend. Care+ im Checkout.</div>
</div>

<div>
<div class="mono mb-1">// 06</div><div class="font-black mb-2" style="font-size:0.85rem;">Post Purchase</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Große Investition. Emotionaler Moment. S95D: <strong>4,7/5</strong> Sterne. HIFI.DE: <strong>9,4/10</strong>.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Replacement-Zyklus: Ø <strong>8 Jahre</strong>.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>Samsung Members App. SmartThings: TV ins Smart Home.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Empfiehlt Gerät weiter. Einfluss-Index <strong>50/100</strong>.</div>
</div>

</div>

---

<div class="tag">// Buying Journey · DR · Digitally Receptive · Ø 35 Jahre</div>

## Recherchiert intensiv — und <span class="accent-cyan">verliert Samsung dabei.</span>

<div class="grid grid-cols-6 gap-2 mt-3" style="font-size: 0.6rem;">

<div>
<div class="mono mb-1">// 01</div><div class="font-black mb-2" style="font-size:0.85rem;">Awareness</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Need durch digitale Impulse: Social, YouTube, Werbung. <strong>50–60%</strong> Notkäufe. Samsung: <strong>94%</strong> Bekanntheit.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Erstes Zuhause, Umzug als Trigger.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>YouTube, Social. Samsung DE: <strong>200k</strong> Abonnenten. Instagram: <strong>365k</strong> Follower.</div>
</div>

<div>
<div class="mono mb-1">// 02</div><div class="font-black mb-2" style="font-size:0.85rem;">Informational</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Sucht bestes Preis-Leistungs-Verhältnis. <strong>56%</strong> preissensitiv.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Seltener im Fachhandel. <strong>52%</strong> hybrid. Pers. Empfehlung: <strong>50/100</strong>.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>Google, YouTube, Preisvergleiche. <strong>40.700</strong> Info-Keywords/Mo. <strong>37%</strong> starten mit AI. idealo: <strong>78 Mio./Mo</strong>.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Gespräch mit Freunden + Bekannten.</div>
</div>

<div>
<div class="mono mb-1">// 03</div><div class="font-black mb-2" style="font-size:0.85rem;">Navigational</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Konkrete Vorstellungen zu Budget, Größe, Technologie. <strong>64%</strong> nutzen KI.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div><strong>52%</strong> hybrid: Online → stationärer Kauf.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>S95F: <strong>2.800/Mo</strong>, Samsung OLED: <strong>3.100/Mo</strong>. idealo + geizhals. Samsung DE YouTube: <strong>200k</strong> vs. LG DE: <strong>15.700</strong>.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Live-Vergleich bei MediaMarkt oder Fachhandel.</div>
</div>

<div>
<div class="mono mb-1">// 04</div><div class="font-black mb-2" style="font-size:0.85rem;">Commercial</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Store mit Vorstellungen, ohne finale Markenentscheidung. <strong>62%</strong> vertrauen AI. <strong>46%</strong> nutzen GenAI.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>POS-Vergleich. <strong>+89%</strong> offline über 1.950€.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>ChatGPT/Perplexity für Vergleiche. Perplexity: <strong>10,51%</strong> DE. <strong>73%</strong> AI-Gespräche filtern in Turn 3–4. Sentiment: <strong>32%</strong> vs. LG <strong>54%</strong>.</div>
</div>

<div>
<div class="mono mb-1">// 05</div><div class="font-black mb-2" style="font-size:0.85rem;">Transactional</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div><strong>56%</strong> preissensitiv + fintech-offen. S95D: UVP 4.099€ → 1.739€. LG G4: −46,9%.</div>
<div class="jblock jblock-physisch"><div class="jblock-label">Physisch</div>Hybrid. Im Store wenn Lieferung + Montage + Garantie.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>idealo, geizhals, billiger.de. idealo: <strong>161</strong> AI-Zitierungen. Affiliate: Samsung <strong>3%</strong> vs. LG <strong>6%</strong>.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Care+ im Checkout verfügbar.</div>
</div>

<div>
<div class="mono mb-1">// 06</div><div class="font-black mb-2" style="font-size:0.85rem;">Post Purchase</div>
<div class="jblock jblock-mental"><div class="jblock-label">Mental</div>Bestätigungsmoment. <strong>56%</strong> teilen Käufe auf Social Media.</div>
<div class="jblock jblock-digital"><div class="jblock-label">Digital</div>SmartThings einrichten. Bewertungen auf idealo, amazon, samsung.com. Setup-Guides auf YouTube.</div>
<div class="jblock jblock-analog"><div class="jblock-label">Analog</div>Empfiehlt weiter wenn zufrieden. Einfluss-Index <strong>50/100</strong>.</div>
</div>

</div>

---

<div class="tag">// Kern-Finding 01</div>

<div class="grid grid-cols-2 gap-12 h-full items-center">
<div class="relative">
  <div class="finding-num">01</div>
  <h2 class="relative z-10 mt-16">Hohe mentale Verfügbarkeit für die Marke Samsung.<br><span class="accent-orange">Nicht für Samsung TV Kategorie und Geräte.</span></h2>
  <p class="text-grey mt-4 text-sm">Nicht im Relevant Set bedeutet: geringe mentale Verfügbarkeit von spezifischen Samsung TV Geräten oder Kategorien beim Übergang in den stationären Handel und vor dem 14-Tage-Opportunitätsfenster für einen Kauf.</p>
</div>
<div>
  <div class="grid grid-cols-2 gap-4 mb-5">
    <div class="card card-lime">
      <div class="mono mb-1">Samsung als Marke</div>
      <div class="stat-big accent-lime">94%</div>
      <div class="text-sm text-grey mt-2">Markenbekanntheit in Deutschland. Top 5 weltweit nach Markenwert.</div>
      <div class="mono mt-3 accent-lime">Bekannt</div>
    </div>
    <div class="card card-orange">
      <div class="mono mb-1">Samsung TV</div>
      <div class="text-xl font-black accent-orange mt-2">Nicht im<br>Relevant Set</div>
      <div class="text-sm text-grey mt-2">Kein spezifisches Gerät im Kopf. Keine Kategorie die hängenbleibt.</div>
      <div class="mono mt-3 accent-orange">Nicht präsent</div>
    </div>
  </div>
  <div class="card" style="border-left: 3px solid var(--orange);">
    <p class="text-sm text-grey italic">Wenn HSP den Fachhandel betritt hat er keine Samsung TV Kategorie im Kopf. Wenn DR das 14-Tage-Fenster betritt hat sie kein spezifisches Samsung TV Gerät als Referenzpunkt. <strong class="text-white">Die Markenbekanntheit schützt Samsung nicht im Kaufmoment — weil der Kaufmoment TV-spezifisch ist.</strong></p>
  </div>
</div>
</div>

---

<div class="tag">// Kern-Finding 02</div>

<div class="grid grid-cols-2 gap-12 h-full items-center">
<div class="relative">
  <div class="finding-num">02</div>
  <h2 class="relative z-10 mt-16">Das<br><span class="accent-orange">14-Tage-</span><br>Fenster.</h2>
  <p class="text-grey mt-4 text-sm">Mentale Verfügbarkeit vor dem Fenster ist entscheidender als Sichtbarkeit innerhalb des Fensters. Wer erst im Fenster investiert erreicht nur 40–50% der Käufer.</p>
</div>
<div>
  <div class="card card-lime mb-4 flex justify-between items-center px-6 py-4">
    <div class="mono accent-lime">⚡ Window of Opportunity</div>
    <div class="text-4xl font-black accent-lime">14 Tage</div>
  </div>
  <div class="card card-orange mb-3">
    <div class="flex items-start gap-4">
      <div class="text-3xl font-black accent-orange shrink-0">50–60%</div>
      <div class="text-sm text-grey"><strong class="text-white">Notkauf nach Gerätedefekt.</strong> Kein Fenster. Kein Prozess. Nur: welche Marke ist im Kopf?</div>
    </div>
  </div>
  <div class="card" style="border-top: 3px solid #333;">
    <div class="flex items-start gap-4">
      <div class="text-3xl font-black shrink-0" style="color: #555;">40–50%</div>
      <div class="text-sm text-grey"><strong class="text-white">Geplanter Kauf.</strong> 14 Tage aktive Recherche. Fenster existiert — aber wer vorher nicht präsent war hat bereits verloren.</div>
    </div>
  </div>
</div>
</div>

---

<div class="tag">// Kern-Finding 03</div>

<div class="grid grid-cols-2 gap-12 h-full items-center">
<div class="relative">
  <div class="finding-num">03</div>
  <h2 class="relative z-10 mt-16">Ein Portfolio.<br><span class="accent-orange">Kein System.</span></h2>
  <p class="text-grey mt-4 text-sm">Was ist der Unterschied zwischen S90F und QN90F? LGs Lineup ist ein Navigationssystem. Samsungs Lineup braucht eines.</p>
  <div class="card mt-4" style="border-left: 3px solid var(--lime);">
    <p class="text-sm text-grey italic">Vieles wird von HQ vorgegeben. <strong class="text-white">Die Kategorie- und Produktnavigation sind lokal lösbar.</strong></p>
  </div>
</div>
<div>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <div class="card">
      <div class="mono mb-2">LG — navigierbar</div>
      <div class="text-sm mb-1"><span class="font-black">B-Serie</span> <span class="accent-lime">→ OLED. Budget.</span></div>
      <div class="text-sm mb-1"><span class="font-black">C-Serie</span> <span class="accent-lime">→ Der Sweet Spot.</span></div>
      <div class="text-sm"><span class="font-black">G-Serie</span> <span class="accent-lime">→ Das Beste.</span></div>
    </div>
    <div class="card card-orange">
      <div class="mono mb-2 accent-orange">Samsung — Orientierung gesucht</div>
      <div class="text-xs accent-orange opacity-70 font-mono leading-loose">S95F · QN90F · S91F<br>Neo QLED · S90F · QN85F<br>QLED · OLED · Crystal UHD</div>
    </div>
  </div>
  <div class="text-xs">
    <div class="grid grid-cols-3 gap-2 py-2 border-b border-white/10">
      <div class="text-grey">Käufer</div>
      <div class="accent-lime">"Ich will den C5."</div>
      <div class="accent-orange">"Neo QLED? Oder OLED?"</div>
    </div>
    <div class="grid grid-cols-3 gap-2 py-2 border-b border-white/10">
      <div class="text-grey">Promoter</div>
      <div class="accent-lime">3 Sätze. Fertig.</div>
      <div class="accent-orange">30 Min. Schulung.</div>
    </div>
    <div class="grid grid-cols-3 gap-2 py-2">
      <div class="text-grey">AI / LLM</div>
      <div class="accent-lime">B→C→G. Reproduziert.</div>
      <div class="accent-orange">Kein Muster. Rauschen.</div>
    </div>
  </div>
</div>
</div>

---

<div class="tag">// Wie sich die Findings in der HSP Journey manifestieren</div>

## Wo die <span class="accent-orange">Lücken entstehen.</span> <span class="text-sm font-normal accent-lime ml-2">HSP</span>

<div class="flex gap-4 text-xs mb-3">
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#FF7300] mr-1 align-middle"></span>F1: Mentale Verfügbarkeit</span>
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#FA50DC] mr-1 align-middle"></span>F2: 14-Tage-Fenster</span>
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#96FA00] mr-1 align-middle"></span>F3: Portfolio/System</span>
</div>

<div class="grid grid-cols-6 gap-2" style="font-size:0.6rem;">
<div>
<div class="mono mb-1">// 01</div><div class="font-black mb-2" style="font-size:0.85rem;">Awareness</div>
<div class="luecke f1">Samsung als Marke bekannt. Spezifisches Samsung TV Gerät oder Kategorie in HSPs Medienwelt nicht verankert.</div>
<div class="luecke f3">Samsung kommuniziert Features. Eine navigierbare Kategorie die HSP erinnert fehlt.</div>
</div>
<div>
<div class="mono mb-1">// 02</div><div class="font-black mb-2" style="font-size:0.85rem;">Informational</div>
<div class="luecke f1">HSP informiert sich über wenige vertrauenswürdige Quellen. Samsung ist dort als Absender nicht aktiv präsent.</div>
<div class="luecke f3">Kein Ratgeber bei Expert.de oder Euronics.de der Samsung in klarer Kategorie-Logik erklärt.</div>
</div>
<div>
<div class="mono mb-1">// 03</div><div class="font-black mb-2" style="font-size:0.85rem;">Navigational</div>
<div class="luecke f3">Naming-Inkonsistenz erzeugt Unsicherheit. LG-Kunden kommen festgelegt. Samsung-Kunden offen.</div>
<div class="luecke f3">Fachhandel-Präsenz lückenhaft.</div>
</div>
<div>
<div class="mono mb-1">// 04</div><div class="font-black mb-2" style="font-size:0.85rem;">Commercial</div>
<div class="luecke f1">HSP betritt Store ohne Samsung TV als mentalen Anker. Offenheit von HSP nicht systematisch genutzt.</div>
<div class="luecke f3">Nur 5–10 Filialen aktiv mit Samsung-Promoter. 90–100% werden umberaten.</div>
<div class="luecke f3">LG zahlt €30/Verkauf in 200+ Geschäften. Promoter +€400–500/Monat.</div>
</div>
<div>
<div class="mono mb-1">// 05</div><div class="font-black mb-2" style="font-size:0.85rem;">Transactional</div>
<div class="luecke f1">UVP-Verfall 57,6% erzeugt Qualitätszweifel. HSP ist qualitätssensitiv, nicht preissensitiv.</div>
<div class="luecke f3">Care+ erst im Checkout. idealo Retail Media ungenutzt: 78 Mio./Mo, 69% männl., 45–54 J.</div>
</div>
<div>
<div class="mono mb-1">// 06</div><div class="font-black mb-2" style="font-size:0.85rem;">Post Purchase</div>
<div class="luecke f1">Erstkauf-Erlebnis als technischer Setup-Prozess. Emotionalster Moment nicht als Markenkontakt genutzt.</div>
<div class="luecke f2">Kontakt reißt ab. Kein EOL-Trigger. 40% wechseln beim Ersatzkauf.</div>
</div>
</div>

---

<div class="tag">// Wie sich die Findings in der DR Journey manifestieren</div>

## Wo die <span class="accent-orange">Lücken entstehen.</span> <span class="text-sm font-normal accent-cyan ml-2">DR</span>

<div class="flex gap-4 text-xs mb-3">
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#FF7300] mr-1 align-middle"></span>F1: Mentale Verfügbarkeit</span>
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#FA50DC] mr-1 align-middle"></span>F2: 14-Tage-Fenster</span>
  <span><span class="inline-block w-2 h-2 rounded-full bg-[#96FA00] mr-1 align-middle"></span>F3: Portfolio/System</span>
</div>

<div class="grid grid-cols-6 gap-2" style="font-size:0.6rem;">
<div>
<div class="mono mb-1">// 01</div><div class="font-black mb-2" style="font-size:0.85rem;">Awareness</div>
<div class="luecke f1">Samsung als Marke bekannt. Spezifisches Samsung TV Gerät oder Kategorie in DRs digitalem Umfeld nicht verankert.</div>
<div class="luecke f3">Samsung DE YouTube von Galaxy-Content dominiert. TV-spezifischer Content fehlt weitgehend.</div>
</div>
<div>
<div class="mono mb-1">// 02</div><div class="font-black mb-2" style="font-size:0.85rem;">Informational</div>
<div class="luecke f3">Samsung beantwortet 5 wichtige Keywords mit 31.500 Suchen/Monat nicht.</div>
<div class="luecke f3">Neo QLED vs. OLED Vergleichsartikel fehlt. Zentrale Kaufentscheidung bleibt unbeantwortet.</div>
</div>
<div>
<div class="mono mb-1">// 03</div><div class="font-black mb-2" style="font-size:0.85rem;">Navigational</div>
<div class="luecke f3">Suchvolumen fragmentiert auf 8 SKUs. "LG OLED": 5.200/Mo vs. "Samsung OLED": 3.100/Mo.</div>
</div>
<div>
<div class="mono mb-1">// 04</div><div class="font-black mb-2" style="font-size:0.85rem;">Commercial</div>
<div class="luecke f1">73% der AI-Gespräche filtern in Turn 3–4. Samsung gewinnt bei 1 von 4 Use Cases.</div>
<div class="luecke f3">308 AI-Zitierungen vs. 129 LG. Sentiment: Samsung 32% vs. LG 54%.</div>
<div class="luecke f1">Kein Narrativ das DR emotional abholt. Samsung kommuniziert Attribute statt Bedeutung.</div>
</div>
<div>
<div class="mono mb-1">// 05</div><div class="font-black mb-2" style="font-size:0.85rem;">Transactional</div>
<div class="luecke f3">0%-Finanzierung versteckt auf /de/shop/finanzierung/. DR zu 56% preissensitiv + fintech-offen.</div>
<div class="luecke f3">Affiliate: Samsung 3% vs. LG 6%. idealo Retail Media ungenutzt.</div>
</div>
<div>
<div class="mono mb-1">// 06</div><div class="font-black mb-2" style="font-size:0.85rem;">Post Purchase</div>
<div class="luecke f1">56% teilen Käufe auf Social Media. Kein strukturiertes Programm das diese Bereitschaft nutzt.</div>
<div class="luecke f2">Nächstes 14-Tage-Fenster öffnet ohne spezifisches Samsung TV im Kopf von DR.</div>
</div>
</div>

---
layout: statement
---

<div class="tag mb-6">// Ansatzpunkte</div>

# Wo wir Potenziale sehen.<br><span class="accent-lime">Konkrete Ansatzpunkte zur Diskussion.</span>

<div class="grid grid-cols-4 gap-4 mt-10 text-left max-w-5xl mx-auto">
  <div class="card card-cyan">
    <div class="mono mb-2">A</div>
    <div class="text-sm font-bold">Digitaler Raum</div>
    <div class="text-xs text-grey mt-1">Website · eShop · eRetailer · Paid Ads</div>
  </div>
  <div class="card card-orange">
    <div class="mono mb-2">B</div>
    <div class="text-sm font-bold">Analoger Raum</div>
    <div class="text-xs text-grey mt-1">Fachhandel · Buying Groups · MSD · Lokales Marketing</div>
  </div>
  <div class="card card-lime">
    <div class="mono mb-2">C</div>
    <div class="text-sm font-bold">Omnichannel / O2O</div>
    <div class="text-xs text-grey mt-1">Online ↔ Offline · Loyalty</div>
  </div>
  <div class="card card-pink">
    <div class="mono mb-2">D</div>
    <div class="text-sm font-bold">Distribution</div>
    <div class="text-xs text-grey mt-1">Szenarien · Roadmap · Neue Kanäle</div>
  </div>
</div>

<div class="absolute bottom-8 left-0 right-0 text-center text-xs text-grey font-mono">
Samsung Premium TV · Omnichannel Strategy · Cheil Germany 2026 · Confidential
</div>

---
class: text-sm
---

<div class="tag">// A · Digitaler Raum · Finding 1</div>

## Mentale Verfügbarkeit für Samsung TV aufbauen. 

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// Website</div>
<div class="opti-bullet">Kategorie "Testsieger" in Search besetzen. Samsung Newsroom rankt bereits auf Platz 5.</div>
<div class="opti-bullet">Duplicated Content / Canonical lösen: B2C vs. B2B Pages.</div>
<div class="opti-bullet">Longtail-Keyword-Strategie — auch für KI-Suche relevant, da LG bei Vergleichsseiten oft gewinnt.</div>
<div class="opti-bullet">Produktbenamung = Keyword: "65 Zoll OLED 4K TV S90D" statt "65" OLED 4K TV S90D".</div>
<div class="opti-bullet">Intent Match: [Größe] + Marke + Produktlinie + Features vs. generisch + Modell.</div>
<div class="opti-bullet">Stabile Produktrankings / AI: viele Rewrites durch Google abfangen.</div>
<div class="opti-bullet">Samsung Smart TV Wikipedia Page aufbauen.</div>
<div class="opti-bullet">Mega-Menü: Navigation nach Bildschirmgröße.</div>
<div class="opti-bullet">Anti-Glare als eigene Kategorie: <strong>"Der einzige Premium-TV der auch am Tag funktioniert."</strong></div>
<div class="opti-bullet">AI-kuratierte YouTube Hacks.</div>
<div class="opti-bullet">Answer Type Optimization für Featured Snippets.</div>
</div>
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// eShop</div>
<div class="opti-bullet">Framing: Best Seller Kategorie -> Amazon, Best Value, Premium, Budget (AI Search).</div>
<div class="opti-bullet">Above-the-fold Klarheit: „Perfekt für dunkle Räume & Filme“, „Top Bildqualität (OLED)“, „Mittelklasse Preis“ .</div>
<div class="opti-bullet">Badges „Top Pick“, „Meistgekauft“, „Unsere Empfehlung“. -> eRetailer</div>
<div class="opti-bullet">Situatives Priming rund um Notkäufe -> „Woran du merkst, dass dein TV zu alt ist", „Was du in 5 Minuten wissen musst, wenn du jetzt einen TV brauchst“</div>
<div class="mono text-xs mb-2 mt-3 accent-cyan">// Paid Ads</div>
<div class="opti-bullet">Custom Segments auf Test-/Vergleiche-Keywords aufbauen.</div>
<div class="opti-bullet">„Top 3 Auswahl“ als Ad-Mechanik</div>
<div class="opti-bullet">Future Situation Ads: „Der Moment, wenn dein Fernseher den Geist aufgibt“</div>
<div class="opti-bullet">Kategorie Codes: OLED = „Wie im Kino“, Neo QLED = „Kein Blenden, selbst bei Sonne“</div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Kontext · Finding 1</div>
<div class="opti-bullet" style="color: var(--color-grey);">Samsung als Marke ist bekannt — ein spezifisches Samsung TV Gerät oder eine Kategorie ist in HSPs und DRs Medienwelt nicht verankert.</div>
<div class="opti-bullet" style="color: var(--color-grey);">Samsung kommuniziert Features. Eine navigierbare Kategorie die hängenbleibt fehlt.</div>
<div class="opti-bullet" style="color: var(--color-grey);">Ziel: Mentale Verfügbarkeit aufbauen bevor das 14-Tage-Fenster öffnet.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// A · Digitaler Raum · Finding 2</div>

## Das 14-Tage-Fenster und die Notkäufer erreichen.

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// Website</div>
<div class="opti-bullet">Upgrade-Pfad: <strong>"Was sich seit Ihrem letzten Samsung TV verändert hat."</strong></div>
<div class="opti-bullet">Trade-In-Rechner: Restwert des alten Geräts transparent machen.</div>
<div class="mono text-xs mb-2 mt-3 accent-cyan">// eShop</div>
<div class="opti-bullet">Auswahl begrenzen durch direkte Vergleiche: „Warum dieser besser ist als günstigere Modelle“, „Sofort verfügbar“</div>
<div class="opti-bullet">Service-to-Sales-Trigger: nach Support-Kontakt sanften Upgrade-Hinweis kommunizieren.</div>
</div>
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// eRetailer</div>
<div class="opti-bullet">Expresslieferung als Standard positionieren: Notkäufer brauchen das Gerät sofort.</div>
<div class="opti-bullet">Trade-In direkt im Checkout auf amazon.de und otto.de integrieren.</div>
<div class="mono text-xs mb-2 mt-3 accent-cyan">// Paid Ads</div>
<div class="opti-bullet">Notfall-Architektur: <strong>Speed (morgen geliefert), Vergleich (OLED vs. QLED), Wettbewerber (Nimm lieber Samsung)</strong></div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Kontext · Finding 2</div>
<div class="opti-bullet" style="color: var(--color-grey);">50–60% aller TV-Käufe sind Notkäufe. Das 14-Tage-Fenster existiert oft gar nicht.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// A · Digitaler Raum · Finding 3</div>

## Ein navigierbares System schaffen.

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// Website</div>
<div class="opti-bullet">Kommunikative Übersetzungsschicht mit 3 Ankern: Preis-/Leistung, Use Case, Technologie — für Käufer in 3 Sätzen navigierbar.</div>
<div class="opti-bullet">Modellnamen-Mapping: S90D → Premium OLED, Q80C → Performance QLED, CU7170 → Essential</div>
<div class="opti-bullet">Konfigurator-Rebuild auf Basis der Anker.</div>
<div class="opti-bullet">AI-zitierbarer Content für Gesamtkontext der Produkte: FAQ-Schema + JSON-LD. +30–40% AI-Zitierrate.</div>
<div class="opti-bullet">SKU-/GMINT-Konsistenz: Dasselbe Gerät heißt auf StiWa, Rtings und samsung.com identisch.</div>
<div class="mono text-xs mb-2 mt-3 accent-cyan">// eShop</div>
<div class="opti-bullet">0%-Finanzierung sichtbar auf Kategorie-Seiten. Monatliche Rate direkt neben dem Kaufpreis.</div>
<div class="opti-bullet">Care+ früher im Kaufprozess positionieren — nicht erst im Checkout.</div>
</div>
<div class="opti-block opti-digital" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-cyan">// eRetailer</div>
<div class="opti-bullet">idealo Retail Media aktivieren: 78 Mio. Besuche/Monat, 69% männlich, 45–54 J. Kein TV-Hersteller aktiv.</div>
<div class="opti-bullet">Perplexity Merchant Program: 10,51% DE-Marktanteil. Kein TV-Hersteller aktiv.</div>
<div class="mono text-xs mb-2 mt-3 accent-cyan">// Paid Ads</div>
<div class="opti-bullet">SEA auf Kategorie-Keywords: "bester OLED Fernseher", "Premium TV heller Raum", "Gaming TV 4K 144Hz".</div>
<div class="opti-bullet">Affiliate-Provision auf 5–6% anheben. Samsung zahlt aktuell 3% vs. LG 6%.</div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Kontext · Finding 3</div>
<div class="opti-bullet" style="color: var(--color-grey);">Samsung hat ein Portfolio, kein navigierbares System.</div>
<div class="opti-bullet" style="color: var(--color-grey);">Ein Lineup das niemand in einem Satz erklären kann wird von keinem Algorithmus in einem Satz empfohlen.</div>
<div class="opti-bullet" style="color: var(--color-grey);">Die Kategorie- und Produktnavigation sind lokal lösbar ohne HQ-Dependency.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// Hierarchical Value Maps</div>

## Vom Feature zum <span class="accent-lime">Wert.</span>

<div class="grid grid-cols-2 gap-10 mt-4 items-start">
<div>
  <p class="text-grey text-sm mb-4">HVMs verbinden konkrete Produktattribute über funktionale Konsequenzen mit dem was Menschen wirklich bewegt. Samsung kommuniziert heute die linke Spalte. Relevanz entsteht in der rechten.</p>
  <div class="card mb-4" style="border-left: 3px solid var(--lime);">
    <p class="text-sm text-grey italic">Finding 1 hat gefragt: <strong class="text-white">Was bewegt Menschen wirklich wenn sie einen Premium-TV kaufen?</strong> Nicht die Specs — die Bedeutung für ihr Leben.</p>
  </div>
  <div class="flex items-center gap-3 mb-2">
    <div class="mono w-24 shrink-0">Features</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">165Hz OLED</span>
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">Gaming Hub</span>
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">Ultra-Low Latency</span>
    </div>
  </div>
  <div class="w-px h-3 bg-white/10 ml-14 mb-2"></div>
  <div class="flex items-center gap-3 mb-2">
    <div class="mono w-24 shrink-0">Benefits</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-lime/30 bg-lime/5 text-lime px-2 py-1 rounded-sm">Wettbewerbsvorteil</span>
      <span class="text-xs border border-lime/30 bg-lime/5 text-lime px-2 py-1 rounded-sm">Soziales Erlebnis</span>
    </div>
  </div>
  <div class="w-px h-3 bg-white/10 ml-14 mb-2"></div>
  <div class="flex items-center gap-3">
    <div class="mono w-24 shrink-0">Werte</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-pink/30 bg-pink/5 text-pink px-2 py-1 rounded-sm">Kompetenz</span>
      <span class="text-xs border border-pink/30 bg-pink/5 text-pink px-2 py-1 rounded-sm">Zugehörigkeit</span>
    </div>
  </div>
</div>
<div>
  <div class="mono mb-3 accent-lime">// Aktuell: Gaming + TV — komplett</div>
  <div class="mono mb-2 accent-orange">// Empfohlene Erweiterungen</div>
  <div class="flex flex-col gap-2"  style="font-size: 0.5rem;">
    <div class="card text-sm"><span class="accent-orange font-bold mr-2">+</span><strong>Home Cinema / OLED</strong> — 67% der AI-Gespräche diskutieren OLED. Samsung verliert Cinema-Käufer per Default.</div>
    <div class="card text-sm"><span class="accent-orange font-bold mr-2">+</span><strong>Bright Room / Sports TV</strong> — Samsungs stärkster objektiver Vorteil. Anti-Glare → kein Kompromiss → Autonomie.</div>
    <div class="card text-sm"><span class="accent-orange font-bold mr-2">+</span><strong>HSP-Persona (Ø 56 J.)</strong> — Statusbewusstsein Idx 277. Qualität → Vertrauen → Statusrelevanz.</div>
    <div class="card text-sm"><span class="accent-orange font-bold mr-2">+</span><strong>SmartThings / Connected Home</strong> — SmartThings TV → Unified Control → Reibungslosigkeit → Familienharmonie.</div>
  </div>
</div>
</div>

---
class: p-0
---

<div style="background:#060b14;width:100%;height:100%;position:relative;overflow:hidden;padding:1.5rem 1rem 1rem;">

<div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,200,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,0.04) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;"></div>

<div style="position:relative;z-index:10;text-align:center;margin-bottom:0.5rem;">
  <div style="font-size:0.55rem;letter-spacing:4px;text-transform:uppercase;color:#8ab4c2;">Samsung Gaming · Hierarchical Value Map · Klicke auf einen Knoten</div>
</div>

<div id="hvm-slide" style="position:relative;z-index:5;display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;max-width:900px;margin:0 auto;">

  <div>
    <div style="text-align:center;font-size:0.45rem;letter-spacing:3px;text-transform:uppercase;color:#00b4d8;border-bottom:1px solid #00b4d8;padding:0.4rem;margin-bottom:0.8rem;">Attribute</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;padding:0 0.3rem;" id="col-attr">
      <div class="hvm-node attr-node" data-id="a1" data-connects='["c1","c2"]' data-info="&lt;b&gt;165 Hz OLED Display&lt;/b&gt; — Ultra-schnelle Bildwiederholrate eliminiert Ghosting. Jede Bewegung ist gestochen scharf.">
        <div class="hvm-tag" style="color:#00b4d8;">Display</div>
        <div class="hvm-title">165 Hz OLED</div>
        <div class="hvm-desc">Anti-Ghosting · Crystal Motion</div>
      </div>
      <div class="hvm-node attr-node" data-id="a2" data-connects='["c1","c3"]' data-info="&lt;b&gt;1ms Response Time (GtG)&lt;/b&gt; — Minimale Eingabeverzögerung für sofortige Reaktion zwischen Controller und Bild.">
        <div class="hvm-tag" style="color:#00b4d8;">Performance</div>
        <div class="hvm-title">1ms Response</div>
        <div class="hvm-desc">GtG · Input Lag minimal</div>
      </div>
      <div class="hvm-node attr-node" data-id="a3" data-connects='["c2","c4"]' data-info="&lt;b&gt;FreeSync Premium Pro / G-Sync&lt;/b&gt; — Adaptives Sync eliminiert Screen-Tearing und Stutter für flüssiges Gameplay.">
        <div class="hvm-tag" style="color:#00b4d8;">Sync</div>
        <div class="hvm-title">FreeSync Pro</div>
        <div class="hvm-desc">VRR · Tear-free</div>
      </div>
      <div class="hvm-node attr-node" data-id="a4" data-connects='["c3","c5"]' data-info="&lt;b&gt;AI Game Mode&lt;/b&gt; — Automatische Optimierung von Bildschärfe, HDR und Ton basierend auf dem erkannten Spielgenre.">
        <div class="hvm-tag" style="color:#00b4d8;">KI</div>
        <div class="hvm-title">AI Game Mode</div>
        <div class="hvm-desc">Auto-Optimierung · Genre-KI</div>
      </div>
      <div class="hvm-node attr-node" data-id="a5" data-connects='["c4","c5"]' data-info="&lt;b&gt;GameHub Ecosystem&lt;/b&gt; — Xbox Cloud, GeForce Now, Samsung Cloud nativ integriert.">
        <div class="hvm-tag" style="color:#00b4d8;">Ökosystem</div>
        <div class="hvm-title">GameHub</div>
        <div class="hvm-desc">Cloud · Xbox · GeForce Now</div>
      </div>
      <div class="hvm-node attr-node" data-id="a6" data-connects='["c6","c2"]' data-info="&lt;b&gt;Gaming Hub TV&lt;/b&gt; — Dedizierte Gaming-TV-Plattform mit Game Bar, VRR, HDMI 2.1.">
        <div class="hvm-tag" style="color:#00b4d8;">Smart TV</div>
        <div class="hvm-title">Gaming Hub TV</div>
        <div class="hvm-desc">4K · VRR · HDMI 2.1</div>
      </div>
      <div class="hvm-node attr-node" data-id="a7" data-connects='["c6","c1"]' data-info="&lt;b&gt;Spatial Audio (Dolby Atmos)&lt;/b&gt; — 3D-Klangraum für präzise Richtungswahrnehmung.">
        <div class="hvm-tag" style="color:#00b4d8;">Audio</div>
        <div class="hvm-title">Spatial Audio</div>
        <div class="hvm-desc">Dolby Atmos · 3D-Positional</div>
      </div>
    </div>
  </div>

  <div>
    <div style="text-align:center;font-size:0.45rem;letter-spacing:3px;text-transform:uppercase;color:#7b2fff;border-bottom:1px solid #7b2fff;padding:0.4rem;margin-bottom:0.8rem;">Konsequenzen</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;padding:0 0.3rem;" id="col-cons">
      <div class="hvm-node cons-node" data-id="c1" data-connects='["a1","a2","a7","v1","v2"]' data-info="&lt;b&gt;Tiefe Immersion&lt;/b&gt; — Der Spieler taucht vollständig in die Spielwelt ein; äußere Ablenkungen verschwinden.">
        <div class="hvm-tag" style="color:#7b2fff;">Psychosozial</div>
        <div class="hvm-title">Tiefe Immersion</div>
        <div class="hvm-desc">Flow-Zustand · Realitätsvergessenheit</div>
      </div>
      <div class="hvm-node cons-node" data-id="c2" data-connects='["a1","a3","a6","v1","v3"]' data-info="&lt;b&gt;Wettbewerbsvorteil&lt;/b&gt; — Höhere FPS und bessere Bildqualität liefern messbare Vorteile in Ranked-Matches.">
        <div class="hvm-tag" style="color:#7b2fff;">Funktional</div>
        <div class="hvm-title">Wettbewerbsvorteil</div>
        <div class="hvm-desc">Mehr Wins · Rankingaufstieg</div>
      </div>
      <div class="hvm-node cons-node" data-id="c3" data-connects='["a2","a4","v2","v4"]' data-info="&lt;b&gt;Effizienz & Zeitersparnis&lt;/b&gt; — KI und automatisierte Optimierungen reduzieren Setup-Zeit.">
        <div class="hvm-tag" style="color:#7b2fff;">Funktional</div>
        <div class="hvm-title">Effizienz & Zeit</div>
        <div class="hvm-desc">Setup-frei · Mehr Spielzeit</div>
      </div>
      <div class="hvm-node cons-node" data-id="c4" data-connects='["a3","a5","v3","v5"]' data-info="&lt;b&gt;Konstante Performance&lt;/b&gt; — Kein Lag, kein Throttling, keine Verbindungsabbrüche.">
        <div class="hvm-tag" style="color:#7b2fff;">Funktional</div>
        <div class="hvm-title">Konstante Performance</div>
        <div class="hvm-desc">Stabil · Zuverlässig</div>
      </div>
      <div class="hvm-node cons-node" data-id="c5" data-connects='["a4","a5","v4","v5"]' data-info="&lt;b&gt;Reaktivität & Kontrolle&lt;/b&gt; — Unmittelbares Feedback zwischen Eingabe und Spielreaktion.">
        <div class="hvm-tag" style="color:#7b2fff;">Psychosozial</div>
        <div class="hvm-title">Reaktivität & Kontrolle</div>
        <div class="hvm-desc">Präzision · Körpergefühl</div>
      </div>
      <div class="hvm-node cons-node" data-id="c6" data-connects='["a6","a7","v1","v6"]' data-info="&lt;b&gt;Soziales Erlebnis&lt;/b&gt; — Gemeinsam spielen, streamen, teilen — das Gerät wird zur sozialen Plattform.">
        <div class="hvm-tag" style="color:#7b2fff;">Sozial</div>
        <div class="hvm-title">Soziales Erlebnis</div>
        <div class="hvm-desc">Co-op · Streaming · Teilen</div>
      </div>
    </div>
  </div>

  <div>
    <div style="text-align:center;font-size:0.45rem;letter-spacing:3px;text-transform:uppercase;color:#ff6d00;border-bottom:1px solid #ff6d00;padding:0.4rem;margin-bottom:0.8rem;">Werte</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;padding:0 0.3rem;" id="col-vals">
      <div class="hvm-node val-node" data-id="v1" data-connects='["c1","c2","c6"]' data-info="&lt;b&gt;Freude & Vergnügen&lt;/b&gt; — Gaming soll Spaß machen, aufheitern, positive Emotionen auslösen.">
        <div class="hvm-tag" style="color:#ff6d00;">Hedonistisch</div>
        <div class="hvm-title">Freude & Vergnügen</div>
        <div class="hvm-desc">Spaß · Positive Emotionen</div>
      </div>
      <div class="hvm-node val-node" data-id="v2" data-connects='["c1","c3"]' data-info="&lt;b&gt;Selbstverwirklichung&lt;/b&gt; — Fähigkeiten ausbauen, Ziele erreichen, das eigene Potenzial ausschöpfen.">
        <div class="hvm-tag" style="color:#ff6d00;">Terminal</div>
        <div class="hvm-title">Selbstverwirklichung</div>
        <div class="hvm-desc">Skills · Wachstum · Potenzial</div>
      </div>
      <div class="hvm-node val-node" data-id="v3" data-connects='["c2","c4"]' data-info="&lt;b&gt;Leistung & Kompetenz&lt;/b&gt; — Als fähiger Spieler wahrgenommen werden.">
        <div class="hvm-tag" style="color:#ff6d00;">Terminal</div>
        <div class="hvm-title">Leistung & Kompetenz</div>
        <div class="hvm-desc">Können · Anerkennung</div>
      </div>
      <div class="hvm-node val-node" data-id="v4" data-connects='["c3","c5"]' data-info="&lt;b&gt;Autonomie & Kontrolle&lt;/b&gt; — Freiheit, selbst zu entscheiden, ohne technische Beschränkungen.">
        <div class="hvm-tag" style="color:#ff6d00;">Terminal</div>
        <div class="hvm-title">Autonomie & Kontrolle</div>
        <div class="hvm-desc">Freiheit · Selbstbestimmung</div>
      </div>
      <div class="hvm-node val-node" data-id="v5" data-connects='["c4","c5"]' data-info="&lt;b&gt;Sicherheit & Vertrauen&lt;/b&gt; — Vertrauen dass die Technik im entscheidenden Moment funktioniert.">
        <div class="hvm-tag" style="color:#ff6d00;">Terminal</div>
        <div class="hvm-title">Sicherheit & Vertrauen</div>
        <div class="hvm-desc">Verlässlichkeit · Stabilität</div>
      </div>
      <div class="hvm-node val-node" data-id="v6" data-connects='["c6"]' data-info="&lt;b&gt;Zugehörigkeit&lt;/b&gt; — Gaming als sozialer Kit: Freundschaften, Communities, geteilte Erlebnisse.">
        <div class="hvm-tag" style="color:#ff6d00;">Sozial</div>
        <div class="hvm-title">Zugehörigkeit</div>
        <div class="hvm-desc">Community · Identität · Bonds</div>
      </div>
    </div>
  </div>

  <svg id="hvm-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2;overflow:visible;"></svg>
</div>

<div id="hvm-info" style="position:relative;z-index:10;text-align:center;margin-top:0.5rem;min-height:1.4rem;font-size:0.65rem;color:#8ab4c2;font-style:italic;">← Klicke auf einen Knoten um die Verbindungen zu sehen →</div>

</div>

<style scoped>
.hvm-node {
  position: relative;
  width: 100%;
  max-width: 180px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;
}
.attr-node { background: #0e2a3a; border-color: #00b4d8; }
.attr-node:hover, .attr-node.active { box-shadow: 0 0 20px rgba(0,180,216,0.4); border-color: #00d4ff; transform: scale(1.04); }
.cons-node { background: #1a1040; border-color: #7b2fff; }
.cons-node:hover, .cons-node.active { box-shadow: 0 0 20px rgba(123,47,255,0.4); border-color: #9d4fff; transform: scale(1.04); }
.val-node { background: #1a0a00; border-color: #ff6d00; }
.val-node:hover, .val-node.active { box-shadow: 0 0 20px rgba(255,109,0,0.4); border-color: #ff8f40; transform: scale(1.04); }
.hvm-tag { font-size: 0.38rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 3px; opacity: 0.8; }
.hvm-title { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.5px; color: #e8f4f8; margin-bottom: 2px; }
.hvm-desc { font-size: 0.45rem; color: #8ab4c2; line-height: 1.4; }
.conn-line { stroke: rgba(255,255,255,0.12); stroke-width: 1.5; fill: none; transition: all 0.3s; }
.conn-highlight-a { stroke: #00b4d8; stroke-width: 2.5; }
.conn-highlight-c { stroke: #7b2fff; stroke-width: 2.5; }
.conn-highlight-v { stroke: #ff6d00; stroke-width: 2.5; }
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    const grid = document.getElementById('hvm-slide')
    const svg = document.getElementById('hvm-svg')
    const infoEl = document.getElementById('hvm-info')
    if (!grid || !svg) return

    const nodeMap = {}
    document.querySelectorAll('.hvm-node').forEach(el => {
      nodeMap[el.dataset.id] = {
        el,
        connects: JSON.parse(el.dataset.connects || '[]'),
        info: el.dataset.info
      }
    })

    let allLines = []
    let activeId = null

    function getScale() {
      return grid.offsetWidth / grid.getBoundingClientRect().width
    }

    function getCenter(el) {
      const scale = getScale()
      const gr = grid.getBoundingClientRect()
      const r = el.getBoundingClientRect()
      return {
        x: (r.left + r.width / 2 - gr.left) * scale,
        y: (r.top + r.height / 2 - gr.top) * scale
      }
    }

    function drawLines() {
      svg.innerHTML = ''
      allLines = []
      const drawn = new Set()
      Object.entries(nodeMap).forEach(([id, node]) => {
        node.connects.forEach(cid => {
          const key = [id, cid].sort().join('-')
          if (drawn.has(key) || !nodeMap[cid]) return
          drawn.add(key)
          const from = getCenter(node.el)
          const to = getCenter(nodeMap[cid].el)
          const mx = (from.x + to.x) / 2
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          path.setAttribute('d', `M${from.x},${from.y} C${mx},${from.y} ${mx},${to.y} ${to.x},${to.y}`)
          path.style.stroke = 'rgba(255,255,255,0.15)'
          path.style.strokeWidth = '1.5'
          path.style.fill = 'none'
          path.style.transition = 'all 0.3s'
          path.style.opacity = '1'
          path.dataset.from = id
          path.dataset.to = cid
          svg.appendChild(path)
          allLines.push({ el: path, from: id, to: cid })
        })
      })
    }

    function resetLines() {
      allLines.forEach(l => {
        l.el.style.stroke = 'rgba(255,255,255,0.15)'
        l.el.style.strokeWidth = '1.5'
        l.el.style.opacity = '1'
      })
    }

    function highlight(id) {
      if (activeId === id) {
        activeId = null
        document.querySelectorAll('.hvm-node').forEach(n => n.classList.remove('active'))
        resetLines()
        infoEl.innerHTML = '← Klicke auf einen Knoten um die Verbindungen zu sehen →'
        return
      }
      activeId = id
      const node = nodeMap[id]
      document.querySelectorAll('.hvm-node').forEach(n => n.classList.remove('active'))
      node.el.classList.add('active')

      const colorMap = { a: '#00b4d8', c: '#7b2fff', v: '#ff6d00' }

      allLines.forEach(l => {
        if (l.from === id || l.to === id) {
          const srcType = l.from.startsWith('a') ? 'a' : l.from.startsWith('c') ? 'c' : 'v'
          l.el.style.stroke = colorMap[srcType]
          l.el.style.strokeWidth = '2.5'
          l.el.style.opacity = '1'
        } else {
          l.el.style.stroke = 'rgba(255,255,255,0.05)'
          l.el.style.strokeWidth = '1'
          l.el.style.opacity = '0.3'
        }
      })

      infoEl.innerHTML = (node.info || '').replace(/&lt;b&gt;/g,'<b>').replace(/&lt;\/b&gt;/g,'</b>')
    }

    document.querySelectorAll('.hvm-node').forEach(el => {
      el.addEventListener('click', () => highlight(el.dataset.id))
    })

    drawLines()
    window.addEventListener('resize', () => {
      drawLines()
      if (activeId) highlight(activeId)
    })
  }, 500)
})
</script>
---
class: text-sm
---

<div class="tag">// B · Analoger Raum · Finding 1</div>

## Mentale Verfügbarkeit für Samsung TV aufbauen.

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// Fachhandel</div>
<div class="opti-bullet">POS-Material das Anti-Glare als eigene Kategorie kommuniziert: "Der beste TV für helle Räume."</div>
<div class="opti-bullet">Demo-Content mit eigenem Receiver: kuratierter 4K/8K HDR-Content statt gemeinsamer Antennen-Receiver.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Buying Groups</div>
<div class="opti-bullet">Ratgeber bei Expert.de und Euronics.de: <strong>"Welcher Samsung TV passt zu mir?"</strong> als co-gebrandeter Content.</div>
<div class="opti-bullet">Samsung-Technologie-Hub als Euronics-Trendblog-Beitrag: Anti-Glare, Helligkeit und SmartThings erklärt.</div>
</div>
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// MSD</div>
<div class="opti-bullet">Samsung Brand Store auf mediamarkt.de mit TV-spezifischem Storytelling und Anti-Glare als Kernbotschaft.</div>
<div class="opti-bullet">myMediaMarkt-Integration: Samsung als Markenpartner für 14M+ Mitglieder aktivieren.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Lokales Marketing</div>
<div class="opti-bullet">Hyperlokal Social Proof: PLZ-basierte Kommunikation an bestehende Samsung-Besitzer. <em>"In Ihrem Viertel entscheiden sich immer mehr für Samsung OLED."</em></div>
<div class="opti-bullet">Installer als lokaler Botschafter: Karte beim TV-Aufbau mit lokalem Social Proof.</div>
<div class="opti-bullet">Neubaugebiete als Zielgruppe: Kooperation mit Immobilienmaklern und Hausverwaltungen.</div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Möbelhäuser: The Frame in IKEA, XXXLutz, Westwing als Wohnzimmer-Element inszenieren.</div>
<div class="opti-bullet">Architekt und Inneneinrichter als B2B-Kanal: The Frame als Designobjekt. Strukturierter Zugang fehlt heute komplett.</div>
<div class="opti-bullet">Energie-Kooperation: Samsung TVs im Kontext von Smart Home und Energieeffizienz. SmartThings als verbindendes Element.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// B · Analoger Raum · Finding 2</div>

## Das 14-Tage-Fenster und die Notkäufer erreichen.

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// Fachhandel</div>
<div class="opti-bullet">Verfügbarkeitsgarantie kommunizieren: Notkäufer brauchen Sicherheit dass das Gerät sofort verfügbar ist.</div>
<div class="opti-bullet">Express-Lieferung und Same-Day-Installation als Fachhandel-exklusives Angebot.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Buying Groups</div>
<div class="opti-bullet">Lokale Hausmessen von Expert und Euronics als Touchpoint für Upgrade-Kommunikation nutzen.</div>
<div class="opti-bullet">KOOP-Messe Hannover 2027 als Samsung Premium-Inszenierungsplattform für Upgrade-Kampagne.</div>
</div>
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// MSD</div>
<div class="opti-bullet">Ship-from-Store für große TVs: Notkäufer können sofort mitnehmen statt zu warten.</div>
<div class="opti-bullet">Click & Collect als Conversion-Beschleuniger für Notkäufer.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Lokales Marketing</div>
<div class="opti-bullet">Hyperlokal Social Proof als Always-on Maßnahme: Notkäufer entscheiden schnell — lokaler Social Proof senkt die Entscheidungshürde.</div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Immobilienmakler als Vertriebspartner: Beim Hauskauf Samsung-Voucher oder Trade-In-Angebote übergeben. Breites Zeitfenster, kein Wettbewerb.</div>
<div class="opti-bullet">Telekom und Vodafone als Distributions-Partner: Samsung TVs als Bundle mit Internet und Kabel. Umzug und Neubezug als natürlicher Trigger.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// B · Analoger Raum · Finding 3</div>

## Lokal ein navigierbares System schaffen.

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// Fachhandel</div>
<div class="opti-bullet">Einheitliches POS-Material: Premium, Mid, Budget — für jeden Käufer in 3 Sätzen navigierbar.</div>
<div class="opti-bullet">Promoter-Schulung auf Basis der kommunikativen Übersetzungsschicht: 3 Sätze pro Kategorie.</div>
<div class="opti-bullet">Appointment-System: QR-Code am POS — Käufer bucht Termin, selber Promoter beim Kaufbesuch, Voucher als Incentive.</div>
<div class="opti-bullet">Demo-Content mit eigenem Receiver: zeigt Anti-Glare und Helligkeit optimal.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Buying Groups</div>
<div class="opti-bullet">Coin-System matchen: LG zahlt €30/Verkauf in 200+ Fachgeschäften. Promoter verdienen €400–500/Monat extra.</div>
<div class="opti-bullet">Co-gebrandeter Ratgeber bei Expert.de und Euronics.de in Samsung-Kategorie-Logik.</div>
<div class="opti-bullet">Top-100-Liste der Buying Group Stores für gezielte Betreuung.</div>
</div>
<div class="opti-block opti-analog" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-orange">// MSD</div>
<div class="opti-bullet">Samsung Brand Store auf mediamarkt.de mit klarer Kategorie-Navigation: Premium, Mid, Budget.</div>
<div class="opti-bullet">Bei OLED-Suche auf MSD steht Samsung auf Platz 5, LG auf Platz 1. Sponsored Listings schalten.</div>
<div class="mono text-xs mb-2 mt-3 accent-orange">// Lokales Marketing</div>
<div class="opti-bullet">Lokale Expert-Hausmessen mit Samsung Live-Demos über One-Launch-Programm.</div>
<div class="opti-bullet">KOOP-Messe Hannover 2027: 3.000 Teilnehmer, 200 Aussteller als Samsung Premium-Plattform.</div>
</div>
<div class="opti-block opti-dist" style="overflow-y: auto; max-height: 72vh;">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Coolblue als Premium-Partner: Hybrid-Modell mit Showroom-Erlebnis und nahtlosem Online-Checkout. Pilot für kohärente Samsung Premium-Experience.</div>
<div class="opti-bullet">Drop-Shipping für Buying Groups: Händler verkaufen Premium-TVs ohne Lagerrisiko. System wird in mehr Kanälen gleichzeitig sichtbar.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// C · Omnichannel / O2O · Online → Offline</div>

## <span class="accent-lime">Online trifft Offline.</span> Der Händler als verlängerter Arm der digitalen Journey.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<div class="card card-lime mb-3">
  <div class="mono mb-1 accent-lime">Samsung.com als Retail-Brücke</div>
  <div class="text-xs text-grey mb-2">Online → Offline</div>
  <div class="opti-bullet">Produktseiten mit erweitertem Händler-Modul: nächstgelegener Fachhändler für das entsprechende Gerät sichtbar.</div>
  <div class="opti-bullet">Verbesserter Konfigurator: Anforderungen definieren → Ergebnis als QR-Code → Promoter am POS scannt Beratungszettel.</div>
  <div class="opti-bullet">Konfigurationsergebnis per E-Mail als Beratungsvorbereitung versenden → CRM-Einstieg.</div>
</div>
<div class="card card-orange">
  <div class="mono mb-1 accent-orange">CRM-gestützte Lead-Qualifizierung</div>
  <div class="text-xs text-grey mb-2">Online ↔ Offline</div>
  <div class="opti-bullet">Bestandskunden mit 4–6 Jahre altem Gerät über SmartThings-Daten identifizieren → Upgrade-Pfad zurück in den Handel.</div>
  <div class="opti-bullet">Galaxy-Nutzer ohne Samsung-TV über Samsung Members App ansprechen: Ökosystem-Vorteil + Händler-Voucher.</div>
</div>
</div>
<div>
<div class="card" style="border-top: 3px solid var(--color-neon-green);">
  <div class="mono mb-2">Warum das jetzt wichtig ist</div>
  <div class="text-sm text-grey leading-relaxed">Die digitale Journey endet heute oft vor dem Store. Kunden kommen mit offener Vorstellung — kein Samsung TV als mentalen Anker. Die Retail-Brücke schließt diesen Gap: Samsung.com führt nicht mehr nur zur Kaufentscheidung, sondern direkt zum Händler-Erlebnis.</div>
</div>
<div class="card mt-3" style="border-top: 3px solid var(--color-vivid-orange);">
  <div class="mono mb-2">Messbare Hebel</div>
  <div class="text-sm text-grey">Händler-Modul Klickrate · QR-Code Scans am POS · CRM-Einstieg via Konfigurator · Voucher-Einlösequote · Conversion Rate Beratungszettel → Kauf</div>
</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// C · Omnichannel / O2O · Offline → Online → Offline</div>

## <span class="accent-lime">Physische Erlebnisse.</span> Außerhalb des CE-Handels — digital weitergeführt.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<div class="card card-lime mb-3">
  <div class="mono mb-1 accent-lime">Showroom & Experience Hubs</div>
  <div class="text-xs text-grey mb-2">Offline → Online → Offline</div>
  <div class="opti-bullet">Kuratierte Premium-TV-Installationen in Telekom- und Vodafone-Stores als Experience-Fläche → Landingpage mit Händlersuche.</div>
  <div class="opti-bullet">Pop-up Home Cinema Lounge im Eingangsbereich von Möbelhäusern — online buchbar für Gaming Sessions oder private Filmnacht.</div>
</div>
<div class="card card-orange">
  <div class="mono mb-1 accent-orange">Ship-from-Store & Click & Collect</div>
  <div class="text-xs text-grey mb-2">Online ↔ Offline</div>
  <div class="opti-bullet">Reserve-and-Collect: online reservieren → innerhalb weniger Stunden beim Händler abholen oder lokal geliefert bekommen — mit SmartThings-Ersteinrichtung vor Ort.</div>
  <div class="opti-bullet">Vor Großereignissen: <strong>"Heute bestellt, heute geschaut"</strong> — Champions League, Olympia als Anlass.</div>
  <div class="opti-bullet">Stationäre Händler liefern aus Store-Bestand mit Premium-Service-Bundle: Wandmontage + Ersteinrichtung. Nur Händler mit zertifiziertem Service-Level werden bevorzugt online angezeigt.</div>
</div>
</div>
<div>
<div class="card" style="border-top: 3px solid var(--color-neon-green);">
  <div class="mono mb-2">Das strukturelle Prinzip</div>
  <div class="text-sm text-grey leading-relaxed">Premium-TVs brauchen physische Erfahrung — Bild, Ton und Größe müssen erlebt werden. Die Frage ist nicht ob, sondern wo dieses Erlebnis stattfindet. Wenn CE-Handel wegbricht: neue Räume schaffen die Samsung kontrolliert und kuratiert.</div>
</div>
<div class="card mt-3" style="border-top: 3px solid var(--color-vivid-orange);">
  <div class="mono mb-2">Pilotmärkte</div>
  <div class="text-sm text-grey">Berlin · München · Hamburg als erste Experience Hub Standorte. Telekom-Partnerschaft als schnellster Einstieg — 500+ Stores, hohe Kundenfrequenz, Smart Home-Affinität bereits vorhanden.</div>
</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// C · Omnichannel / O2O · Online → Loyalty</div>

## <span class="accent-lime">Nach dem Kauf beginnt die Bindung.</span> Aus dem Einmalkauf wird ein dauerhafter Kontakt.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<div class="card card-lime mb-3">
  <div class="mono mb-1 accent-lime">Drop-Shipping für Fachhandel</div>
  <div class="text-xs text-grey mb-2">Online → Offline</div>
  <div class="opti-bullet">Whitelabel-Shopmodul für Recherche- und Consideration-Touchpoints: Foren, Special Interest Medien — Online-Kauf mit persönlicher Beratung verbinden.</div>
  <div class="opti-bullet">Händler verkauft das gesamte Premium-Sortiment ohne Lagerrisiko — Samsung liefert direkt.</div>
</div>
<div class="card card-orange">
  <div class="mono mb-1 accent-orange">Post-Purchase Ökosystem-Brücke</div>
  <div class="text-xs text-grey mb-2">Offline → Online → Loyalty</div>
  <div class="opti-bullet">TV-Installation als strukturierter Ökosystem-Einstieg: geführter Onboarding-Flow aktiviert SmartThings, legt Samsung-Account an, hält Kontakt zum beratenden Fachhändler aufrecht.</div>
  <div class="opti-bullet">Dedizierter digitaler Ansprechpartner für die ersten 30 Tage nach dem Kauf.</div>
  <div class="opti-bullet">Post-Purchase-CRM mit 3 Hebeln: Zubehör nach Kauf → Ökosystem-Vertiefung nach 6 Monaten → Upgrade-Impuls nach 4–5 Jahren.</div>
  <div class="opti-bullet">Erhöhter Samsung Members Status für TV-Käufer: Prioritäts-Service + jährliches Kalibrierungs-Angebot.</div>
</div>
</div>
<div>
<div class="card" style="border-top: 3px solid var(--color-neon-green);">
  <div class="mono mb-2">Der Flywheel-Effekt</div>
  <div class="text-sm text-grey leading-relaxed">Jeder TV-Kauf ist der Einstieg ins Samsung-Ökosystem. SmartThings verbindet TV, Smartphone, Haushaltsgeräte. Wer das Ökosystem bewohnt wechselt beim nächsten Kauf seltener die Marke. Das ist der strukturelle Unterschied zwischen 40% Churn und echter Loyalty.</div>
</div>
<div class="card mt-3" style="border-top: 3px solid var(--color-vivid-orange);">
  <div class="mono mb-2">KPIs</div>
  <div class="text-sm text-grey">SmartThings-Aktivierungsrate · Samsung Account Registrierungen · Ökosystem-Produkte pro Haushalt · Churn-Rate beim Ersatzkauf · NPS nach 30 Tagen</div>
</div>
</div>
</div>

---

<div class="tag">// D · Distribution · Kontext</div>

<div class="grid grid-cols-2 gap-12 h-full items-center">
<div>
  <h2>JD.com übernimmt MediaMarkt.<br><span class="accent-orange">Ein Erdbeben für den Premium-TV-Markt.</span></h2>
  <p class="text-grey mt-4 text-sm">Im Dezember 2025 sichert sich JD.com rund 85% der Ceconomy-Anteile für 2,2 Mrd. Euro. Das erklärte Ziel: 1.000 chinesische Marken exklusiv in Europa etablieren. TVs über 75 Zoll werden nicht mehr stationär gelistet.</p>
</div>
<div class="flex flex-col gap-3">
  <div class="card card-orange">
    <div class="mono mb-1 accent-orange">01 · Verlust von Sichtbarkeit</div>
    <div class="text-sm text-grey">Physische Präsenz in über 1.000 Filialen bricht weg. Impulskäufe und Markenwahrnehmung reduzieren sich drastisch.</div>
  </div>
  <div class="card card-orange">
    <div class="mono mb-1 accent-orange">02 · Verlust von Beratungsqualität</div>
    <div class="text-sm text-grey">Samsung verliert die Beratungshoheit. Verkäufer werden incentiviert, chinesische Eigenmarken zu pushen.</div>
  </div>
  <div class="card card-orange">
    <div class="mono mb-1 accent-orange">03 · Verlust von Großformat-Präsenz</div>
    <div class="text-sm text-grey">TVs über 75 Zoll aus dem stationären Handel verbannt. Das margenstarke Premium-Segment verliert seinen Showroom.</div>
  </div>
  <div class="card" style="border-left: 3px solid var(--color-neon-green);">
    <div class="text-sm text-grey italic"><strong class="text-white">Die Chance:</strong> Neuerfindung des Vertriebs — weg von der Abhängigkeit eines Mega-Retailers hin zu einer resilienten Multi-Channel-Strategie.</div>
  </div>
</div>
</div>

---

<div class="tag">// D · Distribution · Marktposition</div>

<div class="grid grid-cols-2 gap-12 h-full items-center">
<div>
  <h2>Samsung TV: Marktführer<br>unter Druck.<br><span class="accent-orange">50% des Premium-Segments in Gefahr.</span></h2>
  <p class="text-grey mt-4 text-sm">Samsung ist seit 20 Jahren globaler TV-Marktführer. Im Premium-Segment ist die Dominanz besonders stark — und die Verluste durch die MediaMarkt-Disruption besonders schmerzhaft.</p>
</div>
<div class="flex flex-col gap-4">
  <div class="grid grid-cols-2 gap-3">
    <div class="card card-lime">
      <div class="mono mb-1">Globaler Marktanteil</div>
      <div class="text-4xl font-black accent-lime">29,1%</div>
      <div class="text-xs text-grey mt-1">Samsung TV global, 2025</div>
    </div>
    <div class="card card-lime">
      <div class="mono mb-1">Premium-Segment</div>
      <div class="text-4xl font-black accent-lime">54,3%</div>
      <div class="text-xs text-grey mt-1">Marktanteil über 2.500 USD</div>
    </div>
  </div>
  <div class="card card-orange">
    <div class="mono mb-1 accent-orange">Das Risiko</div>
    <div class="text-sm text-grey">Verlust von geschätzt <strong class="text-white">30–40%</strong> des stationären Premium-Absatzvolumens in Deutschland. 58% der deutschen Verbraucher suchen bei komplexen Produkten gezielt ein Fachgeschäft auf. 49% kaufen Elektronikartikel bewusst stationär (Bitkom 2024).</div>
  </div>
  <div class="card" style="border-left: 3px solid var(--color-vivid-orange);">
    <div class="text-sm text-grey">Großformat-Modelle ab 75 Zoll sind beratungsintensiv und erfordern physische Präsenz — die nun wegbricht.</div>
  </div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// D · Distribution · Szenarien</div>

## Sechs Szenarien für eine resiliente<br><span class="accent-lime">Multi-Channel-Strategie.</span>

<div class="grid grid-cols-3 gap-3 mt-4">
  <div class="card card-lime">
    <div class="mono mb-1 accent-lime">Szenario 1 · Physisch · 0–12 Mo · Kritisch</div>
    <div class="text-sm font-bold mb-2">Fachhandel stärken</div>
    <div class="text-xs text-grey">Expert & Euronics als neue Premium-TV-Bühne. Dediziertes "Samsung TV Premium Partner"-Programm: Schulungen, Erlebnis-Installationen 85"+, exklusive Produktlinien, erhöhte Margen, Co-Op-Marketing.</div>
  </div>
  <div class="card card-lime">
    <div class="mono mb-1 accent-lime">Szenario 2 · Digital · 6–18 Mo · Kritisch</div>
    <div class="text-sm font-bold mb-2">Direct-to-Consumer (D2C)</div>
    <div class="text-xs text-grey">Samsung.com als vollwertiger Premium-Verkaufskanal. Exklusive Bundles, White-Glove-Service, Trade-in-Programme, 0%-Finanzierung, In-TV-Shopping via Samsung TV Plus.</div>
  </div>
  <div class="card" style="border-top: 3px solid var(--color-vivid-orange);">
    <div class="mono mb-1 accent-orange">Szenario 3 · Physisch · 12–24 Mo · Hoch</div>
    <div class="text-sm font-bold mb-2">Neue physische Kanäle</div>
    <div class="text-xs text-grey">XXXLutz / Höffner: TV in Wohnzimmer-Inszenierungen. Galeria / Breuninger: Premium-Elektronikabteilung. IKEA: SmartThings-Integration. Samsung Experience Centers in Berlin, München, Hamburg.</div>
  </div>
  <div class="card" style="border-top: 3px solid var(--color-vivid-orange);">
    <div class="mono mb-1 accent-orange">Szenario 4 · Hybrid · 6–18 Mo · Hoch</div>
    <div class="text-sm font-bold mb-2">Telekommunikation & Bundles</div>
    <div class="text-xs text-grey">Telekom (500+ Stores): Smart Home + TV Bundle, Glasfaser-Upgrade. Vodafone / O2 (800+ Stores): GigaTV + Samsung Premium Bundle. Umzug als natürlicher Trigger.</div>
  </div>
  <div class="card" style="border-top: 3px solid #555;">
    <div class="mono mb-1" style="color:#777;">Szenario 5 · B2B · 0–12 Mo · Mittel-Hoch</div>
    <div class="text-sm font-bold mb-2">B2B & Hospitality</div>
    <div class="text-xs text-grey">Hotels, Restaurants, Büros als Absatzkanal für Premium-Großbildschirme. MicroLED und The Wall als B2B-Produkte. HiFi-Fachhandel für audiofile Heimkino-Enthusiasten.</div>
  </div>
  <div class="card" style="border-top: 3px solid #555;">
    <div class="mono mb-1" style="color:#777;">Szenario 6 · Digital · 12–36 Mo · Hoch</div>
    <div class="text-sm font-bold mb-2">Digitale Ökosysteme</div>
    <div class="text-xs text-grey">Amazon Premium Store, Instagram/Pinterest Shopping (The Frame), TikTok Shop, Gaming-Plattformen (Steam, Xbox), Architekt-Plattformen (Houzz). Samsung TV Plus als Commerce-Kanal.</div>
  </div>
</div>

---
class: text-sm
---

<div class="tag">// D · Distribution · Szenarien im Detail</div>

## Szenarien 1 + 2:<br><span class="accent-lime">Fachhandel stärken & D2C ausbauen.</span>

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<div class="card card-lime mb-3">
  <div class="mono mb-1 accent-lime">Szenario 1 · Fachhandel stärken</div>
  <div class="opti-bullet">Expert (400+ Standorte) und Euronics (1.200+ Standorte) sind die natürlichen Gewinner der MediaMarkt-Disruption.</div>
  <div class="opti-bullet">Dedizierte Schulungsprogramme für Verkäufer — analog zum erfolgreichen Hausgeräte Smart Dealer-Programm.</div>
  <div class="opti-bullet">Erlebnis-Installationen für 85" und 98" Modelle: Neo QLED als Heimkino, MicroLED als Statussymbol, The Frame als Kunstwerk.</div>
  <div class="opti-bullet">Exklusive Produktlinien und erhöhte Margen für engagierte Partner.</div>
  <div class="opti-bullet">Co-Op-Marketing-Budgets: lokale Werbung, exklusive Events, POS-Promotions.</div>
  <div class="opti-bullet">HiFi-Spezialisten als Premium-Nische für hochkompetente Beratung bei Neo QLED, OLED und MicroLED.</div>
  <div class="opti-bullet">Vorbild: Expert Roolfs (Samsung Smart Dealer des Jahres 2020), HiFi-Profis Berlin.</div>
</div>
</div>
<div>
<div class="card card-lime">
  <div class="mono mb-1 accent-lime">Szenario 2 · D2C ausbauen</div>
  <div class="opti-bullet">Samsung.com: Transformation von Informationskanal zur vollwertigen Premium-Verkaufsplattform.</div>
  <div class="opti-bullet">Exklusive Bundles nur auf Samsung.com: The Frame mit individuellen Rahmen, Neo QLED mit Soundbar-Paketen.</div>
  <div class="opti-bullet">White-Glove-Service: Premium-Lieferung, Wandmontage und Kalibrierung durch zertifizierte Techniker.</div>
  <div class="opti-bullet">Trade-in-Programme: Inzahlungnahme alter TV-Geräte senkt Kaufhürde für Premium-Upgrade.</div>
  <div class="opti-bullet">Samsung Financing: 0%-Finanzierung für 24 Monate als eigenes Produkt.</div>
  <div class="opti-bullet">In-TV-Shopping: Samsung TV Plus (88 Mio. monatliche Nutzer weltweit) als direkter Commerce-Kanal.</div>
  <div class="opti-bullet">Social Commerce: Instagram/Pinterest (The Frame), TikTok Shop (jüngere Zielgruppen).</div>
</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// D · Distribution · Szenarien im Detail</div>

## Szenarien 3–6:<br><span class="accent-lime">Physische Kanäle, Telko, B2B & Digitale Ökosysteme.</span>

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<div class="card card-orange mb-3">
  <div class="mono mb-1 accent-orange">Szenario 3 · Neue physische Kanäle</div>
  <div class="opti-bullet">XXXLutz / Höffner (370+ Standorte): TV als Teil von Wohnzimmer-Inszenierungen.</div>
  <div class="opti-bullet">Galeria / Breuninger (50+ Standorte): Premium-Elektronikabteilung im Lifestyle-Kontext.</div>
  <div class="opti-bullet">IKEA (54 Standorte): SmartThings-Integration, TV in Wohnzimmer-Settings für junge Familien.</div>
  <div class="opti-bullet">Samsung Experience Centers: 3–5 neue Standorte in Berlin, München, Hamburg.</div>
</div>
<div class="card card-orange">
  <div class="mono mb-1 accent-orange">Szenario 4 · Telekommunikation & Bundles</div>
  <div class="opti-bullet">Deutsche Telekom (500+ Shops): Smart Home + TV Bundle, Glasfaser-Upgrade als Trigger.</div>
  <div class="opti-bullet">Vodafone / O2 (800+ Shops): GigaTV + Samsung Premium Bundle für junge Familien.</div>
  <div class="opti-bullet">Umzug und Neubezug als natürlicher Kauftrigger — kein Wettbewerb um diesen Moment.</div>
</div>
</div>
<div>
<div class="card mb-3" style="border-top: 3px solid #555;">
  <div class="mono mb-1" style="color:#777;">Szenario 5 · B2B & Hospitality</div>
  <div class="opti-bullet">Hotels, Restaurants, Büros als Absatzkanal für beratungsintensive Großbildschirme.</div>
  <div class="opti-bullet">MicroLED und The Wall als dezidierte B2B-Produkte mit eigenem Vertriebskanal.</div>
  <div class="opti-bullet">HiFi-Fachhandel (200+ Standorte) für audiofile Heimkino-Enthusiasten: AV-Spezialisten für Neo QLED, OLED, MicroLED.</div>
</div>
<div class="card" style="border-top: 3px solid #555;">
  <div class="mono mb-1" style="color:#777;">Szenario 6 · Digitale Ökosysteme</div>
  <div class="opti-bullet">Amazon Premium Store: kuratierter Samsung-Markenshop mit Premium-Positionierung.</div>
  <div class="opti-bullet">Gaming-Plattformen: Steam, Xbox Marketplace — Gaming-TV-Bundles für Tech-Enthusiasten.</div>
  <div class="opti-bullet">Architekt-Plattformen: Houzz, Architonic — The Frame als Designobjekt für Interior Designer.</div>
  <div class="opti-bullet">Samsung TV Plus: 88 Mio. monatliche Nutzer als direkter Commerce-Kanal.</div>
</div>
</div>
</div>

---

<div class="tag">// D · Distribution · Roadmap</div>

## Von der Reaktion zur Neuerfindung.<br><span class="accent-lime">36-Monats-Roadmap für Samsung TV.</span>

<div class="grid grid-cols-3 gap-4 mt-5">
<div class="card card-lime">
  <div class="mono mb-1 accent-lime">Phase 1 · 0–12 Monate</div>
  <div class="text-sm font-bold mb-3">Stabilisieren</div>
  <div class="opti-bullet">Fachhandel (Expert/Euronics) mit Premium-TV-Partnerprogramm stärken.</div>
  <div class="opti-bullet">Samsung.com als vollwertigen D2C-Kanal mit White-Glove-Service ausbauen.</div>
  <div class="opti-bullet">Telekommunikationsanbieter als Bundle-Partner aktivieren (Telekom, Vodafone).</div>
  <div class="opti-bullet">Samsung Experience Centers in Top-3-Städten eröffnen.</div>
  <div class="opti-bullet">B2B/Hospitality-Vertrieb intensivieren und skalieren.</div>
</div>
<div class="card" style="border-top: 3px solid var(--color-vivid-orange);">
  <div class="mono mb-1 accent-orange">Phase 2 · 12–24 Monate</div>
  <div class="text-sm font-bold mb-3">Wachsen</div>
  <div class="opti-bullet">Möbel/Interior Design-Kooperationen aufbauen (XXXLutz, IKEA, Küchenfachhandel).</div>
  <div class="opti-bullet">Digitale Ökosystem-Partnerschaften vertiefen (Streaming, Gaming, Apple).</div>
  <div class="opti-bullet">Luxus-Retail-Präsenz etablieren (Galeria, Breuninger, KaDeWe).</div>
  <div class="opti-bullet">SmartThings-Ökosystem als Retention- und Cross-Selling-Motor ausbauen.</div>
</div>
<div class="card" style="border-top: 3px solid #555;">
  <div class="mono mb-1" style="color:#777;">Phase 3 · 24–36 Monate</div>
  <div class="text-sm font-bold mb-3">Führen</div>
  <div class="opti-bullet">Vollständige D2C-Infrastruktur mit datengetriebener Personalisierung.</div>
  <div class="opti-bullet">Internationales Rollout der neuen Kanalstrategie (DACH, Benelux, Nordics).</div>
  <div class="opti-bullet">Samsung TV als Lifestyle-Marke jenseits des Elektronikhandels positionieren.</div>
</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">
  <div class="card" style="border-left: 3px solid var(--color-neon-green);">
    <div class="mono mb-1 accent-lime">Prinzip 1</div>
    <div class="text-grey">Diversifizierung: Kein einzelner Kanal mehr als 25% des Umsatzes.</div>
  </div>
  <div class="card" style="border-left: 3px solid var(--color-vivid-orange);">
    <div class="mono mb-1 accent-orange">Prinzip 2</div>
    <div class="text-grey">Premiumisierung: Jeder neue Kanal muss das Premium-Image stärken.</div>
  </div>
  <div class="card" style="border-left: 3px solid #555;">
    <div class="mono mb-1">Prinzip 3</div>
    <div class="text-grey">Ökosystem-Denken: Samsung TV ist der Mittelpunkt des vernetzten Zuhauses.</div>
  </div>
</div>




---
layout: statement
---

<div class="tag mb-6">// Next Steps</div>

# Samsung hat alles was es braucht.<br><span class="accent-lime">Die Richtung ist klar.</span>

<div class="grid grid-cols-3 gap-5 mt-10 text-left max-w-4xl mx-auto">
  <div class="card card-lime">
    <div class="mono mb-2">01</div>
    <div class="text-sm font-bold">Welche Maßnahmen haben für Samsung DE oberste Priorität?</div>
  </div>
  <div class="card">
    <div class="mono mb-2">02</div>
    <div class="text-sm font-bold">Was ist lokal entscheidbar — und was braucht HQ-Alignment?</div>
  </div>
  <div class="card">
    <div class="mono mb-2">03</div>
    <div class="text-sm font-bold">Wo fangen wir an?</div>
  </div>
</div>

<div class="absolute bottom-8 left-0 right-0 text-center text-xs text-grey font-mono">
Samsung Premium TV · Omnichannel Strategy · Cheil Germany 2026 · Confidential
</div>