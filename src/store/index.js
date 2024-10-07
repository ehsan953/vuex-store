import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [], // Only focusing on fetching and displaying these items
    users:[]
  },
  getters: {
    getItems(state) {
      return state.items; // Getter to access the items in components
    },
    getUsers(state){
      return state.users;
    }
  },
  mutations: {
    SetItems(state, items) {
      state.items = items // Mutating the state to set the fetched items
    },
    SetUsers(state, users){
      state.users = users
    }
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('SetItems', response.data) // Commit fetched data to the state
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    async fetchUsers({commit}){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SetUsers',response.data)
      }
      catch(error){
        console.error("Error",error)
      }
    }
  }
})
