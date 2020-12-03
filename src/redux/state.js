const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        {id: 7, user: 6, message: 'Привет 7', date: new Date(2020, 0, 1, 13, 36)},
        {id: 6, user: 5, message: 'Привет 6', date: new Date(2020, 0, 1, 13, 34)},
        {id: 5, user: 4, message: 'Привет 5', date: new Date(2020, 0, 1, 13, 34)},
        {id: 4, user: 4, message: 'Привет 4', date: new Date(2020, 0, 1, 13, 33)},
        {id: 3, user: 3, message: 'Привет 3', date: new Date(2020, 0, 1, 13, 32)},
        {id: 2, user: 2, message: 'Привет 2', date: new Date(2020, 0, 1, 13, 31)},
        {id: 1, user: 2, message: 'Привет 1', date: new Date(2020, 0, 1, 13, 30)},
      ],
      newMessageText: '',
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
      case ADD_POST:
        this.addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this.updateNewPostText(action.text)
        break;
      case SEND_MESSAGE:
        this.sendMessage();
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this.updateNewMessageText(action.text)
        break;
      default:
        console.error(`Action type is incorrect: '${action.type}'!`)
        break
    }
  },

  addPost () {
    let id = this._state.wallPage.posts[0].id + 1
    let message = this._state.wallPage.newPostText
    if(message.trim() === ''){
      alert('Введите сообщение!')
      return
    }
    this._state.wallPage.posts.unshift({id: id, text: message, likes: 0})
    this._state.wallPage.newPostText = ''
    this.renderUI()
  },

  updateNewPostText (text) {
    this._state.wallPage.newPostText = text
    this.renderUI()
  },

  sendMessage () {
    let message = this._state.dialogsPage.newMessageText
    if(message.trim() === ''){
      alert('Введите сообщение!')
      return
    }
    let id = this._state.dialogsPage.messages[0].id + 1
    this._state.dialogsPage.messages.unshift({
      id: id,
      user: 1,
      message: message,
      date: new Date()
    })
    this._state.dialogsPage.newMessageText = ''
    this.renderUI()
  },

  updateNewMessageText (text) {
    this._state.dialogsPage.newMessageText = text
    this.renderUI()
  },

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text
})

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text
})