import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },

    getters: {
        expense: (state) => state.data,
    },

    mutations: {
        fetch (state, { res }) {
            state.data = res.data
        },
        add (state, { payload2}){
            state.data.push(payload2)  
        }
    },
    actions: {

        fetchExpense ({ commit }) {

            let res = {
                data: [
                    {
                        type: "Expense",
                        text: "ซื้อขนม",
                        number: "50",
                        date: "2020-04-25",
                    }
                ]
            }
            commit('fetch', {res})
        },
       
        addExpense({ commit }, payload2){
            commit('add', { payload2 })
        }

    },
  
    modules: {

    }
})
