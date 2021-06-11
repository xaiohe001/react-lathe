import './App.css'
import '../node_modules/antd/dist/antd.css'
import Nav from './Nav/Nav'
import Shuffling from './Shuffling/Shuffling'
import {Fragment} from 'react'
import Main from './Main/Main'
import Introduction from './Introduction/Introduction'
import Details from './Details/Details'
import News from './News/News'
import Footer from './Footer/Footer'

function App() {
  return (
    <Fragment>
      <Nav />
      <Shuffling />
      <Main />
      <Introduction />
      <Details />
      <News />
      <Footer />
    </Fragment>
  )
}
export default App;
