<template>
  <div class="home">
    <Header />
    <IncomeSummit />
    <ExpenseSummit />
    <TableForm />
  </div>
</template>

<script>
// @ is an alias to /src


import Header from '@/components/Header.vue'
import IncomeSummit from '@/components/IncomeSummit.vue'
import ExpenseSummit from '@/components/ExpenseSummit.vue'
import TableForm from '@/components/TableForm.vue'

export default {
  name: 'Home',
  components: {
    Header,
    IncomeSummit,
    ExpenseSummit,
    TableForm
    
  }
}
</script>

