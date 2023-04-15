<template>
  <section id="presentation">

    <div style="position: relative;
                         width: 100%; height: 100%; 
                           padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
                           border-radius: 8px; will-change: transform;">
      <iframe loading="lazy"
        style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYAS5xkIY&#x2F;view?embed"
        allowfullscreen="allowfullscreen" allow="fullscreen">
      </iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-present',
}
</script>

<style scoped>
#presentation {
  height: 100vh;
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
</style>
