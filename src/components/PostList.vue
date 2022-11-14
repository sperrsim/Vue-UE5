<template>
  <div>
    <div v-if="error">
      <h2>Error: {{ error }}</h2>
    </div>
    <div v-else>
      <div v-if="loading">
        <h2>Loading data ....</h2>
      </div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Index</th>
            <th>Titel</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td v-if="index == 0 || item.userId != data[index - 1].userId">{{ item.userId }}</td>
            <td v-else />
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useFetch } from '../composables/UseFetch.js';
export default {
  setup() {
    const { data, error, loading } = useFetch(
      'https://jsonplaceholder.typicode.com/posts',
      {}
    );
    console.log(data.value);
    let lastId = 1;
    return {
      data,
      error,
      loading,
      lastId,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
}
thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
th tr {
  padding: 12px 15px;
  width: 25%;
}
tbody tr {
  border-bottom: 1px solid #dddddd;
}
tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
