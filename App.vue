<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </section>
  </div>
</template>

<script>
// 引入文件
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
    TodoFooter
  }
};
</script>

<style>
</style>
