import logo from './logo.svg';
// import GreetingMessage from './GreetingMessage'//modou import
// import { ProductItem, OrderItem } from './ProductItem'//name import
// import Counter from "./Counter"
import { useEffect } from 'react'
import './App.css';
// import './App.css';
import HomePage from './pages/HomePage';
import AddPostPage from './pages/AddPostPage.js'
import Counter from './pages/CounterPage'
import SinglePostPage from "./pages/SinglePostPage"
import EditPage from "./pages/EditPage"
import LoginPage from "./pages/LoginPage"
import ReduxCounterPage from "./pages/ReduxCounterPage"


import { CounterProvider } from "./context/counter"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div>
      {/* <CounterProvider> */}
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/add" component={AddPostPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/post/:postId" component={SinglePostPage} />
          <Route path="/counter" component={Counter} />
          <Route path="/editpage" component={EditPage} />
          <Route path="/redux-counter" component={ReduxCounterPage} />
        </Switch>
      </BrowserRouter>
      {/* </CounterProvider> */}
    </div>
  )
}

export default App;
