<template>
    <section class="container">
        <div>
            <h1 class="post__title" v-html="post.title"></h1>
            <div class="post__content" v-html="post.content"></div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  validate ({ params }) {
    return isNaN(params.slug)
  },
  asyncData ({ store, params }) {
    console.log(store.getters.getPostBySlug)
    return axios.get(`http://localhost:3000/md/${params.slug}.md`)
      .then((res) => {
        let post = store.getters.getPostBySlug(params.slug)
        return {
          post: {
            id: post.id,
            title: post.title,
            content: marked(res.data, {sanitize: true})
          }
        }
      })
      .catch((err) => {
        console.log({message: 'Something went wrong', statusCode: err})
      })
  }
}
</script>
