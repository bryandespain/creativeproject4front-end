<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img src="/images/allstarlogo.png" />
        </div>
      </router-link>
      <div class="title">
        <h1>2021 NBA Allstars</h1>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <h4>
        <router-link to="/admin">Admin</router-link> |
        <router-link to="/stats">Stats</router-link>
      </h4>
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  justify-content: center;
  padding: 10px 100px 0px 100px;
  background-color: white;
  color: #1c454f;
}

.title {
  margin-top: 5px;
}

.title h1 {
  justify-content: center;
  font-size: 30px;
  text-align: center;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  text-align: center;
  padding: 20px 100px 0px 100px;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
