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
            :color="social.name === 'facebook' ? colorFB : colorLDN"
            @click="goTo(social.url)"
            @mouseenter="social.name === 'facebook' ? colorFB = '#4267B2' : colorLDN = '#2867B2'"
            @mouseleave="social.name === 'facebook' ? colorFB = 'grey' : colorLDN = 'grey'"
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
    <v-footer app absolute class="grey darken-2" height="50" elevation="5">
      <div class="white--text">...</div>
    </v-footer>
  </nav>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    NDactive: false,
    colorFB: 'grey',
    colorLDN: 'grey',
    links: [
      { icon: 'fa-hand-holding-usd', title: 'Externalisation de la paie', to: '/paie' },
      { icon: 'fa-handshake', title: 'Interim paie', to: '/interim' },
      { icon: 'mdi-calendar-check', title: 'Formation', to: '/formation' },
      { icon: 'mdi-comment-search-outline', title: 'Conseil et Gestion', to: '/conseil' },
      { icon: 'mdi-account-box', title: 'Contact', to: '/contact' }
    ],
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
