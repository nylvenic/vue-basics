const app = Vue.createApp({
    data() {
        return {
            name: 'Bob',
            age: 42,
            randomDecimal: 5.43324254,
            randomMap: {
                phoneNumber: '999-9999-9999',
                address: 'Fake St 5'
            },
        };
    },
});
app.mount('#main');