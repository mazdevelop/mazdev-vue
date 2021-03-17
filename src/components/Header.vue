<template>
  <div>
    <!-- navbar goes header -->
    <header
      class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"
    >
      <div class="flex-1 flex justify-between items-center">
        <!-- logo -->
        <a href="#" class="text-gray-700 flex items-center">
          <svg
            class="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span class="capitalize text-sm">maz develop</span>
        </a>
      </div>
      <!-- humberger menu -->
      <label for="menu-toggle" class="lg:hidden cursor-pointer">
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </label>
      <input
        type="checkbox"
        name="menu-toggle"
        id="menu-toggle"
        class="hidden"
      />
      <!-- primary nav -->
      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul
            class="lg:flex items-center text-base justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li>
              <router-link
                to="/"
                class="lg:p-4 capitalize py-3 px-0 block border-b-2 text-center border-transparent hover:text-indigo-400"
              >
                home
              </router-link>
            </li>
            <li>
              <router-link
                to="/todo"
                class="lg:p-4 capitalize py-3 px-0 block border-b-2 text-center border-transparent hover:text-indigo-400"
              >
                todo
              </router-link>
            </li>
            <li>
              <router-link
                to="/quote"
                class="lg:p-4 capitalize py-3 px-0 block border-b-2 text-center border-transparent hover:text-indigo-400"
              >
                quote
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>