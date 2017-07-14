<template>
  <div class="panel">
  <h1 class="title">Add Link</h1>
  <form id="addlink" v-on:submit.prevent="addLink">
    <b-field label="Title">
      <b-input v-model="newLink.title"></b-input>
    </b-field>
    <b-field label="URL">
      <b-input v-model="newLink.url" placeholder="URL" type="url"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="newLink.description" maxlength="200" type="textarea"></b-input>
    </b-field>
    <input class="button" type="submit" value="Add Link">
  </form>
    </div>
</template>

<script>
  import {db} from '../firebase';
  let linksRef = db.ref('links')

export default {
  name: 'addlink',
  data () {
    return {
      newLink: {
        title:'',
        url:'',
        description:'',
        votes: 0
      }
    }
  },
  firebase: {
    links: linksRef
  },
  methods: {
    addLink: function() {
      linksRef.push(this.newLink)
      this.newLink.title = ''
      this.newLink.url = ''
      this.newLink.description = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
