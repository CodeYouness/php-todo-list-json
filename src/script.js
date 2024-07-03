
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            api: './src/get_task.php'
        }
    },
    methods: {
        getData() {
            axios.get(this.api)
                .then((response) => {
                    console.log(response);
                    this.toDoList = response.data
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getData()
    }
}).mount('#app')

