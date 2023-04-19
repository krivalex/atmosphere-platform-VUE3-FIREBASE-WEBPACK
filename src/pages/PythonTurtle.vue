<template>
  <section id="turtle">
    <iframe src="https://trinket.io/embed/python/17f49d1417" width="100%" height="100%" frameborder="0" marginwidth="0"
      marginheight="0" fontsize="20px" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {
  name: 'python-turtle',
  unmounted() {
    let timer_end = new Date().getTime();
    this.timer = Number(this.timer)
    if (this.timer === 0) {
      localStorage.setItem('turtle_timer', 0);
    }
    this.timer = this.timer + Number(timer_end) - Number(this.timer_start);
    if (Number(localStorage.getItem('turtle_timer')) >= Number(this.timer) || localStorage.getItem('turtle_timer') == 0) {
      localStorage.setItem('turtle_timer', this.timer);
    }
    else {
      localStorage.setItem('turtle_timer', this.timer)
    }
  },
  data() {
    return {
      timer_start: new Date().getTime(),
      timer: localStorage.getItem('turtle_timer') ? localStorage.getItem('turtle_timer') : 0
    };
  },
}
</script>

<style scoped>
#turtle {
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  position: relative;
  border: 1px solid #000000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
}

@media screen and (max-width: 768px) {
  #turtle {
    padding: 0px;
  }

}
</style>
