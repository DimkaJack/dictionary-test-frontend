<template>
  <div>
    <div class="min-h-screen bg-gray-100">

      <header class="w-full mt-5 text-gray-700 bg-white border-b border-gray-100 shadow-sm body-font">
        <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
          <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <router-link to="/ru" class="mr-5 font-medium hover:text-gray-900">Русский</router-link>
            <router-link to="/es" class="mr-5 font-medium hover:text-gray-900">Español</router-link>
            <router-link to="/ru/api" class="mr-5 font-medium hover:text-gray-900">Translate Word</router-link>
          </nav>
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <div class="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
          <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
              <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                <div>
                  <slot name="headerslot" >
                    <p class="text-xl font-bold text-gray-900">Header</p>
                  </slot>
                </div>
              </div>
              <div class="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                <div class="pt--10 pr-0 pb-10 pl-0">
                  <slot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped>

</style>
