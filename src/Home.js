import Nav from './Nav/Nav'
import Shuffling from './Shuffling/Shuffling'
import Main from './Main/Main'
import Introduction from './Introduction/Introduction'
import {Fragment} from 'react'
import Details from './Details/Details'
import News from './News/News'
import Footer from './Footer/Footer'

function Home() {
    return(
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

export default Home;