<template>
   <div class="tab">
        <div class="total-income">{{ allIncome()-allExpense() }} Baht</div>
        <table>
            <thead>
                <tr>
                    <th>ประเภท</th>
                    <th>รายการ</th>
                    <th>จำนวน</th>
                    <th>วัน</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(income, index) in income" :key="index" class="income">
                    <td>{{income.type}}</td>
                    <td>{{income.text}}</td>
                    <td>{{income.number}}</td>
                    <td>{{income.date}}</td>
                    
                </tr>
                <tr v-for="(expense, index) in expense" :key="index" class = "expense">
                    <td>{{expense.type}}</td>
                    <td>{{expense.text}}</td>
                    <td>{{expense.number}}</td>
                    <td>{{expense.date}}</td>
                    
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import ExpenseStore from '@/store/expense'
import IncomeStore from '@/store/income'
export default {
    data() {
        return {
            income: [],
            expense: []
        }
    },
    created(){
        this.fetchincome(),
        this.fetchexpense()
    },
    methods: {
        fetchincome() {
            IncomeStore.dispatch("fetchIncome")
            this.income = IncomeStore.getters.income
            
        },
        fetchexpense() {
            ExpenseStore.dispatch("fetchExpense")
            this.expense = ExpenseStore.getters.expense
        },

        allIncome() {
        let total = 0
            for(let i=0; i<this.income.length; i++){

                if(this.income[i].number != ""){
                    total += parseInt(this.income[i].number)
                }
                
            }
            return total
        },
        allExpense() {
            let total2 = 0
                for(let i=0; i<this.expense.length; i++){

                    if(this.expense[i].number != ""){
                        total2 += parseInt(this.expense[i].number)
                    }
                    
                }
                return total2
            }
        },

        allTotal() {
            let total3 = 0
            total3 = allIncome()-allExpense()

            return total3
        }
    }

</script>

<style>
thead{
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #0d1822;
    color: #FFF;
    font-size: 28px;
    font-weight: 900;
    padding: 5px 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    
}

.income{
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #388edd;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  
}

.expense{
     font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #d51212;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
   
}
table{
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    height: 20%;
    width: 45%;
}

.total-income{
    
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #388edd;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    width: 8%;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -270px;
    left: 1600px;
}


  
</style>