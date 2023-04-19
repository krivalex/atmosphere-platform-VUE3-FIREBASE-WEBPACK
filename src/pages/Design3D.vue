<template>
  <section id="content">
    <div class="game">
      <h1 class="label">Стройка</h1>
      <iframe width="485" height="402" src="https://www.tinkercad.com/embed/eGhtbkLNSqP?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <button @click="showModel1">
        Проект "Стройка"
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
          <button @click="redirectToTinkerOne" class="redirect_button">Перейти к заданию</button>
        </div>
      </div>

    </my-modal>

    <div class="game">
      <h1 class="label">Ендердракон</h1>
      <iframe width="485" height="402" src="https://www.tinkercad.com/embed/f6dxpqcY64u?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <button @click="showModel2">
        Проект "Ендердракон"
      </button>
    </div>
    <my-modal v-model:show="model2">
      <div class="all_modal">
        <img class="logo" src="@/assets/white-logo.png" alt="logo" />
        <img class="close-button" src="@/assets/close.png" @click="showModel2" alt="close" />

        <div class="info">
          <h1>Задание 2: </h1>
          <ol>
            <li>Открыть проект</li>
            <li>Перекрасить глаза эндердракону в желтый</li>
            <li>Перекрасить шипы на спине в разные цвета</li>
            <li>Экспортировать 3D</li>
            <li>Открыть с помощью Paint 3D</li>
          </ol>

        </div>

        <div class="add_action">
          <button @click="redirectToTinkerTwo" class="redirect_button">Перейти к заданию</button>
        </div>
      </div>

    </my-modal>

    <div class="game">
      <h1 class="label">Арена</h1>
      <iframe width="485" height="402" src="https://www.tinkercad.com/embed/cKcSvAZ0low?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <button @click="showModel3">
        Проект "Арена"
      </button>
    </div>
    <my-modal v-model:show="model3">
      <div class="all_modal">
        <img class="logo" src="@/assets/white-logo.png" alt="logo" />
        <img class="close-button" src="@/assets/close.png" @click="showModel3" alt="close" />

        <div class="info">
          <h1>Задание 3: </h1>
          <ol>
            <li>Открыть проект</li>
            <li>Поставить еще одну балку</li>
            <li>Повесить на балку шестеренку</li>
            <li>Сделать то, что придет в голову</li>
            <li>Экспортировать 3D</li>
            <li>Открыть с помощью Paint 3D</li>
          </ol>

        </div>

        <div class="add_action">
          <button @click="redirectToTinkerThree" class="redirect_button">Перейти к заданию</button>
        </div>
      </div>

    </my-modal>

  </section>
</template>

<script>
import MyModal from '@/components/UI/MyModal.vue';
export default {
  name: 'design-3d',
  unmounted() {
    let timer_end = new Date().getTime();
    this.timer = Number(this.timer)
    if (this.timer === 0) {
      localStorage.setItem('design3D_timer', 0);
    }
    this.timer = this.timer + Number(timer_end) - Number(this.timer_start);
    if (Number(localStorage.getItem('design3D_timer')) >= Number(this.timer) || localStorage.getItem('design3D_timer') == 0) {
      localStorage.setItem('design3D_timer', this.timer);
    }
    else {
      localStorage.setItem('design3D_timer', this.timer)
    }
  },
  methods: {
    redirectToTinkerOne() {
      window.open('https://www.tinkercad.com/things/eGhtbkLNSqP', '_blank');
      localStorage.setItem('tinker_design_1', true)
    },
    redirectToTinkerTwo() {
      window.open('https://www.tinkercad.com/things/f6dxpqcY64u-minecraft-enderdragon-minecraft', '_blank');
      localStorage.setItem('tinker_design_2', true)
    },
    redirectToTinkerThree() {
      window.open('https://www.tinkercad.com/things/cKcSvAZ0low-arena-6-clash-royale', '_blank');
      localStorage.setItem('tinker_design_3', true)
    },
    showModel1() {
      this.model1 = !this.model1;
    },
    showModel2() {
      this.model2 = !this.model2;
    },
    showModel3() {
      this.model3 = !this.model3;
    },
  },
  data() {
    return {
      model1: false,
      model2: false,
      model3: false,
      timer: localStorage.getItem('design3D_timer') ? localStorage.getItem('design3D_timer') : 0,
      timer_start: new Date().getTime(),
    }
  },
  components: {
    MyModal,
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
  margin-bottom: 20px;
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

@media screen and (max-width: 768px) {
  #content {
    flex-direction: column;
    height: 100%;
    padding: 0;
  }

  .game iframe {
    max-width: 90vw;
    margin: 0 auto;
  }

  .all_modal {
    width: 90%;
  }

  ol li {
    font-size: 10px;
  }

  .logo {
    top: -20px;
  }

  .info h1 {
    margin-top: 15px
  }

  .redirect_button {
    width: 100%;
    font-size: 20px;
  }


}
</style>
