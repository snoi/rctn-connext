export const getNews = () => (dispatch, getState) => {
  fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=e61bf626e4aa4669909c783e6a766f66')
    .then(response => response.json())
    .then(result => {
      const isLoggedIn = getState().user.login

      console.log(getState().user.login)

      if (isLoggedIn) {
        dispatch({
          type: 'NEWS',
          data: result.articles
        })
      } else {
        dispatch({
          type: 'UNAUTHORIZED',
          data: []
        })
      }
    })
}

export default (state = [], action) => {
  switch(action.type) {
    case 'NEWS': 
      return action.data
    case 'UNAUTHORIZED':
      return []
    default:
      return state
  }
}