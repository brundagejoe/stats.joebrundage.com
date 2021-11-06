<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stats">Season Stats</router-link> |
      <router-link to="/records">Records</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <footer id="footer">
      <p>Check out the full repository <a href="https://github.com/BYU-CS-260-Spring-2021/lab-3b-grocery-store-brundagejoe">here</a>.</p>
      </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
}

body {
  margin: 0;
  padding: 0;
  background-color: #F2F2F2;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1, h2 {
  font-family: 'Bebas Neue', cursive;
  color: #021F59;
  margin-top: 25px;
  margin-bottom: 25px;
}

a {
  text-decoration: none;
}

p {
  margin: 1em 1.5em;
}

#nav {
  padding: 30px;
  background-color: #024873;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #F2F2F2;
}

#nav a.router-link-exact-active {
  color: #82c8f3;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #222222;
  text-align: center;
  color: white;
}

#footer a {
  color: #82c8f3;
}
</style>
