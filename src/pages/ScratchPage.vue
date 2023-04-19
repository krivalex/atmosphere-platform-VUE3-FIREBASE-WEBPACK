<template>
  <section id="content">
    <div class="game">
      <h1 class="label">Шарики</h1>
      <iframe src="https://scratch.mit.edu/projects/837069345/embed" allowtransparency="true" width="485" height="402"
        frameborder="0" scrolling="no" allowfullscreen></iframe>
      <button @click="redirectToScratchOne">
        Написать игру "Шарики"
      </button>
    </div>
    <div class="game">
      <h1 class="label">Змейка</h1>
      <iframe src="https://scratch.mit.edu/projects/721021810/embed" allowtransparency="true" width="485" height="402"
        frameborder="0" scrolling="no" allowfullscreen></iframe>
      <button @click="redirectToScratchTwo">
        Написать игру "Змейку"
      </button>
    </div>
    <div class="game">
      <h1 class="label">Кошки-мышки</h1>
      <iframe src="https://scratch.mit.edu/projects/718708399/embed" allowtransparency="true" width="485" height="402"
        frameborder="0" scrolling="no" allowfullscreen></iframe>
      <button @click="redirectToScratchThree">
        Написать игру "Кошки-Мышки"
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'scratch-page',
  unmounted() {
    let timer_end = new Date().getTime();
    this.timer = Number(this.timer)
    if (this.timer === 0) {
      localStorage.setItem('scratch_timer', 0);
    }
    this.timer = this.timer + Number(timer_end) - Number(this.timer_start);
    if (Number(localStorage.getItem('scratch_timer')) >= Number(this.timer) || localStorage.getItem('scratch_timer') == 0) {
      localStorage.setItem('scratch_timer', this.timer);
    }
    else {
      localStorage.setItem('scratch_timer', this.timer)
    }
  },
  methods: {
    redirectToScratchOne() {
      window.open('https://scratch.mit.edu/projects/719344926/editor/', '_blank');
      localStorage.setItem('scratch_game_1', true)
    },
    redirectToScratchTwo() {
      window.open('https://scratch.mit.edu/projects/837078766/editor/', '_blank');
      localStorage.setItem('scratch_game_2', true)
    },
    redirectToScratchThree() {
      window.open('https://scratch.mit.edu/projects/837084242/editor/', '_blank');
      localStorage.setItem('scratch_game_3', true)
    }
  },
  data() {
    return {
      timer_start: new Date().getTime(),
      timer: localStorage.getItem('scratch_timer') ? localStorage.getItem('scratch_timer') : 0
    };
  },
}

</script>

<style scoped>
#content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
  background-color: rgb(232, 237, 241);
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.label {
  font-size: 50px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.game button {
  margin-top: 20px;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #ff2c2c;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 768px) {
  #content {
    flex-direction: column;
    height: 100%;
  }

  .game {
    margin-bottom: 30px;
  }

  .game iframe {
    width: 100%;
  }
}
</style>
