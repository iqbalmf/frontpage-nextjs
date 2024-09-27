import axios from '../../../configs/axios'

interface Options {
    params?: {
        status?: string;
        limit?: number;
    };
}
const courseApi = {
    all: (options: Options = { params: { limit: 4, status: 'published'} }) =>
        axios.get('/courses', options)
            .then((res) => {
                return res.data
            }),
    details: (id: string) => axios.get(`/courses/${id}`)
        .then((res) => res.data),
};

export default courseApi;