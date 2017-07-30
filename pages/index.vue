<template>
  <section class="container">
    <div>
      <h1 class="title">
        cornetopia
      </h1>
      <h2 class="subtitle">
        corntoole's little corner of the web
      </h2>
      <div class="links">
        <a href="https://twitter.com/corntoole" target="_blank" class="button--green">Twitter</a>
        <a href="https://github.com/corntoole" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div class="links">
        <ul>
          <li v-for="post in posts">
            <a :href="post.slug" target="_blank"> {{ post.title }} </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'posts'
  ])
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
