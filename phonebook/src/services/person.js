import axios from 'axios'

const url = 'http://localhost:3001/persons'

const add = (newPerson) => (
    axios
    .post(url, newPerson)
    .then(response => 
        response.data
    )
)

const update = (id, addPerson) => (
    axios
    .put(`${url}/${id}`, addPerson)
    .then(response =>
        response.data    
    )
)

const remove = (id) => (
    axios
    .delete(`${url}/${id}`)
    .then(response =>
        response.data    
    )
)

const getAll = () => (
    axios
    .get(url)
    .then(response =>
        response.data
    )
)

export default {
    add,
    update,
    remove,
    getAll
}