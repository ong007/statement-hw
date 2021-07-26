<template>
  <div>
    <div><input type="text" placeholder="Expense Description" v-model="form.text"></div>
    <div><input type="number" placeholder="Expense Value" v-model="form.number"></div>
    <div><input type="date" placeholder="Expense Date" v-model="form.date"></div>
    <div><button @click="addExpense" >SUBMIT</button></div>
  </div>
</template>

<script>
import ExpenseStore from '@/store/expense'
export default {
    data () {
        return{
            form: {
                type: '',
                text: '',
                number: null,
                date: null,
            }
        }
    }, 
    methods: {
        clearForm() {
            this.form = {
                type: '',
                text: '',
                number: null,
                date: null,
            }
        },
        addExpense() {
        let payload2 = {
            type: 'Expense',
            text: this.form.text,
            number: this.form.number,
            date: this.form.date
        }

        console.log(payload2)
        ExpenseStore.dispatch('addExpense', payload2)

        this.clearForm()
    }
    },

    
    

}
</script>

<style scoped>
    div {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
    div input {
    color: #888;
    border: none;
    outline: none;
    font-size: 20px;
  }
    div input::placeholder {
    color: #AAA;
  }
    div input:not([type="submit"]) {
    display: block;
    background: #FFF;
    border: none;
    outline: none;
    padding: 5px 15px;
  }
    button {
    display: block;
    background: none;
    border: none;
    outline: none;
    color: #FFF;
    font-weight: 500;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 5px 15px;
    background-color: #d51212;
    cursor: pointer;
    border-radius: 0px 8px 8px 0px;
  }
    div input:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }
    div input:last-of-type {
    border-radius: 0px 8px 8px 0px;
  }
</style>