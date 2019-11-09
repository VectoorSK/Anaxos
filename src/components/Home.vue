<template>
  <v-container fluid>
    <!-- <v-img src="../../public/pictures/logo.png" max-width="50"></v-img> -->
    <h1 class="my-5 text-center">Anaxos</h1>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="8">
        <p class="text-center mx-auto font-italic font-weight-light">
          ANAXOS partenaire depuis plus de 25 ans des structures dédiées au spectacle vivant, audiovisuel, cinéma et évènementielles
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="8">
        <v-carousel
          cycle
          interval="6000"
          height="200"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="i in 5"
            :key="i"
          >
            <v-img src="../../public/pictures/banner.jpg" class="fill-height mx-auto"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- <v-parallax
      dark
      height="150"
      src="../../public/pictures/banner.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax> -->
    <v-row justify="center">
      <v-col cols="12" sm="11" md="8">
        <p class="text-justify my-4 px-5">
          Dans un environnement en constante évolution, DSN, prélèvement à la source (PAS), déclaration des droits d’auteurs, … les
          <span class="font-weight-bold">entreprises culturelles</span> doivent se reposer sur des partenaires fiables, réactifs, proches, avec une connaissance
          approfondie des règles sociales, juridiques, comptables et fiscales.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" sm="11" md="8" lg="7" xl="5">
        <v-list disabled rounded class="mx-auto" color="transparent">
          <v-subheader class="title font-weight-bold black--text">Nos atouts :</v-subheader>
          <v-list-item-group multiple dense v-model="item" color="error">
            <v-list-item
              v-for="(atout, id) in atouts"
              :key="id"
            >
              <v-list-item-icon class="my-auto">
                <v-icon>{{ atout.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-justify ml-n5">
                {{ atout.text }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    atouts: [
      { icon: 'mdi-check-circle-outline', text: 'Expertise du secteur culturel et de la gestion des intermittents' },
      { icon: 'mdi-magnify', text: 'Réactivité, transparence et fiabilité' },
      { icon: 'mdi-currency-eur', text: 'Notre différence : nous nous engageons sur un prix fixe sans facturation d’options additionnelles' }
    ],
    item: [0, 1, 2]
  })
}
</script>
