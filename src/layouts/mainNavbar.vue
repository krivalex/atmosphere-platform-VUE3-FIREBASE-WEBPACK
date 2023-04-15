<template>
  <div class="navbar">
    <h3 class="version">beta 1.7.2</h3>
    <h1 class="atmos">Atmosphere Education</h1>
  </div>
</template>

<script>
export default {
  name: 'mainNavbar',
}
</script>

<style>
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
</style>
