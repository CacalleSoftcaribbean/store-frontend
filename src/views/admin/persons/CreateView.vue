<template>
    <div>
        <div class="p-4">
            <form class="shadow p-3" @submit.prevent="insert">
                <h2 class="text-center text-2xl font-bold mb-6">Nueva Persona</h2>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione
                        la categoria</label>
                    <select v-model="person.rolDto.idRol" required=""
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected disabled> -- </option>
                        <option v-for="rol in roles" :key="rol.id_rol" :value="rol.id_rol"> {{
                            rol.name }} </option>
                    </select>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Nombre</label>
                        <input type="text" v-model="person.firstName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Nombre</label>
                        <input type="text" v-model="person.secondName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Apellido</label>
                        <input type="text" v-model="person.firstLastname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Apellido</label>
                        <input type="text" v-model="person.secondLastname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                        <input type="phone" v-model="person.phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="">
                    </div>
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                            Electronico</label>
                        <input type="email" v-model="person.email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                    <input type="date" v-model="person.dateBirth"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                        <input type="text" v-model="user.username"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                    <div class="mb-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" v-model="user.password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="">
                    </div>
                </div>
                <div class="flex justify-end gap-3">
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                    <a href="/adminpersons">
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
            person: {
                email: '',
                firstLastname: '',
                firstName: '',
                idPerson: 0,
                phone: '',
                rolDto: {
                    idRol: 0,
                },
                secondLastname: '',
                secondName: '',
                dateBirth: ''
            },
            user: {
                username: '',
                password: '',
                personDto: {
                    idPerson: 0,
                }
            },
            roles: []
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
    methods: {
        insert() {
            const api = import.meta.env.VITE_BASE_URL;
            const url = api + 'person'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.person),
            })
                .then((response) => response.json())
                .then((data) => {
                    this.user.personDto.idPerson = data.data.idPerson;

                    const url = api + 'user'
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.user),
                    })
                        .then((response) => response.json())
                    .then((data) => {
                        swal(data.message)
                            .then(() => {
                                window.location.assign("/adminpersons")
                            });
                    });
                })

        },
    }
}
</script>