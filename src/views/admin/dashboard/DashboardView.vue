<template>
    <div>
        <!-- component -->
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

        <div class="flex flex-wrap bg-slate-100 sm:-mt-12">
            <template v-if="userRole === 1">
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg pb-8">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Categorias</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ quantityCategories }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-list"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg pb-8">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Productos</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ quantityProducts }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-shopping-bag"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg pb-8">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Usuarios</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ quantityUsers }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg pb-8">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Compras</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ quantityPurchases }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg pb-8">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Compras</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ quantityPurchases }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userRole: null,
            userPerson: null,
            quantityProducts: 0,
            quantityUsers: 0,
            quantityCategories: 0,
            quantityPurchases: 0
        }
    },
    created() {
        const isAuthenticated = localStorage.getItem('user');
        this.userRole = isAuthenticated ? parseInt(JSON.parse(isAuthenticated).rol) : null;
        this.userPerson = isAuthenticated ? parseInt(JSON.parse(isAuthenticated).person) : null;
        console.log(this.userPerson);
    },
    mounted() {
        if (this.userRole === 1) {
            const api = import.meta.env.VITE_BASE_URL;

            const urlProducts = api + 'product'
            fetch(urlProducts, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => this.quantityProducts = data.data.length)

            const urlUsers = api + 'user'
            fetch(urlUsers, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => this.quantityUsers = data.data.length)

            const urlCategories = api + 'category'
            fetch(urlCategories, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => this.quantityCategories = data.data.length)

            const urlPurchases = api + 'purchase'
            fetch(urlPurchases, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => this.quantityPurchases = data.data.length)
        } else {
            console.log(this.userPerson);
        }
    },
}
</script>