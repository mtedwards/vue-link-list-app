<template>
  <div id="app">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Awesome Links
          </h1>
          <h2 class="subtitle">
            and some other things...
          </h2>
        </div>
      </div>
    </section>

    <div class="container content">
      <div class="columns">
        <div class="column is-three-quarters">
            <list></list>
        </div>
        <div class="column">
            <Addlink></Addlink>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import List from './components/List'
import Addlink from './components/Addlink'

export default {
  name: 'app',
  components: {
    List,
    Addlink
  }
}
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  $link: black;
  $link-hover: tomato;

  @import "~bulma";
  @import "~buefy/src/scss/buefy";


  .content {
    padding: 1em;
  }
</style>
