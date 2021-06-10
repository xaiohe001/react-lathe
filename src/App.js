import './App.css'
import '../node_modules/antd/dist/antd.css'
import Nav from './Nav/Nav'
import Shuffling from './Shuffling/Shuffling'
import {Fragment} from 'react'
import Main from './Main/Main'
import Introduction from './Introduction/Introduction'
import Details from './Details/Details'

function App() {
  return (
    <Fragment>
      <Nav />
      <Shuffling />
      <Main />
      <Introduction />
      <Details />
    </Fragment>
  )
}
export default App;
