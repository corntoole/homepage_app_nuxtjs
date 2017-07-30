import Vuex from 'vuex'
const markdownDir = '~static/md'
const createStore = () => new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        url: `${markdownDir}/2017-06-09-hello-world.md`,
        slug: '2017-06-09-hello-world',
        title: 'Hello NUXT'
      },
      {
        id: 2,
        url: `${markdownDir}/2017-06-10-foo-bar.md`,
        slug: '2017-06-10-foo-bar',
        title: 'Foo Bar'
      }
    ]
  },
  mutations: {
    addPost (state, {url, title}) {
      let id = state.posts.length + 1
      state.posts.push({id, url, title})
    }
  },
  getters: {
    getPostBySlug: (state, getters) => (slug) => {
      let slugRe = new RegExp(slug)
      return state.posts.find(post => slugRe.test(post.url))
    }
  }
})

export default createStore
