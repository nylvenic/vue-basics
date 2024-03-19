const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello from Vue!'
        };
    },
    methods: {
        randomNumber(max=20) {
            return `Random Number: ${Math.floor(Math.random() * max)}`;
        },
    }
});
app.mount('#main');