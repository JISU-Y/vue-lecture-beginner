<template>
  <div>
    <h1>Welcome home - {{ title }}</h1>
    <h3>your location: {{ location }}</h3>
    <form @submit="handleSubmit">
      <input type="text" v-model="input" />
      <button type="submit">Get</button>
      <button type="button" @click="setData">set to 1</button>
    </form>

    <hr />

    <select v-model="region" @change="changeRegion">
      <option :key="index" :value="data.short" v-for="(data, index) in options">{{ data.location }} (short for {{ data.short }})</option>
    </select>

    <table v-if="tableShow">
      <tr :key="index" v-for="(data, index) in options">
        <td>location: {{ data.location }}</td>
        <td>location-short: {{ data.short }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "main-home",
  data() {
    return {
      title: "개발자의 품격",
      location: "Seoul",
      input: "",
      options: [
        { short: "S", location: "Seoul" },
        { short: "B", location: "Busan" },
        { short: "J", location: "Jeju" },
        { short: "A", location: "Ansan" },
      ],
      region: "J",
      tableShow: false,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      console.log(this.input)
      window.alert(this.input)
      this.input = ""
    },
    setData() {
      this.input = 1
    },
    changeRegion() {
      alert(this.region)
      if (this.region === "J") {
        this.tableShow = true
      }
    },
  },
  watch: {
    // data에 있는 특정 변수 이름을 똑같이 써 주어 그 변수의 update를 감지한다.
    input() {
      console.log(`your watching 'input' value: ${this.input}`)
    },
    region() {
      console.log(`your watching 'region' value: ${this.region}`)
    },
  },
}
</script>
