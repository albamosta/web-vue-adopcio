<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#" aria-label="Protectora d'Animals Peluts, inici">
        <span class="brand-mark" aria-hidden="true">🐾</span>
        <span class="brand-name">Peluts</span>
      </a>

      <div class="intro">
        <p class="eyebrow">ADOPCIÓ RESPONSABLE · AMOR PER SEMPRE</p>
        <h1>Protectora d'Animals Peluts</h1>
        <p class="slogan">Una nova llar pot canviar dues vides. Troba el teu millor amic.</p>
      </div>

      <span class="header-note">Junts, fem família</span>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  overflow: hidden;
  padding: 1.5rem clamp(1.25rem, 5vw, 5rem) 3.25rem;
  color: #f4fbf8;
  background:
    radial-gradient(ellipse at 78% 12%, rgb(132 214 189 / 20%), transparent 30%),
    linear-gradient(120deg, #123f43 0%, #17645f 55%, #237b76 100%);
}

.header-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr minmax(0, 3fr) 1fr;
  align-items: start;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  width: fit-content;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 2.65rem;
  height: 2.65rem;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 25%);
  border-radius: 0.95rem;
  background: rgb(255 255 255 / 10%);
  font-size: 1.25rem;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 750;
  letter-spacing: -0.04em;
}

.intro {
  padding-top: 0.35rem;
  text-align: center;
}

.eyebrow {
  margin: 0 0 0.85rem;
  color: #a8e3ce;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.16em;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.65rem);
  font-weight: 760;
  letter-spacing: -0.055em;
  line-height: 1.08;
}

.slogan {
  max-width: 38rem;
  margin: 1rem auto 0;
  color: #d7eee7;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
}

.header-note {
  justify-self: end;
  padding: 0.6rem 0.95rem;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 999px;
  color: #e2f5ed;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .header-inner {
    grid-template-columns: 1fr auto;
    gap: 2.25rem 1rem;
  }

  .intro {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .header-note {
    align-self: center;
  }
}

@media (max-width: 420px) {
  .site-header {
    padding-bottom: 2.5rem;
  }

  .header-note {
    padding: 0.5rem 0.7rem;
    font-size: 0.72rem;
  }
}
</style>
