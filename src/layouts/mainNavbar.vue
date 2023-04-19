<template>
  <div class="navbar">
    <h3 class="version">beta 2.4.2</h3>
    <div class="label">
      <img src="../assets/logo.png" alt="logo" class="nav-logo">
    </div>
    <div class="nav">
      <router-link class="link" to="/present" @click="addPresent">
        <button class="btn third" :class="{ active: $route.path === '/present' }" id="present">Материал</button>
      </router-link>
      <router-link class="link" id="test" to="/test" @click="addTest">
        <button :class="{ active: $route.path === '/test' }" class="btn third">Тест</button>
      </router-link>
      <router-link class="link" id="turtle" to="/turtle" @click="addTurtle">
        <button :class="{ active: $route.path === '/turtle' }" class="btn third">Рисовать кодом</button>
      </router-link>
      <router-link class="link" id="site" to="/site" @click="addSite">
        <button :class="{ active: $route.path === '/site' }" class="btn third">Создать сайт</button>
      </router-link>
      <router-link class="link" id="design3D" to="/design3D" @click="design3D">
        <button :class="{ active: $route.path === '/design3D' }" class="btn third">3D дизайн</button>
      </router-link>
      <router-link class="link" id="scratch" to="/scratch" @click="scratchOpen">
        <button :class="{ active: $route.path === '/scratch' }" class="btn third">Scratch</button>
      </router-link>
      <router-link class="link" id="figma" to="/figma" @click="figmaOpen">
        <button :class="{ active: $route.path === '/figma' }" class="btn third">Figma</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainNavbar',
  methods: {
    design3D() {
      localStorage.setItem('design3D', true)
    },
    scratchOpen() {
      localStorage.setItem('scratch', true)
    },
    figmaOpen() {
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
  margin: 0 5px;
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
  padding-right: 10px;
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
  margin-top: 15px;
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

.nav-logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  height: 18vh;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .navbar {
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
    width: 100%;
    flex-direction: row;
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

  .nav-logo {
    height: 12vh;
    margin-top: 10px;
  }

  .link {
    margin: 0 10px;
  }

  .btn {
    margin: 10px 0;
  }

}

.active {
  color: #ffffff;
  border-color: #7a2eec;
  box-shadow: 0 0 40px 40px #7a2eec inset, 0 0 0 0 #7a2eec;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
</style>
