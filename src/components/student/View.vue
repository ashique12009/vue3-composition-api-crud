<script setup>
</script>

<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-600 p-6">
            <h1 class="text-center text-white">View Student Detail</h1>
        </div>

        <table class="table-auto w-full">
            <thead class="bg-slate-600 text-white">
                <tr>
                    <th class="py-1">No</th>
                    <th class="py-1">Name</th>
                    <th class="py-1">Email</th>
                    <th class="py-1">Action</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                    <td class="py-2">1</td>
                    <td class="py-2">Ashique</td>
                    <td class="py-2">aa@a.com</td>
                    <td class="py-2">
                        <RouterLink :to="{name: 'list'}">
                            <button class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-6" type="button">Back to Home</button>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
