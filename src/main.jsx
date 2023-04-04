import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { newsAPI } from './features/newsSlice'
import { BrowserRouter } from 'react-router-dom'
const store = configureStore({
  reducer: {
    [newsAPI.reducerPath]: newsAPI.reducer,
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <ApiProvider api={newsAPI}>
        <App />
      </ApiProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
