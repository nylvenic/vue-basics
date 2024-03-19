const app = Vue.createApp({
    data() {
        return {
            myText: 'I have a message for you from: '
        };
    },
    methods: {
        action1() {
            alert(`${this.myText} action1`);
        },
        myFunctionName: function() {
            alert(`${this.myText} myFunctionName`);
        }
    }
});
app.mount('#main');