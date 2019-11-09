<template>
  <nav>
    <!-- TOP BAR -->
    <v-app-bar app v-if="!$vuetify.breakpoint.xsOnly">
      <!-- Home button (Anaxos logo with 'accueil' tooltip)-->
      <v-tooltip right dark color="grey lighten-2">
        <template v-slot:activator="{ on }">
          <router-link to="/">
            <v-img src="../../public/pictures/logo.png" max-width="40" v-on="on"></v-img>
          </router-link>
        </template>
        <span class="black--text">Accueil</span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <!-- navigation bar -->
      <v-btn
        v-for="(link, id) in links" :key="id"
        :large="$vuetify.breakpoint.xlOnly"
        :small="$vuetify.breakpoint.mdOnly"
        :x-small="$vuetify.breakpoint.smAndDown"
        height="100%"
        text
        :color="id === 1 ? 'error' : ''"
        router
        :to="link.to"
      >
        {{ link.title }}
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- TOP BAR (small device only) -->
    <!-- <v-app-bar app v-else flat elevated-on-scroll color="grey lighten-3"> -->
      <v-btn
        v-else
        fixed
        fab elevation="5" small
        class="ma-1"
        color="grey lighten-2"
        @click="NDactive = !NDactive"
      >
        <v-icon color="grey darken-1">mdi-menu</v-icon>
      </v-btn>
    <!-- </v-app-bar> -->

    <!-- SIDE BAR (small device only) -->
    <v-navigation-drawer app v-model="NDactive" v-if="$vuetify.breakpoint.xsOnly">
        <v-row class="my-6 mx-0" justify="center">
          <!-- Home button (Anaxos logo with 'accueil' tooltip)-->
          <v-tooltip bottom dark color="grey lighten-2">
            <template v-slot:activator="{ on }">
              <router-link to="/">
                <v-img src="../../public/pictures/logo.png" width="100" v-on="on"></v-img>
              </router-link>
            </template>
            <span class="black--text">Accueil</span>
          </v-tooltip>
        </v-row>
        <!-- side navigation bar -->
        <v-row class="ma-0">
          <v-list>
            <v-divider></v-divider>
            <v-list-item
              v-for="(link, id) in links" :key="id"
              link
              router :to="link.to"
            >
              <v-list-item-icon>
                <v-icon
                  :small="link.icon.includes('fa')"
                  :color="id === 1 ? 'error' : ''"
                >
                  {{ link.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content class="ml-n3">
                <v-list-item-title
                  :class="id === 1 ? 'error--text' : ''"
                >
                  {{ link.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>

      <!-- navigation footer -->
      <template v-slot:append>
        <v-divider></v-divider>
        <v-row class="mx-0 my-1" justify="center">
          <v-icon
            v-for="(social, id) in socials" :key="id"
            large
            :color="social.name === 'facebook' ? f_colorFB : f_colorLDN"
            @click="goTo(social.url)"
            @mouseenter="social.name === 'facebook' ? f_colorFB = '#4267B2' : f_colorLDN = '#2867B2'"
            @mouseleave="social.name === 'facebook' ? f_colorFB = 'grey' : f_colorLDN = 'grey'"
          >
            {{ social.icon }}
          </v-icon>
        </v-row>
        <v-row class="mx-0 my-1" justify="center">
          <!-- <v-icon small color="grey darken-1">mdi-copyright</v-icon> -->
          <span class="caption grey--text text--darken-1 pr-1">&copy; Anaxos 2019</span>
        </v-row>
      </template>
    </v-navigation-drawer>

    <!-- FOOTER BAR -->
    <v-footer app absolute class="grey darken-2 pa-0" elevation="5">
      <v-container fluid class="white--text">
        <v-row align="start" justify="center">
          <!-- COPYRIGHT COLUMN -->
          <v-col cols="10" sm="4" md="3" lg="2" class="mt-1 mb-n1">
            <v-img src="../../public/pictures/logo-white-rounded.png" contain max-height="150px"></v-img>
            <div class="text-center mt-1 mb-n1">&copy; ANAXOS 2019</div>
          </v-col>
          <!-- SOCIAL NETWORK COLUMN -->
          <v-col cols="10" sm="4" md="3" lg="2">
            <!-- social title -->
            <div>SUIVEZ-NOUS</div>
            <v-divider dark class="mt-1 mb-n1"></v-divider>
            <!-- facebook (icon + text) -->
            <v-row class="mt-3 pt-3" align="start">
              <v-col cols="2" class="py-0">
                <v-btn
                  icon small
                  @mouseenter="colorFB = 'error'"
                  @mouseout="colorFB = 'white'"
                  target="_blank"
                  :href="socials[0].url"
                >
                  <v-icon :color="colorFB">mdi-facebook-box</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" class="py-0 text-justify">
                <a
                  :class="colorFB + '--text link'"
                  @mouseenter="colorFB = 'error'"
                  @mouseout="colorFB = 'white'"
                  target="_blank"
                  :href="socials[0].url"
                >
                  Facebook
                </a>
              </v-col>
            </v-row>
            <v-divider dark class="mt-1 mb-n1"></v-divider>
            <!-- linkedin (icon + text) -->
            <v-row class="pt-2 pb-0">
              <v-col cols="2" class="py-0">
                <v-btn
                  icon small
                  @mouseenter="colorLDN = 'error'"
                  @mouseout="colorLDN = 'white'"
                  target="_blank"
                  :href="socials[1].url"
                >
                  <v-icon :color="colorLDN">mdi-linkedin-box</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" class="py-0">
                <a
                  :class="colorLDN + '--text link'"
                  @mouseenter="colorLDN = 'error'"
                  @mouseout="colorLDN = 'white'"
                  target="_blank"
                  :href="socials[1].url"
                >
                  LinkedIn
                </a>
              </v-col>
            </v-row>
          </v-col>
          <!-- CONTACT COLUMN -->
          <v-col cols="10" sm="4" md="3" lg="2">
            <!-- contact title -->
            <div>CONTACT / INFO</div>
            <v-divider dark class="mt-1 mb-n1"></v-divider>
            <!-- telephone (icon + text) -->
            <v-row class="mt-3 pt-3">
              <v-col cols="2" class="py-0">
                <v-btn
                  icon small
                  @mouseenter="colorTel = 'error'"
                  @mouseout="colorTel = 'white'"
                  href="tel:+33610840808"
                >
                  <v-icon :color="colorTel">mdi-phone</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" class="py-0">
                <a
                  :class="colorTel + '--text link'"
                  @mouseenter="colorTel = 'error'"
                  @mouseout="colorTel = 'white'"
                  href="tel:+33610840808"
                >
                  06 10 84 08 08
                </a>
              </v-col>
            </v-row>
            <v-divider dark class="mt-1 mb-n1"></v-divider>
            <!-- email (icon + text) -->
            <v-row class="pt-2 pb-0">
              <v-col cols="2" class="py-0">
                <v-btn
                  icon small
                  @mouseenter="colorMail = 'error'"
                  @mouseout="colorMail = 'white'"
                  href="mailto:bruno.adda@gmail.com"
                >
                  <v-icon :color="colorMail">mdi-email</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" class="py-0">
                <a
                  :class="colorMail + '--text link'"
                  @mouseenter="colorMail = 'error'"
                  @mouseout="colorMail = 'white'"
                  href="mailto:bruno.adda@gmail.com"
                >
                  bruno.adda@gmail.com
                </a>
              </v-col>
            </v-row>
            <v-divider dark class="mt-1 mb-n1"></v-divider>
            <!-- adresse (icon + text) -->
            <v-row class="pt-2 pb-0" align="start">
              <v-col cols="2" class="py-0">
                <v-btn
                  icon small
                  @mouseenter="colorLoc = 'error'"
                  @mouseout="colorLoc = 'white'"
                  target="_blank"
                  :href="linkMaps"
                >
                  <v-icon :color="colorLoc">mdi-map-marker</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" class="py-0 text-justify">
                <a
                  :class="colorLoc + '--text link'"
                  @mouseenter="colorLoc = 'error'"
                  @mouseout="colorLoc = 'white'"
                  target="_blank"
                  :href="linkMaps"
                >
                  18 Rue de Montmorency, 75003 Paris
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </nav>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    NDactive: false,
    colorLoc: 'white',
    colorTel: 'white',
    colorMail: 'white',
    colorFB: 'white',
    colorLDN: 'white',
    f_colorFB: 'grey',
    f_colorLDN: 'grey',
    links: [
      { icon: 'fa-hand-holding-usd', title: 'Externalisation de la paie', to: '/paie' },
      { icon: 'fa-handshake', title: 'Interim paie', to: '/interim' },
      { icon: 'mdi-calendar-check', title: 'Formation', to: '/formation' },
      { icon: 'mdi-comment-search-outline', title: 'Conseil et Gestion', to: '/conseil' },
      { icon: 'mdi-account-box', title: 'Contact', to: '/contact' }
    ],
    linkMaps: 'https://www.google.com/maps/place/Anaxos-Spectacles.com/@48.8633171,2.3427975,14.08z/data=!4m5!3m4!1s0x47e66e1b2e585cc7:0x7542c13dcf732ffa!8m2!3d48.8630698!4d2.355794',
    socials: [
      { name: 'facebook', icon: 'mdi-facebook-box', url: 'https://www.facebook.com/anaxos18/?ref=bookmarks' },
      { name: 'linkedin', icon: 'mdi-linkedin-box', url: 'https://www.linkedin.com/in/bruno-adda-50759172/' }
    ]
  }),
  methods: {
    goTo (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
