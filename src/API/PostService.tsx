import axios from "axios"
export default class PostService {
    static async getAll(limit: number, page: number) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit, 
                _page: page
            }
        })
        return response;
    }

    static async getById(id: number) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id: number) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}

