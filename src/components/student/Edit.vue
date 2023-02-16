<script setup>
import { reactive } from 'vue';
import useStudent from '../../composeable/studentApi';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const { studentData, error, getSingleStudentData, updateStudent } = useStudent();
const route = useRoute();

onMounted(() => {
    getSingleStudentData(route.params.id);
});

const handleSubmit = async () => {
    await updateStudent(route.params.id, studentData.value);
}
</script>

<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-600 p-6">
            <h1 class="text-center text-white">Edit Student</h1>
        </div>

        <form @submit.prevent="handleSubmit" class="w-fill" id="AddStudntForm">
            <div class="flex item-center m-6">
                <div class="w-1/5">
                    <label for="id" class="form-medium">ID: </label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="id" class="w-full border-2 border-gery py-2 px-4" v-model.trim="studentData.id" placeholder="Write your name" required readonly>
                </div>
            </div>
            <div class="flex item-center m-6">
                <div class="w-1/5">
                    <label for="studentname" class="form-medium">Name: </label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="studentname" class="w-full border-2 border-gery py-2 px-4" v-model.trim="studentData.studentname" placeholder="Write your name" required>
                </div>
            </div>
            <div class="flex item-center m-6">
                <div class="w-1/5">
                    <label for="studentemail" class="form-medium">Email: </label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="studentemail" class="w-full border-2 border-gery py-2 px-4" v-model.trim="studentData.email" placeholder="Write your email" required>
                </div>
            </div>
            <div class="m-8 flex justify-center">
                <button class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-6" type="submit">Update</button>
                <RouterLink :to="{name: 'list'}">
                    <button class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-6" type="button">Back to Home</button>
                </RouterLink>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
