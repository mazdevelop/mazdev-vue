<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <h1 class="text-center">Vue 3 todo app</h1>
    <div
      class="container mx-auto px-4 font-mono bg-white py-8 px-6 shadow rounded-lg sm:px-10"
    >
      <form @submit.prevent class="mb-0 space-y-6">
        <label class="block text-sm text-gray-700" id="todo">New Todo</label>
        <input
          type="text"
          class="block w-full outline-none"
          id="todo"
          v-model="newTodo"
          name="newTodo"
          @keypress.enter="addNewTodo"
          placeholder="Add a new todo..."
        />
        <button
          @click="addNewTodo"
          class="text-center outline-none mx-auto flex hover:text-red-400 focus:outline-none transition delay-150 duration-300 ease-in-out"
        >
          <svg
            class="w-10 h-10 font-thin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>
      <div class="flex justify-between my-4">
        <button @click="markAllDone" class="px-6 py-4">mark all done</button>
        <button @click="removeAllTodos" class="px-6 py-4">
          remove all todos
        </button>
      </div>
      <div v-if="todos.length" class="flex items-center flex-wrap">
        <ul class="" v-for="(todo, index) in todos" :key="todo.id">
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <li class="flex mx-3 my-2 items-center opacity-0">
              <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">
                {{ todo.content }}
              </h3>
              <button @click="removeTodo(index)" class="mx-2 text-red-400">
                -
              </button>
            </li>
          </transition>
        </ul>
      </div>
      <div v-else>
        <p>Woohoo, nothing left todo!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
  setup(props, { emit }) {
    const newTodo = ref("");
    const todos = ref([
      {
        id: Date.now(),
        done: false,
        content: `all design`,
      },
    ]);

    const addNewTodo = () => {
      if (newTodo.value) {
        const id = Date.now();
        const done = false;
        todos.value = [{ id, done, content: newTodo.value }, ...todos.value];
        newTodo.value = "";
      } else {
        emit("bad-value");
      }
    };

    const toggleDone = (todo) => {
      todo.done = !todo.done;
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const markAllDone = () => {
      todos.value.forEach((todo) => (todo.done = true));
    };

    const removeAllTodos = () => {
      todos.value = [];
    };

    const beforeEnter = (el) => {
      gsap.to(el, {
        y: 10,
      });
    };

    const enter = (el) => {
      gsap.to(el, {
        duration: 0.5,
        y: 0,
        delay: 0.3,
        opacity: 1,
      });
    };
    return {
      removeAllTodos,
      markAllDone,
      removeTodo,
      toggleDone,
      newTodo,
      todos,
      addNewTodo,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
