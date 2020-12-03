export const store = {
  _state: {
    dialogsPage: {
      contacts: [
        {id: 2, name: 'Аня'},
        {id: 3, name: 'Вася'},
        {id: 4, name: 'Петя'},
        {id: 5, name: 'Света'},
        {id: 6, name: 'Эльвира'},
      ],
      messages: [
        {id: 1, user: 2, message: 'Привет 1', date: '30/01/2020'},
        {id: 2, user: 2, message: 'Привет 2', date: '30/01/2020'},
        {id: 3, user: 3, message: 'Привет 3', date: '30/01/2020'},
        {id: 4, user: 4, message: 'Привет 4', date: '30/01/2020'},
        {id: 5, user: 4, message: 'Привет 5', date: '30/01/2020'},
        {id: 6, user: 5, message: 'Привет 6', date: '30/01/2020'},
        {id: 7, user: 6, message: 'Привет 7', date: '30/01/2020'},
      ],
    },
    wallPage: {
      posts: [
        {id: 3, text: "Запись 1", likes: 100},
        {id: 2, text: "Запись 23", likes: 50},
        {id: 1, text: "Текст записи 100", likes: 5},
      ],
      newPostText: 'Введите сообщение',
    }
  },

  getState () {
    return this._state;
  },


  subscribe (observer) {
    this.renderUI = observer;
  },

  renderUI () {
    console.error('No one is subscribed!')
  },

  dispatch (action) {
    switch (action.type) {
      case 'ADD-POST':
        this.addPost();
        break;
      case 'UPDATE-NEW-POST-TEXT':
        this.updatePostText(action.text)
        break;
      default:
        console.error(`Action type is incorrect: '${action.type}'!`)
        break
    }
  },

  addPost () {
    let id = this._state.wallPage.posts[0].id + 1
    let message = this._state.wallPage.newPostText
    this._state.wallPage.posts.unshift({id: id, text: message, likes: 0})
    this._state.wallPage.newPostText = ''
    this.renderUI()
  },

  updatePostText (text) {
    this._state.wallPage.newPostText = text
    this.renderUI()
  },

}