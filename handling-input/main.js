const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            inputValue2: '',
            name: '',
            email: '',
            nameIsValid: false,
            emailIsValid: false,
        }
    },
    methods: {
        inputAction(e) {
            this.inputValue = e.target.value;
        },
        resetInput() {
            this.inputValue = '';
        },
        resetInput2() {
            this.inputValue2 = '';
        },
        validate(e, type) {
            let value = e.target.value;
            if(type == 'name') {
                if(this.name.length > 5) {
                    this.nameIsValid = true;
                } else {
                    this.nameIsValid = false;
                }
            } else if (type == 'email') {
                const eRegex = /^\S+@\S+\.\S+$/;
                const isValid = eRegex.test(this.email);
                if(isValid) {
                    this.emailIsValid = true;
                } else {
                    this.emailIsValid = false;
                }
            }
        }
    }
});
app.mount('#main');