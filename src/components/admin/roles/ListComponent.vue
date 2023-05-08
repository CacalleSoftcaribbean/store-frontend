<template>
    <section class="py-10 px-4">
        <a href="/createrol">
            <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nuevo</button>
        </a>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descripción
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="rol in rolesPaginated" :key="rol.id_rol"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ rol.id_rol }}
                        </th>
                        <td class="px-6 py-4">
                            {{ rol.name }}
                        </td>
                        <td class="px-6 py-4">
                            <template v-if="rol.status == 0">
                                Activo
                            </template>
                            <template v-else>
                                Inactivo
                            </template>
                        </td>
                        <td class="px-6 py-4">
                            {{ rol.description }}
                        </td>
                        <td class="px-6 py-4 flex gap-2">
                            <!-- <button type="button" @click="editPerson(rol.id_rol)"
                                class="px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                    <path
                                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                </svg>
                            </button> -->
                            <button type="button" @click="deletePerson(rol)"
                                class="px-2 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-6 flex justify-end">
            <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center -space-x-px">
                    <li :class="{ disabled: currentPage === 1 }">
                        <a @click.prevent="prevPage"
                            class="block px-3 cursor-pointer py-2 ml-0 leading-tight bg-white text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                    <li :class="{ active: page === currentPage }" v-for="page in pages" :key="page">
                        <a @click.prevent="goToPage(page)" :class="isActive(page)"
                            class="px-3 cursor-pointer py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {{ page }}
                        </a>
                    </li>
                    <li :class="{ disabled: currentPage === pageCount }">
                        <a @click.prevent="nextPage"
                            class="block px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import swal from 'sweetalert'
export default {
    data() {
        return {
            roles: [],
            rol: {
                idRol: 0
            },

            //Pagination
            perPage: 8,
            currentPage: 1
        }
    },
    mounted() {
        const api = import.meta.env.VITE_BASE_URL;

        const url = api + 'rol'
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => this.roles = data.data)
    },
    computed: {
        pageCount() {
            return Math.ceil(this.roles.length / this.perPage)
        },
        rolesPaginated() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.roles.slice(start, end);
        },
        pages() {
            const pages = [];
            for (let i = 1; i <= this.pageCount; i++) {
                pages.push(i);
            }
            return pages;
        }
    },
    methods: {
        editPerson(id) {
            this.$router.push('/editrol/' + id);
        },
        deletePerson(rol) {
            swal({
                title: "¿Esta seguro?",
                text: "¿Esta seguro que desea eliminar esta persona?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.rol.idRol = rol.id_rol
                        const api = import.meta.env.VITE_BASE_URL;
                        const url = api + 'rol'
                        fetch(url, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(this.rol)
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                swal(data.message)
                                    .then(() => {
                                        location.reload()
                                    });
                            });
                    } else {
                        swal("¡Rol no eliminada!");
                    }
                });
        },
        goToPage(page) {
            this.currentPage = page;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage++;
            }
        },
        isActive(page) {
            return page == this.currentPage ? 'bg-blue-50' : ''
        }
    }
}
</script>