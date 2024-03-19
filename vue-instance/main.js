const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello from Vue!'
        };
    },
});
app.mount('#main');

const app2 = Vue.createApp({
    data() {
        return {
            msg: 'Separate instance of Vue mounted elsewhere'
        }
    }
});
app2.mount('#main2');