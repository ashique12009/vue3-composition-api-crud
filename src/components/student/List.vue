<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router';
import useStudent from '@/composeable/studentApi';
import { onMounted } from 'vue';

const { getAllStudent, error, studentData, deleteStudent } = useStudent();
onMounted(getAllStudent);

const delStudent = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return
    }
    await deleteStudent(id);
    await getAllStudent();
}
</script>

<template>
    <div>
        <div class="bg-orange-600 p-4">
            <h1 class="text-3xl text-center mt-3">Studen List 
                <RouterLink :to="{ name: 'add' }">
                    <button class="text-white bg-green-700 hover:bg-green-800 text-md font-medium rounded-l text-right p-2 px-6g"><UserPlusIcon /> Add</button>
                </RouterLink>
            </h1>
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
                <tr v-for="student in studentData" :key="student.id">
                    <td class="py-2">{{ student.id }}</td>
                    <td class="py-2">{{ student.studentname }}</td>
                    <td class="py-2">{{ student.email }}</td>
                    <td class="py-2">
                        <RouterLink :to="{name: 'view', params: {id: student.id} }">
                            <EyeIcon class="text-blue-500 h-6 w-6 inline" />
                        </RouterLink>
                        
                        <RouterLink :to="{name: 'edit', params: {id: student.id} }">
                            <PencilIcon class="text-emerald-500 h-6 w-6 inline mx-6" />
                        </RouterLink>
                        
                        <TrashIcon class="text-red-500 h-6 w-6 inline cursor-pointer" @click="delStudent(student.id)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
