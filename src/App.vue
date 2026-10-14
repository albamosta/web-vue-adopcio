<script>
import BarraNavegacio from './components/BarraNavegacio.vue'
import PeuPagina from './components/PeuPagina.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacio,
    PeuPagina,
  },
}
</script>

<template>
  <div class="page-wrapper">
    <BarraNavegacio />

    <nav class="nav-menu">
      <RouterLink to="/inici">Inici</RouterLink>
      <RouterLink to="/animals">Animals</RouterLink>
      <RouterLink to="/contacte">Contacte</RouterLink>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>

    <PeuPagina />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  background-color: #f6fbfa;
}

.page-wrapper {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.nav-menu a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  font-size: 1.05rem;
}

.nav-menu a.router-link-exact-active {
  color: #17645f;
  border-bottom: 2px solid #17645f;
  padding-bottom: 2px;
}

.main-content {
  margin: 2rem 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;
}
</style>
