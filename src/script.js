
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            api: './src/get_task.php',
            newTask: "",
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
        },
        addTask(newTask) {
            newObj = {
                task: newTask
            };
            this.toDoList.push(newObj)
            this.newTask = "";
        }
    },
    created() {
        this.getData()
    }
}).mount('#app')

