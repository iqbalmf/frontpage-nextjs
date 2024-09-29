import axios from '../../../configs/axios'

interface Options {
    params?: {
        status?: string;
        limit?: number;
    };
}

const courseApi = {
    all: (options: Options = {params: {limit: 4, status: 'published'}}) =>
        axios.get('/courses', options)
            .then((res) => {
                return res.data
            }).catch((error) => {
            console.error("Error fetching courses:", error.response?.data || error.message);
            return [];
        }),
    details: (id: string) => axios.get(`/courses/${id}`)
        .then((res) => res.data).catch((error) => {
            console.error("Error fetching courses:", error.response?.data || error.message);
            return [];
        }),
};

export default courseApi;