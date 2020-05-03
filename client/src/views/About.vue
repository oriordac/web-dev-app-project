<template>
  <div class="about">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About
          </h1>
          <h2 class="subtitle">
            Mission Statement and Design Team
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <!--First Column -->
        <div class="column is-half">

          <div class="notification">
            <h1 class="title">Mission Statement</h1>
            <p class="content">
              <em>Bewegen</em> is the German verb for "to move." Our mission at <em>Bewegen</em> is to inspire our user to 
              exercise in the most German way possible - hiking! According to DW, a German newspaper, "Hiking, or <em>Wandern</em> in German, 
              is the most popular outdoor activity in the country, with 68 percent of Germans every year hitting an extensive 
              200,000-kilometer (125,000-mile) trail network. In all, Germans hike 370 million times per year."
            </p>
          </div>

          <div class="notification">
            <div class="columns">

              <div class="column is-half">
                <h1 class="title">Design Team</h1>
                <div class="content">
                  <b>Lead Designer</b>: Conor O'Riordan
                  <br>
                  <b>Mentor</b>: Rabbi Moshe Plotkin
                </div>
              </div>

              <div class="column is-half">
                <h2 class="title">Special thanks to:</h2>
                <ul>
                  <li>Megan Schmidt</li>
                  <li>Michael Parish</li>
                  <li>Ron Butironi</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <!--Second Column with Features-->
        <div class="column is-half">
          <div class="box">
            <h1 class="title">Features</h1>
            <!--Subcolumn containing feature cards-->
            <div class="columns is-multline">
              <div class="column" v-for="feature in features" :key="feature.ID">

                <div class="container has-text-centered">
                  <h2 class="subtitle">
                    <div class="icon is-large">
                      <i :class="feature.icon"></i>
                    </div>
                    <br>
                    {{feature.title}}
                  </h2>
                </div>

              </div>
            </div>

          </div>
        </div>

    </div>
      
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    features: [
      {
        ID: 0,
        icon: "fas fa-dumbbell",
        title: "Routines"
      },
      {
        ID: 1,
        icon: "fas fa-users",
        title: "Hiking Community"
      },
      {
        ID: 2,
        icon: "fas fa-tint",
        title: "Liquid Tracker"
      },
      {
        ID: 3,
        icon: "fas fa-apple-alt",
        title: "Calories Tracker"
      },
      {
        ID: 4,
        icon: "fas fa-cloud-sun",
        title: "Local Weather"
      },
    ]
  })
}
</script>
