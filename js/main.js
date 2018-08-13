const one = {
  template: `<div>
  <h1>San Francisco State University</h1>
  <img src="img/sfsu.jpg">
  <p>A CSU in the city where students come from all places!</p>
  <div>`

}
const two = {
  template: `<div>
  <h1>SF Icon</h1>
  <img src="img/sf-icon.png">
  <p> The letters S and F are sacred in Northern California.</p>
  <div>`
}
const three = {
  template: `<div>
  <h1>San Francisco Bay Bridge</h1>
  <img src="img/sfbridge.jpeg">
  <p> The newly famous remodoled SF Bay Bridge!</p>
  <div>`
}
const four = {
  template: `<div>
  <h1>A Night In The City</h1>
  <img src="img/skyline.jpg">
  <p>A pitoresque beauty SF is to watch during the night. </p>
  <div>`
}
const five = {
  template: `<div>
  <h1>The Original Bay Bridge</h1>
  <img src="img/BB.jpeg">
  <p> The famous original red Bay Bridge lives forever.</p>
  <div>`
}



const router = new VueRouter({
  routes: [
      {
        path: "/one",
        component: one
      },{
        path: "/two",
        component: two
      },{
        path: "/three",
        component: three
      },{
        path: "/four",
        component: four
      },{
        path: "/five",
        component: five
      }
]
});


new Vue ({
  router,
  el: "#app",
  data: {


  },
  methods: {


  }
}).$mount("#app");













// new Vue({
//   el: "#app",
//   data: {
    // message: "I am so Cool, thanks!",
//     num: 100,
//     isVis: true,
//     goodbyeStyle: {
//       "background-color": "green",
//       color: "blue",
//       padding: "19px"
//     }
//   }
// })
// new Vue ({
//   el: "#app",
//   data: {
//       message: "I am so Cool, thanks!",
//       activeClass: "active",
//       activeStyles: {
//           height: "250px",
//           border: "10px solid blue",
//           margin: "25px 25px"
//       },
//       isActive: true
//   }
// })
