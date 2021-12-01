<template>
  <div class="admin">
    <h1>The Admin Page</h1>
    <div class="heading">
      <h2>Add an Item</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Name" />
        <p></p>
        <input v-model="number" placeholder="Number" />
        <p></p>
        <input v-model="points" placeholder="Points" />
        <p></p>
        <input v-model="rebounds" placeholder="Rebounds" />
        <p></p>
        <input v-model="assists" placeholder="Assists" />
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{ addItem.name }} #{{ addItem.number }}</h2>
        <img :src="addItem.path" />
        <p></p>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete an Item</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectItem(s)"
          >
            {{ s.name }}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <p><input v-model="findItem.name" placeholder="Name" /></p>
        <p><input v-model="findItem.number" placeholder="Number" /></p>
        <p><input v-model="findItem.points" placeholder="Points" /></p>
        <p><input v-model="findItem.rebounds" placeholder="Rebounds" /></p>
        <p><input v-model="findItem.assists" placeholder="Assists" /></p>
        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <p><button @click="deleteItem(findItem)">Delete</button></p>
        <p><button @click="editItem(findItem)">Edit</button></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
}

.heading h2 {
  margin-top: 8px !important;
  margin-left: 10px !important;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50% !important;
  width: 18px !important;
  height: 18px !important;
  padding: 8px !important;
  background: #333 !important;
  color: #fff !important;
  text-align: center !important;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>
<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      name: "",
      file: null,
      number: "",
      points: "",
      rebounds: "",
      assists: "",
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      description: "",
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        console.log(
          `The name is ${this.name} and the number is ${this.number}`
        );
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/players", {
          name: this.name,
          path: r1.data.path,
          number: this.number,
          points: this.points,
          rebounds: this.rebounds,
          assists: this.assists,
        });
        this.addItem = r2.data;
        console.log(this.addItem);
      } catch (error) {
        return false;
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/players");
        this.items = response.data;
        return true;
      } catch (error) {
        return false;
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/players/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        return false;
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/players/" + item._id, {
          name: this.findItem.name,
          number: this.findItem.number,
          points: this.findItem.points,
          rebounds: this.findItem.rebounds,
          assists: this.findItem.assists,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.name.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.name > b.name);
    },
  },
};
</script>
