<template>
  <v-container>
    <v-row class="pa-4">
      <v-col>
        <div class="d-flex" style="gap:10px">
          <v-btn @click="ClickUsers" class="pa-4" color="primary">
            Users
          </v-btn>
          <v-btn @click="clicked" class="pa-4" color="primary">
            Posts
          </v-btn>
        </div>
        <div class="py-4" v-show="usersLayout">
          <div v-for="user in users" :key="user.id">
            <div>
              <v-card class="my-2 pa-4">
                <h2>{{user.id}}. {{user.name}}</h2>
                <div>{{user.email}}</div>
                <div><span>Company: </span>{{user.company.name}}</div>
                <div><span>Website: </span>{{user.website}}</div>
              </v-card>
            </div>
          </div>
        </div>
        <v-list v-show="postsLayout">
          <v-list-item v-for="item in items" :key="item.id">
            <v-list-item-content>
              <v-list-item-title>
                <v-row>
                  <v-col cols="1">{{ item.id }}</v-col>
                  <v-col cols="11">{{ item.title }}</v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    // Access items from Vuex store
    items() {
      return this.$store.getters.getItems
    },
    users(){
      return this.$store.getters.getUsers
    }
  },
  mounted() {
    // Dispatch the action to fetch items when the component mounts
    // this.$store.dispatch('fetchItems')
  },
  data(){
    return{
      usersLayout: false,
      postsLayout: false,
    }
  },
  methods:{
    clicked(){
      this.$store.dispatch('fetchItems');
      this.usersLayout = false;
      this.postsLayout = true;
    },
    ClickUsers(){
      this.$store.dispatch('fetchUsers')
      this.postsLayout = false;
      this.usersLayout = true;
    }
  }
}
</script>
