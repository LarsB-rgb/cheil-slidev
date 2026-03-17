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
class: text-sm
---

<div class="tag">// Optimierungspotenziale · Finding 1</div>

## Was kann besser werden.
### <span class="accent-orange">Mentale Verfügbarkeit für Samsung TV aufbauen.</span>

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital">
<div class="mono text-xs mb-2 accent-cyan">// Digital</div>
<div class="opti-channel">Website</div>
<div class="opti-bullet">Kategorie "Testsieger" in Search besetzen. Samsung Newsroom rankt bereits auf Platz 5.</div>
<div class="opti-bullet">Echtes Problem: Duplicated Content / Canonical: B2C vs. B2B Pages</div>
<div class="opti-bullet">Longtail-Keyword-Strategie, weil bei Vergleichsseiten oft LG gewinnt -> auch für KI Suche wichtig</div>
<div class="opti-bullet">" vs. Zoll -> Produktbenamung = Keyword</div>
<div class="opti-bullet">Intent Match: [Größe] + Marke + Produktlinie + Features vs. [Größe] + generisch + Modell + Features -> aktuell Samsung</div>
<div class="opti-bullet">Stabile Produktrankings + höhere CTRs/ AI: viele Rewrites durch Google -> 65" OLED 4K TV S90D -> Samsung 65 Zoll OLED TV S90D</div>
<div class="opti-bullet">Samsung Smart TV Wikipedia Page</div>
<div class="opti-bullet">Mega-Menü: Bildschirmgröße</div>
<div class="opti-bullet">Anti-Glare als Kategorie: <strong>"Der einzige Premium-TV der auch am Tag funktioniert."</strong></div>
<div class="opti-bullet">AI kuratierte YouTube Hacks</div>
<div class="opti-bullet">Answer Type Optimization</div>
<div class="opti-channel">eShop</div>
<div class="opti-bullet">Post-Purchase CRM: <strong>"Ihr StiWa-Testsieger ist da — Note 1,7"</strong> direkt nach Kauf.</div>
<div class="opti-bullet">EOL-CRM-Trigger: Geräte ab 7–8 Jahren über Samsung Members ansprechen.</div>
<div class="opti-bullet">Saisonaler Trigger: vor EM, Olympia, Sportereignissen aktivieren.</div>
<div class="opti-channel">Paid Ads</div>
<div class="opti-bullet">Custom Segments auf Test-Keywords</div>
<div class="opti-bullet">Hyperlokal: PLZ-basierte Ads mit lokalem Social Proof.</div>
</div>
<div class="opti-block opti-analog">
<div class="mono text-xs mb-2 accent-orange">// Analog</div>
<div class="opti-channel">Fachhandel</div>
<div class="opti-bullet">POS-Material das Anti-Glare als eigene Kategorie kommuniziert.</div>
<div class="opti-bullet">Demo-Content mit eigenem Receiver: kuratierter 4K/8K HDR-Content.</div>
<div class="opti-channel">Buying Groups</div>
<div class="opti-bullet">Ratgeber bei Expert.de und Euronics.de: "Welcher Samsung TV passt zu mir?"</div>
<div class="opti-bullet">Samsung-Technologie-Hub als Euronics-Trendblog-Beitrag.</div>
<div class="opti-channel">MSD</div>
<div class="opti-bullet">Brand Store mediamarkt.de mit Anti-Glare als Kernbotschaft.</div>
<div class="opti-bullet">myMediaMarkt: Samsung als Markenpartner für 14M+ Mitglieder aktivieren.</div>
<div class="opti-channel">Lokales Marketing</div>
<div class="opti-bullet">Hyperlokal Social Proof: PLZ-basierte Kommunikation an Bestandskunden.</div>
<div class="opti-bullet">Installer als lokaler Botschafter: Karte beim TV-Aufbau.</div>
</div>
<div class="opti-block opti-dist">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Möbelhäuser: The Frame in IKEA, XXXLutz, Westwing als Wohnzimmer-Element inszenieren.</div>
<div class="opti-bullet">Architekt und Inneneinrichter als B2B-Kanal: The Frame als Designobjekt. Strukturierter Zugang fehlt heute.</div>
<div class="opti-bullet">Energie-Kooperation: Samsung TVs im Smart-Home-Kontext. SmartThings als verbindendes Element.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// Optimierungspotenziale · Finding 2</div>

## Was kann besser werden.
### <span class="accent-pink">Das 14-Tage-Fenster und die Notkäufer erreichen.</span>

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital">
<div class="mono text-xs mb-2 accent-cyan">// Digital</div>
<div class="opti-channel">Website</div>
<div class="opti-bullet">Upgrade-Pfad: "Was sich seit Ihrem letzten Samsung TV verändert hat."</div>
<div class="opti-bullet">Trade-In-Rechner: Restwert des alten Geräts transparent machen.</div>
<div class="opti-channel">eShop</div>
<div class="opti-bullet">EOL-Trigger: "Die EM 2026 startet in 60 Tagen. Erleben Sie sie neu."</div>
<div class="opti-bullet">Service-to-Sales-Trigger: Nach Support-Kontakt sanften Upgrade-Hinweis.</div>
<div class="opti-bullet">Feature-Deprecation: Geräte ohne HDMI 2.1 gezielt ansprechen.</div>
<div class="opti-channel">eRetailer</div>
<div class="opti-bullet">Expresslieferung als Standard: Notkäufer brauchen das Gerät sofort.</div>
<div class="opti-bullet">Trade-In direkt im Checkout auf amazon.de und otto.de integrieren.</div>
<div class="opti-channel">Paid Ads</div>
<div class="opti-bullet">Always-on Kampagne: "TV kaputt? Morgen geliefert."</div>
<div class="opti-bullet">Retargeting: Geräte die offline gehen als Notkauf-Signal via SmartThings.</div>
</div>
<div class="opti-block opti-analog">
<div class="mono text-xs mb-2 accent-orange">// Analog</div>
<div class="opti-channel">Fachhandel</div>
<div class="opti-bullet">Verfügbarkeitsgarantie kommunizieren. Same-Day-Installation als Exklusiv-Angebot.</div>
<div class="opti-channel">Buying Groups</div>
<div class="opti-bullet">Lokale Hausmessen als Touchpoint für Upgrade-Kommunikation.</div>
<div class="opti-bullet">KOOP-Messe Hannover 2027 als Samsung Premium-Inszenierungsplattform.</div>
<div class="opti-channel">MSD</div>
<div class="opti-bullet">Ship-from-Store für große TVs: Notkäufer können sofort mitnehmen.</div>
<div class="opti-bullet">Click & Collect als Conversion-Beschleuniger.</div>
<div class="opti-channel">Lokales Marketing</div>
<div class="opti-bullet">Hyperlokal Social Proof als Always-on Maßnahme.</div>
</div>
<div class="opti-block opti-dist">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Immobilienmakler als Vertriebspartner: Beim Hauskauf Samsung-Voucher übergeben. Kein Wettbewerb um diesen Moment.</div>
<div class="opti-bullet">Telekom und Vodafone: Samsung TVs als Bundle mit Internet und Kabel. Umzug als natürlicher Trigger.</div>
</div>
</div>

---
class: text-sm
---

<div class="tag">// Optimierungspotenziale · Finding 3</div>

## Was kann besser werden.
### <span class="accent-lime">Lokal ein navigierbares System schaffen.</span>

<div class="grid grid-cols-3 gap-3 mt-3">
<div class="opti-block opti-digital">
<div class="mono text-xs mb-2 accent-cyan">// Digital</div>
<div class="opti-channel">Website</div>
<div class="opti-bullet">Kommunikative Übersetzungsschicht: <strong>Premium, Mid, Budget</strong> — für Käufer in 3 Sätzen navigierbar.</div>
<div class="opti-bullet">Neo QLED vs. OLED Vergleichsartikel: zentrale Kaufentscheidung beantworten.</div>
<div class="opti-bullet">Konfigurator-Rebuild: max. 3 Fragen — Heller Raum, Heimkino oder Gaming.</div>
<div class="opti-bullet">AI-zitierbarer Content: FAQ-Schema + JSON-LD. +30–40% AI-Zitierrate.</div>
<div class="opti-channel">eShop</div>
<div class="opti-bullet">0%-Finanzierung sichtbar auf Kategorie-Seiten. Monatliche Rate neben Kaufpreis.</div>
<div class="opti-bullet">Care+ früher im Kaufprozess positionieren.</div>
<div class="opti-channel">eRetailer</div>
<div class="opti-bullet">idealo Retail Media: 78 Mio./Mo, 69% männl., 45–54 J. Kein TV-Hersteller aktiv.</div>
<div class="opti-bullet">Perplexity Merchant Program: 10,51% DE-Marktanteil. Kein TV-Hersteller aktiv.</div>
<div class="opti-channel">Paid Ads</div>
<div class="opti-bullet">SEA auf Kategorie-Keywords: "bester OLED Fernseher", "Premium TV heller Raum".</div>
<div class="opti-bullet">Affiliate-Provision auf 5–6% anheben. Samsung: 3% vs. LG: 6%.</div>
</div>
<div class="opti-block opti-analog">
<div class="mono text-xs mb-2 accent-orange">// Analog</div>
<div class="opti-channel">Fachhandel</div>
<div class="opti-bullet">Einheitliches POS-Material: Premium, Mid, Budget — 3 Sätze navigierbar.</div>
<div class="opti-bullet">Promoter-Schulung: 3 Sätze pro Kategorie statt 30 Min. Specs.</div>
<div class="opti-bullet">Appointment-System: QR-Code → selber Promoter → Voucher.</div>
<div class="opti-channel">Buying Groups</div>
<div class="opti-bullet">Coin-System matchen: LG €30/Verkauf in 200+ Geschäften.</div>
<div class="opti-bullet">Co-gebrandeter Ratgeber bei Expert.de und Euronics.de.</div>
<div class="opti-channel">MSD</div>
<div class="opti-bullet">Brand Store mediamarkt.de: klare Kategorie-Navigation.</div>
<div class="opti-bullet">Bei OLED-Suche MSD: Samsung Platz 5, LG Platz 1 → Sponsored Listings schalten.</div>
<div class="opti-channel">Lokales Marketing</div>
<div class="opti-bullet">KOOP-Messe Hannover 2027: 3.000 Teilnehmer als Samsung Premium-Plattform.</div>
</div>
<div class="opti-block opti-dist">
<div class="mono text-xs mb-2 accent-pink">// Neue Distributionswege</div>
<div class="opti-bullet">Coolblue als Premium-Partner: Showroom + nahtloser Online-Checkout. Pilot für kohärente Samsung Premium-Experience.</div>
<div class="opti-bullet">Drop-Shipping für Buying Groups: Händler verkaufen ohne Lagerrisiko. System wird in mehr Kanälen sichtbar.</div>
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
    <div class="mono w-24 shrink-0">Attribut</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">165Hz OLED</span>
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">Gaming Hub</span>
      <span class="text-xs border border-cyan/30 bg-cyan/5 text-cyan px-2 py-1 rounded-sm">Ultra-Low Latency</span>
    </div>
  </div>
  <div class="w-px h-3 bg-white/10 ml-14 mb-2"></div>
  <div class="flex items-center gap-3 mb-2">
    <div class="mono w-24 shrink-0">Konsequenz</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-lime/30 bg-lime/5 text-lime px-2 py-1 rounded-sm">Wettbewerbsvorteil</span>
      <span class="text-xs border border-lime/30 bg-lime/5 text-lime px-2 py-1 rounded-sm">Tiefe Immersion</span>
      <span class="text-xs border border-lime/30 bg-lime/5 text-lime px-2 py-1 rounded-sm">Soziales Erlebnis</span>
    </div>
  </div>
  <div class="w-px h-3 bg-white/10 ml-14 mb-2"></div>
  <div class="flex items-center gap-3">
    <div class="mono w-24 shrink-0">Wert</div>
    <div class="flex gap-2 flex-wrap">
      <span class="text-xs border border-pink/30 bg-pink/5 text-pink px-2 py-1 rounded-sm">Selbstverwirklichung</span>
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
