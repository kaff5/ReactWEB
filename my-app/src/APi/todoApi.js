import * as axios from "axios";

const baseURL = 'https://sas.front.kreosoft.space/api/';

const instance = axios.create({
    baseURL: baseURL
})

const loginAndPass = {
    "username": "Dog",
    "password": "catcat"
}

function authorize() {
    return instance.post('auth', loginAndPass)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.accessToken)
                return response.data;
            }
        })
        .catch(error => {
            return authorize()
        });

}


function createSpisok(name) {
    let body = {
        "id": null,
        "name": name,
    }

    return instance.post('ToDoList', body, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            return authorize().then(() => {
                return createSpisok(name)
            })
        });
}

function getTodoList() {
    return instance.get('ToDoList', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })

        .catch(error => {
            return authorize().then(() => {
                return getTodoList()
            })
        });
}

    function removeTodoList(id) {
        let body = {
            "id": id
        }


        return instance.delete('ToDoList', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }, data: {...body}
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => {
                return authorize().then(() => {
                    return removeTodoList(id)
                })
            });

    }

    function createToDoItem(id, name, des, pr, idList) {
        let body = {
            "id": id,
            "name": name,
            "description": des,
            "priority": parseInt(pr),
            "listId": parseInt(idList)
        }

        return instance.post('ToDoItem', body, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => {
                return authorize().then(() => {
                    return createToDoItem(id, name, des, pr, idList)
                })
            });
    }


    function checkTask(ownerId, id) {
        let body = {
            "ownerId": ownerId,
            "id": id
        }

        return instance.post('ToDoItem/check', body, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => {
                return authorize().then(() => {
                    checkTask(ownerId, id)
                })
                
            });

    }


    function removeTask(ownerId, id) {
        let body = {
            "ownerId": ownerId,
            "id": id
        }


        return instance.delete('ToDoItem', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }, data: {...body}
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => {
                return authorize().then(() => {
                    return removeTask(ownerId, id)
                })

            });

    }


    export const todoApi = {
        createSpisok: createSpisok,
        getTodoList: getTodoList,
        removeTodoList: removeTodoList,
        checkTask: checkTask,
        createToDoItem: createToDoItem,
        removeTask: removeTask,
    }


