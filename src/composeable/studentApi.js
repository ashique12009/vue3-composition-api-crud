import axios from "axios";
import { ref } from "vue";

export default function useStudent() {
    const url = "http://localhost:3333/students";
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

    return {
        getAllStudent,
        error,
        studentData
    }
}