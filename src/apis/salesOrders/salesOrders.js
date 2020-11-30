import api from '../../lib/api';

const URL = '/salesorders'; 

export default {
  getAll: () => api.get(URL),

  filter: (searchInput) => api.get(`${URL}/filter`, {
    params: {
      searchInput,
    }
  }),

  get: (id) => api.get(`${URL}/${id}`),

  add: (payload) => api.post(URL, payload),

  modify: (id, payload) => api.put(`${URL}/${id}`),

  remove: (id) => api.delete(`${URL}/${id}`),
};