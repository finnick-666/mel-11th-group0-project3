import instance from '../../lib/instance';

const URL = '/customers'; 

export default {
  getAll: () => instance.get(URL),

  filter: (searchInput) => instance.get(`${URL}/filter`, {
    params: {
      searchInput,
    }
  }),

  get: (id) => instance.get(`${URL}/${id}`),

  add: (payload) => instance.post(URL, payload),

  update: (id, payload) => instance.put(`${URL}/${id}`, payload),

  remove: (id) => instance.delete(`${URL}/${id}`),
};