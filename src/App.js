import './App.css'
import '../node_modules/antd/dist/antd.css'
import Nav from './Nav/Nav'
import Shuffling from './Shuffling/Shuffling'
import {Fragment} from 'react'
import Main from './Main/Main'

function App() {
  return (
    <Fragment>
      <Nav />
      <Shuffling />
      <Main />
    </Fragment>
  )
}
export default App;
