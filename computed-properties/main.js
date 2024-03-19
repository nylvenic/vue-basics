const app = Vue.createApp({
    data() {
        return {
            randomNumber:this.createRandom(),
            fname: '',
            lname: '',
        };
    },
    computed: {
        cFullName() {
            return `${this.fname} ${this.lname}`;
        }
    },
    methods: {
        createRandom(max=10) {
            return Math.floor(Math.random() * max);
        },
        regenerateRandom() {
            this.randomNumber = this.createRandom();
        },
        mFullName() {
            console.log('I just executed!');
            return `${this.fname} ${this.lname}`;
        }
    }
});
app.mount('#main');