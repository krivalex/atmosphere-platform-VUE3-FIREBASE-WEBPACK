<template>
  <section id="home">
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/bg.mp4" type="video/mp4">
    </video>

    <div class="content">
      <div class="label">
        <h1>Пробный урок</h1>
        <h2>Atmosphere Education</h2>
      </div>

      <div class="inputs">
        <my-input v-model="name" @input="nameInput" placeholder="Ваше имя"></my-input>
        <my-input v-model="age" @input="ageInput" placeholder="Сколько вам лет?"></my-input>
      </div>

      <div v-if="name && age">
        <router-link to="/test">
          <button class="stage">Начать</button>
        </router-link>
      </div>

    </div>

  </section>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue'
export default {
  name: 'first-view',
  components: {
    MyInput
  },
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    nameInput(event) {
      this.name = event.target.value
      localStorage.setItem('name', this.name)
    },
    ageInput(event) {
      this.age = event.target.value
      localStorage.setItem('age', this.age)
    }
  }
}
</script>

<style scoped>
#home {
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
  background-image: url("@/assets/bg.mp4");
  overflow: hidden;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  background-color: #000000;
  padding: 20px;
  border-radius: 20px;
  border: 4px solid #000000;
}

.label {
  font-size: 30px;
}

.label h2 {
  color: transparent;
  background-image: linear-gradient(90deg, rgb(255, 0, 0), rgb(248, 145, 0), rgb(255, 255, 0), rgb(43, 243, 43), rgb(20, 243, 243), rgb(83, 31, 236), rgb(243, 55, 202));
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300px 300px;
  background-position: 0 0;
  animation: bp 2s infinite linear;
  font-size: 35px;
}

@keyframes bp {
  from {
    background-position-x: 0px;
  }

  to {
    background-position-x: 300px;
  }
}

::-webkit-input-placeholder {
  color: rgb(0, 0, 0);
  font-size: 20px;
}

.stage {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #4b0342;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 30px;
  margin-top: 20px;
}
</style>
