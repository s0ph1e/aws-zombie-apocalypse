export default {
  name: 'profile',
  data () {
    return {
      searchInput: '',
      searching: false,
      searchResults: {}
    }
  },
  methods: {
    search () {
      if (this.searching) {
        return
      }
      if (!this.searchInput) {
        this.searchResults = {}
        return
      }

      this.searching = true

      this.$http.get(`https://api.github.com/search/users?q=${this.searchInput}`).then(({body}) => {
        console.log(body)
        this.searchResults = body
      }).catch(() => {
        alert('something went wrong')
      }).finally(() => {
        this.searching = false
      })
    }
  }
}
