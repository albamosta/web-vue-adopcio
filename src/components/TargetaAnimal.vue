<template>
  <article class="animal-card">
    <div class="photo-wrap">
      <img class="animal-photo" :src="imatge" :alt="nom" />
      <span class="status">En adopció</span>
    </div>

    <div class="animal-info">
      <div class="animal-heading">
        <div>
          <p class="species">{{ specie }}</p>
          <h2>{{ nom }}</h2>
        </div>
        <span class="age">{{ edat }} anys</span>
      </div>

      <p class="description">
        {{ descripcio }}
      </p>

      <div class="card-footer">
        <span class="location"><span aria-hidden="true">⌖</span> Barcelona</span>
        <a class="more-link" href="#contacte" :aria-label="'Més informació sobre en ' + nom">
          Coneix-me <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TargetaAnimal',
  props: {
    nom: {
      type: String,
      required: true,
    },
    specie: {
      type: String,
      required: true,
    },
    edat: {
      type: Number,
      required: true,
    },
    descripcio: {
      type: String,
      required: true,
    },
    imatge: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.animal-card {
  width: min(100%, 370px);
  overflow: hidden;
  border: 1px solid #e3eeea;
  border-radius: 1.35rem;
  background: #fff;
  box-shadow: 0 18px 45px rgb(26 72 66 / 10%);
  color: #203b39;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.animal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 55px rgb(26 72 66 / 15%);
}

.photo-wrap {
  position: relative;
  height: 245px;
  overflow: hidden;
  background: #dcece6;
}

.animal-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 43%;
}

.status {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.45rem 0.8rem;
  border: 1px solid rgb(255 255 255 / 65%);
  border-radius: 999px;
  background: rgb(244 251 248 / 94%);
  color: #17645f;
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.02em;
}

.animal-info {
  padding: 1.35rem 1.45rem 1.2rem;
}

.animal-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.species {
  margin: 0 0 0.2rem;
  color: #56817a;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.04em;
}

h2 {
  margin: 0;
  color: #173f3c;
  font-size: 1.75rem;
  font-weight: 760;
  letter-spacing: -0.045em;
  line-height: 1.2;
}

.age {
  flex: 0 0 auto;
  padding: 0.45rem 0.7rem;
  border-radius: 0.7rem;
  background: #edf7f2;
  color: #386c62;
  font-size: 0.78rem;
  font-weight: 650;
}

.description {
  margin: 1rem 0 1.2rem;
  color: #607571;
  font-size: 0.92rem;
  line-height: 1.7;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.95rem;
  border-top: 1px solid #e8f0ed;
}

.location {
  color: #708681;
  font-size: 0.8rem;
}

.location span {
  margin-right: 0.2rem;
  color: #398477;
  font-size: 1rem;
}

.more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #17645f;
  font-size: 0.85rem;
  font-weight: 750;
  text-decoration: none;
}

.more-link span {
  font-size: 1.1rem;
  transition: transform 180ms ease;
}

.more-link:hover span {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .animal-card,
  .more-link span {
    transition: none;
  }
}
</style>
