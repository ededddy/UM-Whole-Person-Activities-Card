new Vue ({
  el: "#app",
  data: {
    activities: null
  },
  mounted () {
    axios({
      url: "https://wrapapi.com/use/ededdy/umwp/news/0.0.2",
      method: 'post',
      data: {
        "wrapAPIKey": "1RpF8AqqGz5fdUrzikjKB8ZD9Qy2RJ0G"
      }
    }).then(response => {
      this.activities = response.data.data.collection
    })
  }
})