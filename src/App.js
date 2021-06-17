import './App.css'
import '../node_modules/antd/dist/antd.css'
import Home from './Home'
import {Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Jump from './Jump/Jump'
import Serve from './Sever/Serve'
import Price from './Price/Price'
import CorporateNews from './CorporateNews/CorporateNews'
import CommonProblem from './CommonProblem/CommonProblem'
import Contactus from './Contactus/Contactus'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Jump" exact component={Jump} />
        <Route path="/Serve" exact component={Serve} />
        <Route path="/Price" exact component={Price} />
        <Route path="/CorporateNews" exact component={CorporateNews} />
        <Route path="/CommonProblem" exact component={CommonProblem} />
        <Route path="/Contactus" exact component={Contactus} />
      </BrowserRouter>
    </Fragment>
    
  )
}
export default App;
