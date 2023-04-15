<template>
  <footer>
    <div class="footer">
      <p>© 2023 Atmosphere Education</p>
      <h3 class="version2">@krivalex</h3>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'mainFooter'
}
</script>

<style>
.footer {
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

.version2 {
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 10px;
}
</style>
