<template>
  <div class="liquid">
      <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <span class="icon">
                <i class="fas fa-tint"></i>
            </span>
            Daily Liquid Intake
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column is-half">
                <div class="notification">
                    <h1 class="title">Stay thirsty, my friends</h1>
                    <p class="content">
                        You should be drinking eight cups of water daily - roughly half a galon.
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="container">
                    <div class="notification is-info">
                        <h1 class="title is-1 has-text-centered">{{ count }} oz</h1>
                    </div>
                </div>
            </div>
        </div>
        <progress class="progress" :value="count" max="64"></progress>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column" @click="add8">
                <div class="box button is-info is-rounded has-text-centered">
                    8 oz.
                </div>
            </div>
            <div class="column" @click="add16">
                <div class="box button is-info is-rounded has-text-centered">
                    16 oz.
                </div>
            </div>
            <div class="column" @click="add32">
                <div class="box button is-info is-rounded has-text-centered">
                    32 oz.
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data: () => ({
        count: 0
    }),
    methods: {
        add8() {
            this.count += 8;
        },
        add16() {
            this.count += 16;
        },
        add32() {
            this.count += 32;
        }
    }
}
</script>

<style>

</style>