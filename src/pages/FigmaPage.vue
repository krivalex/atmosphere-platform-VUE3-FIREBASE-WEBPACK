<template>
  <section id="content">
    <div class="game">
      <h1 class="label">Векторный дизайн</h1>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="90%" height="90%"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGPbySHRrCghVYcFdfpeTk6%2F%25D0%259F%25D1%2580%25D0%25BE%25D0%25B1%25D0%25BD%25D1%258B%25D0%25B9-%25D1%2583%25D1%2580%25D0%25BE%25D0%25BA-%25231%3Fnode-id%3D0%253A1%26t%3D3wvbL7FuYfF1jrU8-1"
        allowfullscreen></iframe>
      <button @click="showModel1">
        Проект "Пейзаж"
      </button>
    </div>
    <my-modal v-model:show="model1">
      <div class="all_modal">
        <img class="logo" src="@/assets/white-logo.png" alt="logo" />
        <img class="close-button" src="@/assets/close.png" @click="showModel1" alt="close" />

        <div class="info">
          <h1>Задание 1: </h1>
          <ol>
            <li>Открыть проект</li>
            <li>Положить кирку маленькую тележку, а ящик в большую тележку</li>
            <li>Экспортировать 3D</li>
            <li>Открыть с помощью Paint 3D</li>
          </ol>

        </div>

        <div class="add_action">
          <button @click="redirectToFigmaOne" class="redirect_button">Перейти к заданию</button>
        </div>
      </div>

    </my-modal>

  </section>
</template>

<script>
import MyModal from '@/components/UI/MyModal.vue';
export default {
  name: 'figma-page',
  methods: {
    redirectToFigmaOne() {
      window.open('https://www.figma.com/file/GPbySHRrCghVYcFdfpeTk6/%D0%9F%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9-%D1%83%D1%80%D0%BE%D0%BA-%231?node-id=0%3A1&t=z1vzYkEyUOWZs93F-1', '_blank');
      localStorage.setItem('figma_design_1', true)
    },
  },
  data() {
    return {
      model1: false,
    }
  },
  components: {
    MyModal,
  },
}

</script>

<style>
#content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
  padding: 0 10px;
  background-color: #e0e0e0;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #e0e0e0;
}

.label {
  font-size: 50px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
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
  margin-bottom: 15px;
}

.all_modal {
  position: relative;
  max-width: 400px;
}

.close-button {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 105%;
  right: -18%;
  cursor: pointer;
  z-index: 1000;
  filter: hue-rotate(240deg);
}

.info {
  padding: 20px;
}

.info h1 {
  font-size: 40px;
  font-weight: 600;
  color: #fbd631;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
}

.info ol li {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}

.redirect_button {
  width: 80%;
  height: 50px;
  border-radius: 30px;
  font-size: 30px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-decoration: none;
  border: 0px;
  background-color: #fbd631;
  margin: 0 auto;
}

.redirect_button:hover {
  box-shadow: 0 0 20px #fbd631;
}

.add_action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  left: 20px;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
