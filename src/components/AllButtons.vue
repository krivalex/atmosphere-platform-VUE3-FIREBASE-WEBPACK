<template>
  <div class="all-buttons">
    <div class="button_next">
      <router-link to="/turtle">
        <button id="turtle" class="stage">Рисовать</button>
      </router-link>
      <router-link to="/test">
        <button id="test" class="stage">Пройти тест еще раз</button>
      </router-link>
      <router-link to="/site">
        <button id="site" class="stage">Создать сайт</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'all-buttons',
}
</script>

<style scoped>
.all-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.button_next {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.stage {
  width: 200px;
  height: 50px;
  margin: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.stage:hover {
  background-color: #000000;
  color: #ffffff;
}

#turtle {
  background-color: #000000;
  color: #ffffff;
}

#turtle:hover {
  background-color: #70f789;
  color: #000000;
}

#test {
  background-color: #000000;
  color: #ffffff;
}

#test:hover {
  background-color: #5f96f4;
  color: #000000;
}

#site {
  background-color: #000000;
  color: #ffffff;
}

#site:hover {
  background-color: #f34646;
  color: #000000;
}

@media screen and (max-width: 768px) {
  .button_next {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
