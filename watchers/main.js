const initialText = 'Welcome to our rocket flight!';
const counterStart = 6;
const app = Vue.createApp({
    data() {
        return {
            counterStart: counterStart,
            counter: counterStart,
            counterInterval: '',
            src: '',
            text: initialText,
            btnText: 'Start Countdown',
        }
    },
    watch: {
        counter(newValue, oldValue) {
            if(newValue == 0) {
                clearInterval(this.counterInterval);
                this.counterInterval = '';
                this.liftoff();
                this.btnText = 'Launch again?';
            }
        }
    },
    methods: {
        liftoff() {
            this.src = 'https://i.pinimg.com/originals/f2/50/c9/f250c971767587d622373ceb638e8fbb.gif';
            this.text = 'We have liftoff!';
        },
        reset() {
            this.counter = counterStart;
            this.text = initialText;
            this.src = '';
            clearInterval(this.counterInterval);
        },
        startCountdown() {
            this.reset();
            const that = this;
            that.counter--;
            this.text = `Counting down from ${that.counter}`;
            this.counterInterval = setInterval(function() {
                that.counter--;
                that.text = `Counting down from ${that.counter}`;
            }, 1000);
        }
    }
});
app.mount('#main');