<template>
  <section>
    <h2>Experiences</h2>
    <h3>{{experience.name}}</h3>
    <div class="experience-details">
      <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
      <p>{{experience.description}}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(destination => {
        return destination.slug === this.slug;
      });
    },

    experience() {
      return this.destination.experiences.find(experience => {
        return experience.slug === this.experienceSlug;
      });
    }
  }
};
</script>

<style scoped>
.experience-details {
  display: flex;
  justify-content: space-between;
}

.experience-details img {
  margin-left: 20px;
  min-width: 500px;
}

.experience-details p {
  margin: 0px 20px 0px 40px;
  text-align: justify;

}
</style>