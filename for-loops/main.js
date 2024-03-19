const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    name: 'Basic Glasses',
                    description: 'Placeholder description',
                    src: 'https://i.pinimg.com/564x/9f/ee/3b/9fee3bf193843ec725871a1ec4942043.jpg',
                },
                {
                    name: 'Scarf',
                    description: 'Placeholder description',
                    src: 'https://i.pinimg.com/736x/35/44/ed/3544ed2cc6bcc62d667d9f0c26b8736c.jpg',
                },
                {
                    name: 'Lamb Hat?',
                    description: 'Placeholder description',
                    src: 'https://i.pinimg.com/736x/78/b5/9d/78b59da1cceec125afa0fc21eb9474fe.jpg',
                },
            ]
        };
    },
    methods: {
        
    }
});
app.mount('#main');