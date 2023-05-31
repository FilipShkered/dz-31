export class TodoApi {
  static API = 'https://642ffaafc26d69edc88806d4.mockapi.io/api/todo/'

  static request(url = '', method = 'GET', body) {
    return fetch(TodoApi.API + url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Content-type': 'application/json',
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Con not execute server request.');
      })
  }

  static getList() {
    return TodoApi.request().catch(() => {
      throw new Error('Con not retrieve todo list from server.');
    })
  }

  static create(todo) {
    return TodoApi.request('', 'POST', todo).catch(() => {
      throw new Error('Con not create todo on server.');
    })
  }

  static update(id, changes) {
    return TodoApi.request(id, 'PUT', changes).catch(() => {
      throw new Error('Con not update todo on server.');
    })
  }

  static delete(id) {
    return TodoApi.request(id, 'DELETE').catch(() => {
      throw new Error('Con not delete todo on server.');
    })
  }
}