const { createApp } = Vue;

createApp({
data() {
    return {
    message: 'Hello Vue!',
    image: "img/vuejs.png"
    }
}
}).mount('#app')