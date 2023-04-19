<template>
  <section id="site">
    <iframe height="100%" style="width: 100%;" scrolling="no" title="Atmosphere-trial"
      src="https://codepen.io/alekseikrivoborodov/embed/preview/bGmpMmb?default-tab=html%2Cresult&editable=true&theme-id=dark"
      frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/alekseikrivoborodov/pen/bGmpMmb">
        Atmosphere-trial</a> by Alexey (<a href="https://codepen.io/alekseikrivoborodov">@alekseikrivoborodov</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </section>
</template>

<script>

export default {
  name: 'site-trial',

  unmounted() {
    let timer_end = new Date().getTime();
    this.timer = Number(this.timer)
    if (this.timer === 0) {
      localStorage.setItem('site_timer', 0);
    }
    this.timer = this.timer + Number(timer_end) - Number(this.timer_start);
    if (Number(localStorage.getItem('site_timer')) >= Number(this.timer) || localStorage.getItem('site_timer') == 0) {
      localStorage.setItem('site_timer', this.timer);
    }
    else {
      localStorage.setItem('site_timer', this.timer)
    }


  },
  data() {
    return {
      timer_start: new Date().getTime(),
      timer: localStorage.getItem('site_timer') ? localStorage.getItem('site_timer') : 0,
    };
  },
}
</script>

<style scoped>
#site {
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
  #site {
    padding: 0px;
  }

}
</style>
