<template>
  <footer class="site-footer" id="contacte">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="brand" href="#" aria-label="Protectora d'Animals Peluts, inici">
          <span class="brand-mark" aria-hidden="true">🐾</span>
          <span>Peluts</span>
        </a>
        <p>Fem que cada història d'adopció tingui un final feliç.</p>
      </div>

      <div class="contact">
        <h2>Parlem?</h2>
        <address>
          <a href="mailto:hola@peluts.cat">hola@peluts.cat</a>
          <a href="tel:+34934125678">+34 934 12 56 78</a>
          <span>Carrer de la Riera, 24 · Barcelona</span>
        </address>
      </div>
    </div>

    <div class="copyright">
      <span>© 2026 Protectora d'Animals Peluts</span>
      <span>Fet amb amor i moltes potes.</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 2.8rem clamp(1.25rem, 5vw, 5rem) 1.25rem;
  background: #123f43;
  color: #e7f3ef;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 2.2rem;
}

.footer-brand {
  max-width: 20rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 750;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 2.55rem;
  height: 2.55rem;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 0.9rem;
  background: rgb(255 255 255 / 9%);
  font-size: 1.2rem;
}

.footer-brand p {
  margin: 0.9rem 0 0;
  color: #b8d2ca;
  font-size: 0.9rem;
  line-height: 1.65;
}

.contact h2 {
  margin: 0 0 0.75rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
}

address {
  display: grid;
  gap: 0.45rem;
  color: #c5dcd5;
  font-size: 0.86rem;
  font-style: normal;
}

address a {
  width: fit-content;
  color: inherit;
  text-decoration-color: rgb(197 220 213 / 45%);
  text-underline-offset: 0.2rem;
}

address a:hover {
  color: #a8e3ce;
}

.copyright {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 1.1rem;
  border-top: 1px solid rgb(255 255 255 / 15%);
  color: #a8c5bc;
  font-size: 0.76rem;
}

@media (max-width: 560px) {
  .footer-inner {
    flex-direction: column;
    gap: 1.8rem;
  }

  .copyright {
    flex-direction: column;
    gap: 0.35rem;
  }
}
</style>