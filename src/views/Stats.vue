<template>
  <div class="wrapper">
    <div class="players">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><b>Name</b></th>
            <th scope="col"><b>Number</b></th>
            <th scope="col"><b>PPG</b></th>
            <th scope="col"><b>RPG</b></th>
            <th scope="col"><b>AST</b></th>
          </tr>
        </thead>
        <tbody>
          <tr class="player" v-for="player in players" :key="player._id">
            <th scope="row">
              <b>{{ player.name }}</b>
            </th>
            <td>{{ player.number }}</td>
            <td>{{ player.points }}</td>
            <td>{{ player.rebounds }}</td>
            <td>{{ player.assists }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Stats",
  data() {
    return {
      players: null,
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/players");
        this.players = response.data;
        console.log(this.players);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  props: {},
};
</script>
<style></style>
