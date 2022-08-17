<template>
    <div class="container" style="background-color: #FFFFFF; width: 624px; height: 700px;">
        <div class="date text-end">{{ date }}</div>
        <h1 class="day text-center">{{ day }} Attendance</h1>
        <div>
          <div>
            <h4 class="title mb-3 mt-3">Campus Students:-</h4>
            <h5 class="mb-3">Brothers: {{ cambro }}</h5>
            <h5 class="mb-3">Sisters: {{ camsis }}</h5>
            <h5 class="title mb-3">Total Campus Students: {{ students }}</h5>
          </div>
          <div>
            <h4 class="title mb-3">Staff:-</h4>
            <h5 class="mb-3">Brothers: {{ staffbro }}</h5>
            <h5 class="mb-3">Sisters: {{ staffsis }}</h5>
            <h5 class="title mb-3">Total Staff: {{ staff }}</h5>
          </div>
          <div>
            <h2 class="title mb-3">Children:-</h2>
            <h5 class="mb-3">Boys: {{ childboys }}</h5>
            <h5 class="mb-3">Girls: {{ childgirls }}</h5>
            <h5 class="title mb-3">Total Children: {{ children }}</h5>
          </div>
          <div>
            <h3 class="titles mb-3 text-center">Total Brothers: {{ brothers }}</h3>
            <h3 class="titles mb-3 text-center">Total Sisters: {{ sisters }}</h3>
            <h3 class="titles mb-3 text-center">Grand Total: {{ total }}</h3>
          </div>
          <div class="justify-content-end">
            <button class="btn btn-primary" style="margin-left: 496px;">Print</button>
          </div>
        </div>
    </div>
</template>

<style scoped>
  .date{
    font-size: large;
    font-weight: 600;
  }
  .day{
    font-size: x-large;
    font-weight: 700;
  }
  .title {
    font-size: large;
    font-weight: 500;
  }
  .titles{
    font-size: x-large;
    font-weight: 700;
  }
</style>

<script>
export default {
    computed: {
    store(){
      return this.$store.state
    },
    date(){
       return this.$store.state.date
    },
    day(){
        return this.$store.state.day
    },
    cambro(){
      return this.$store.state.cambro
    },
    camsis(){
      return this.$store.state.camsis
    },
    staffbro(){
      return this.$store.state.staffbro
    },
    staffsis(){
      return this.$store.state.staffsis
    },
    childboys(){
      return this.$store.state.childboys
    },
    childgirls(){
      return this.$store.state.childgirls
    },
    students(){
      return this.$store.state.cambro + this.$store.state.camsis
    },
    staff(){
      return this.$store.state.staffbro + this.$store.state.staffsis
    },
    children(){
      return this.$store.state.childboys + this.$store.state.childgirls
    },
    brothers(){
      return this.$store.state.cambro + this.$store.state.staffbro + this.$store.state.childboys
    },
    sisters(){
      return this.$store.state.camsis + this.$store.state.staffsis + this.$store.state.childgirls
    },
    total(){
      return this.brothers + this.sisters
    }
  }
}
</script>
