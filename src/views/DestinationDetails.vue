<template>
  <div>
    <section class="destination">
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
        <p>{{destination.description}}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div v-for="experience in destination.experiences" :key="experience.slug" class="card">
          <router-link :to="{name: 'experienceDetails', params: {experienceSlug: experience.slug}}">
            <div class="card__disappearer">
              <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
              <span class="card__text">{{experience.name}}</span>
            </div>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  // data() {
  //   return {
  //     slug: this.$route.params.slug,
  //   }
  // },

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  computed: {
    destination() {
      return store.destinations.find(destination => {
        return destination.slug === this.slug;
      });
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.destination img {
  margin-left: 20px;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0px 20px 0px 40px;
  font-size: 20px;
  text-align: justify;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.cards img {
  max-height: 200px;
}

.card {
  padding: 0px 20px;
  position: relative;
}

.card__disappearer {
  opacity: 0.7;
}

.card__disappearer:hover {
  opacity: 1;
}

.router-link-active .card__disappearer {
  opacity: 1;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
}
</style>