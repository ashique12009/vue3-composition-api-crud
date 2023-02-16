import axios from "axios";
import { ref } from "vue";

export default function useStudent() {
    const url = "http://localhost:3333/students/";
    const studentData = ref([]);
    const error = ref(null);

    // Get all students 
    const getAllStudent = async () => {
        studentData.value = [];
        error.value = null;

        try {
            const res = await axios(url);
            studentData.value = res.data;
            console.log('RESPONSE', res);
        } catch (err) {
            error.value = err;
            console.log('Err', err);
        }
    }

    // Get single studen data
    const getSingleStudentData = async (id) => {
        studentData.value = [];
        error.value = null;

        try {
            const res = await axios(url + id);
            studentData.value = res.data;
        } catch (err) {
            error.value = err;
        }
    }

    // Add student
    const createStudent = async(formData) => {
        studentData.value = [];
        error.value = null;

        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'Application/json'
                },
                data: JSON.stringify(formData)
            }
            
            const res = await axios(config);
            studentData.value = res.data;
        } catch (err) {
            error.value = err;
        }
    }

    // Update student data
    const updateStudent = async(id, data) => {
        studentData.value = [];
        error.value = null;

        try {
            const config = {
                method: 'PUT',
                url: url + id,
                headers: {
                    'Content-Type': 'Application/json'
                },
                data: JSON.stringify(data)
            }
            
            const res = await axios(config);
            studentData.value = res.data;
        } catch (err) {
            error.value = err;
        }
    }

    return {
        getAllStudent,
        error,
        studentData,
        getSingleStudentData,
        createStudent,
        updateStudent
    }
}