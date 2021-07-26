import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },

    getters: {
        income: (state) => state.data,
    },

    mutations: {
        fetch (state, { res }) {
            state.data = res.data
        },
        add (state, { payload}){
            state.data.push(payload)  
        }
    },
    actions: {

        fetchIncome ({ commit }) {

            let res = {
                data: [
                    {
                        type: "Income",
                        text: "เเม่ให้เงิน",
                        number: "100",
                        date: "2020-03-25",
                    }
                ]
            }
            commit('fetch', {res})
        },
       
        addIncome({ commit }, payload){
            commit('add', { payload })
        }

    },
  
    modules: {

    }
})
