<script>
import TargetaAnimal from '../components/TargetaAnimal.vue'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  components: {
    TargetaAnimal,
  },

  data() {
    return {
      animals: [],
      carregant: true,
      error: false,
    }
  },

  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, 'animals'))

      this.animals = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (e) {
      this.error = true
      console.error(e)
    } finally {
      this.carregant = false
    }
  },
}
</script>

<template>
  <div class="animals-view">
    <h1>Animals en adopció</h1>

    <p v-if="carregant" class="missatge">Carregant animals...</p>

    <p v-else-if="error" class="missatge">S'ha produït un error en carregar les dades.</p>

    <p v-else-if="animals.length === 0" class="missatge">No hi ha animals disponibles.</p>

    <div v-else class="cards-grid">
      <TargetaAnimal
        v-for="animal in animals"
        :key="animal.id"
        :nom="animal.nom"
        :specie="animal.specie"
        :edat="animal.edat"
        :descripcio="animal.descripcio"
        :imatge="animal.imatge"
      />
    </div>
  </div>
</template>

<style scoped>
.missatge {
  color: #2c3e50;
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
}

.animals-view h1 {
  color: #17645f;
  text-align: center;
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
</style>
