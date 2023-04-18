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
  }
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
</style>
