<template>
    <div>
        <!-- component -->
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-7xl">
                <h1 class="font-bold text-center text-2xl mb-5">Registrarse</h1>
                <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form @submit.prevent="insert">
                        <div class="px-5 py-7">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer
                                        Nombre</label>
                                    <input type="text" v-model="person.firstName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" required="">
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo
                                        Nombre</label>
                                    <input type="text" v-model="person.secondName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer
                                        Apellido</label>
                                    <input type="text" v-model="person.firstLastname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" required="">
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo
                                        Apellido</label>
                                    <input type="text" v-model="person.secondLastname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" required="">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-6">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
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
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
                                    Nacimiento</label>
                                <input type="date" v-model="person.dateBirth"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="">
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-6">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input type="text" v-model="user.username"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" required="">
                                </div>
                                <div class="mb-6">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" v-model="user.password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="" required="">
                                </div>
                            </div>
                            <button type="submit"
                                class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span class="inline-block mr-2">Registrarse</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-4 h-4 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div class="py-5">
                        <div class="grid grid-cols-2 gap-1">
                            <div class="text-center sm:text-left whitespace-nowrap">
                                <a href="/login">
                                    <button
                                        class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                                        </svg>
                                        <span class="inline-block ml-1">Iniciar Sesión</span>
                                    </button>
                                </a>
                            </div>
                            <div class="text-center sm:text-right  whitespace-nowrap">
                                <button
                                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span class="inline-block ml-1">Help</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="text-center sm:text-left whitespace-nowrap">
                            <a href="/">
                                <button
                                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span class="inline-block ml-1">Volver a Inicio</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
                    idRol: 2,
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
        }
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
                                    window.location.assign("/login")
                                });
                        });
                })

        },
    }
}
</script>