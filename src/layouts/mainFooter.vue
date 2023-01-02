<template>
  <footer>
    <div class="footer">
      <p>© 2023 Atmosphere Education</p>
    </div>
    <h3 class="version2">@krivalex</h3>
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
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  margin-top: 12px;
  position: relative;
  border: 1px solid #000000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.version2 {
  color: #000000;
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  top: 990px;
  right: 0;
}
</style>
