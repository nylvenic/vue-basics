const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            name2: '',
            email2: '',
        }
    },
    methods:{
        submitHandler(e) {
            e.preventDefault();
            alert(`${this.name} ${this.email}`)
        },
        preventModifier(e) {
            alert(`${this.name2} ${this.email2}`)
        }
    }
});
app.mount('#main');