
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: []
        }
    },
    methods: {
        getData() {
            axios.get('/user', {
                params: {

                }
            })
                .then((response) => {
                    console.log(response);
                    this.toDoList = response.data
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }
}).mount('#app')

