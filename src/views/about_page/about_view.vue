<template>
  <h1>about Page</h1>
  <div class="grid-list">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="less" scoped>
h1 {
  background-color: red;
}

.grid-list {
  background-color: greenyellow;
}
.grid-list > div:nth-child(odd) {
  border: 1px solid black;
}
.grid-list > div:nth-child(even) {
  border: 1px solid red;
}
</style>
