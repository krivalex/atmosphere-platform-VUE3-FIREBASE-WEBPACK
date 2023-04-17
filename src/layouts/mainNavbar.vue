<template>
  <div class="navbar">
    <h3 class="version">beta 1.7.2</h3>
    <div class="label">
      <h1 class="atmos">Atmosphere</h1>
      <h1 class="atmos">Education</h1>
    </div>
    <div class="nav">
      <router-link class="link" to="/present" @click="addPresent">
        <button class="btn third" id="present">Материал</button>
      </router-link>
      <router-link class="link" id="test" to="/test" @click="addTest">
        <button class="btn third">Тест</button>
      </router-link>
      <router-link class="link" id="turtle" to="/turtle" @click="addTurtle">
        <button class="btn third">Рисовать кодом</button>
      </router-link>
      <router-link class="link" id="site" to="/site" @click="addSite">
        <button class="btn third">Создать сайт</button>
      </router-link>
      <div class="link" id="design3d" @click="design3D">
        <button class="btn third">3D-дизайн</button>
      </div>
      <div class="link" id="scratch" @click="scratchOpen">
        <button class="btn third">Scratch</button>
      </div>
      <div class="link" id="figma" @click="figmaOpen">
        <button class="btn third">Figma</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainNavbar',
  methods: {
    design3D() {
      window.open('https://www.tinkercad.com/join', '_blank');
      localStorage.setItem('design3D', true)
    },
    scratchOpen() {
      window.open('https://scratch.mit.edu/projects/editor/', '_blank');
      localStorage.setItem('scratch', true)
    },
    figmaOpen() {
      window.open('https://www.figma.com/?fuid=', '_blank');
      localStorage.setItem('figma', true)
    },
    addPresent() {
      localStorage.setItem('present', true)
    },
    addTest() {
      localStorage.setItem('test', true)
    },
    addTurtle() {
      localStorage.setItem('turtle', true)
    },
    addSite() {
      localStorage.setItem('site', true)
    }
  }

}
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  height: 10vh;
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

.atmos {
  color: transparent;
  background-image: linear-gradient(90deg, rgb(255, 0, 0), rgb(248, 145, 0), rgb(255, 255, 0), rgb(43, 243, 43), rgb(20, 243, 243), rgb(83, 31, 236), rgb(243, 55, 202));
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300px 300px;
  background-position: 0 0;
  animation: bp 2s infinite linear;
  font-size: 25px;
  text-align: center;
}

@keyframes bp {
  from {
    background-position-x: 0px;
  }

  to {
    background-position-x: 300px;
  }
}

.logo {
  height: 100px;
}

.version {
  color: #000000;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  overflow: hidden;
}

.label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  max-width: 150px;
  text-align: center;
  max-height: 50px;
  margin-right: 10px;
}


.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 0.6em 1.4em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  max-width: 150px;
  max-height: 50px;
  min-width: 150px;
  min-height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover,
.btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.third:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  color: black;
}

@media screen and (max-width: 768px) {
  .navbar {
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .nav {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    max-height: 20vh;
    padding: 20px 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

  }

  .link {
    margin: 0 10px;
  }

  .btn {
    margin: 10px 0;
  }
}

@media screen and (max-width: 1280px) {
  .navbar {
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  .nav {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    max-height: 20vh;
    padding: 20px 10px;
    overflow: scroll;
    width: 100%;

  }

  .link {
    margin: 0 10px;
  }

  .btn {
    margin: 10px 0;
  }

}
</style>
