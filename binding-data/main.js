const app = Vue.createApp({
    data() {
        return {
            href: 'https://www.google.com/',
            img: {
                src: 'https://i.pinimg.com/originals/62/8c/01/628c01e4b8321396e45d812a871ffd26.jpg',
                alt: 'a cute cat'
            },
            isRed: false,
            isBlue: false,
            pClasses: 'border border-3 d-inline-block rounded p-2 m-2',
        };
    },
    methods: {
        paragraphToggler() {
            this.isRed = !this.isRed;
        },
        paragraphStyleToggler() {
            this.isBlue = !this.isBlue;
        }
    }
});
app.mount('#main');