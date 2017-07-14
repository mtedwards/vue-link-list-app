<template>
  <div class="">
      <h1 class="title">Links</h1>
      <transition-group name="link-list" tag="div">
        <div class="box" v-for="link in orderedLinks" :key="link['.key']">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <a v-bind:href="link.url" target="_blank">
                  <h3>{{link.title}}</h3>
                  <p>
                    {{link.description}}
                  </p>
                </a>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <span class="level-item">
                    <b>Vote:</b>
                  </span>
                  <a class="level-item" @click="downvote(link)">
                    <i class="material-icons">thumb_down</i>
                  </a>
                  <a class="level-item" @click="upvote(link)">
                    <i class="material-icons">thumb_up</i>
                  </a>
                </div>
                <div class="level-right">
                  <b>Total Votes: {{link.votes}}</b>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </transition-group>

    </div>
</template>

<script>
import {db} from '../firebase';
let linksRef = db.ref('links');

export default {
  name: 'list',
  firebase: {
    links: linksRef
  },
  methods: {
    upvote: function(link) {
      link.votes++
      const linkKey = link['.key'];
      var updates = {};
      updates['/links/' + linkKey + '/votes'] = link.votes;
      db.ref().update(updates);
    },
    downvote: function(link) {

      if( link.votes == 0 ) {
        link.votes
      } else {
        link.votes--
      }

      const linkKey = link['.key'];
      var updates = {};
      updates['/links/' + linkKey + '/votes'] = link.votes;
      db.ref().update(updates);
    }
  },
  computed: {
    orderedLinks: function() {
      return _.orderBy(this.links, 'votes', 'desc')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .link-list-move {
   transition: all 1s ease;
  -webkit-transition: all 1s ease;
 }
</style>
