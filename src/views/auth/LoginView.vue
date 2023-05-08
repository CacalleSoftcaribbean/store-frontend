<template>
    <div>
        <!-- component -->
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 class="font-bold text-center text-2xl mb-5">Iniciar Sesión</h1>
                <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form @submit.prevent="login">
                        <div class="px-5 py-7">
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            required v-model="username" />
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Contraseña</label>
                            <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            required v-model="password" />
                            <button type="submit"
                                class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span class="inline-block mr-2">Entrar</span>
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
                                <a href="/register">
                                    <button
                                        class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                                        </svg>
                                        <span class="inline-block ml-1">Registrarse</span>
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
            username: '',
            password: '',
            // admins: {}
        }
    },
    mounted() {
        // const api = import.meta.env.VITE_URL_BASE;
        // const urlAdmin = api + 'admin/selectAll/'
        // fetch(urlAdmin, {
        //     method: 'GET',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        // })
        //     .then(response => response.json())
        //     .then(data => this.admins = data.data)
    },
    methods: {
        login() {
            // let username = this.admins.findIndex(e => e.username == this.username)
            // let password = this.admins.findIndex(e => e.password == this.password)
            if (this.username == 'calle' && this.password == '1234') {
                localStorage.setItem('user', JSON.stringify({ username: this.username, password: this.password, rol: 1 }))
                swal("Enhorabuena!", "Inicio exitoso", "success")
                    .then(() => {
                        this.$router.push('/admindashboard')
                    });
            } else {
                swal("Error!", "Usuario o contraseña incorrectos", "error");
            }
        },
    }
}
</script>