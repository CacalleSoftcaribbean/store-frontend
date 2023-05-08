<template>
    <div>
        <div class="p-4">
            <form class="shadow p-3" @submit.prevent="update">
                <h2 class="text-center text-2xl font-bold mb-6">Editar Categoria</h2>
                <div class="grid grid-cols-1 gap-4">
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" v-model="category.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea type="text" v-model="category.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""></textarea>
                </div>
                <div class="flex justify-end gap-3">
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                    <a href="/admincategories">
                        <button type="button"
                            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Salir</button>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'
export default {
    data() {
        return {
            category: {
                name: '',
                description: '',
            }
        }
    },
    mounted() {
        const api = import.meta.env.VITE_BASE_URL;

        const url = api + 'category/' + this.$route.params.id
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => this.category = data.data)
    },
    methods: {
        update() {
            const api = import.meta.env.VITE_BASE_URL;
            const url = api + 'category'
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.category),
            })
                .then((response) => response.json())
                .then((data) => {
                    swal(data.message)
                        .then(() => {
                            window.location.assign("/admincategories")
                        });
                });
        },
    }
}
</script>