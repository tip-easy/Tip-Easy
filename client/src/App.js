import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import { Navigation } from './Components/Nav/Nav'
import { Footer } from './Components/Footer/Footer'; 

const App = () => {
  return (
    <Router>
      <Navigation />

      <main>
        <Route path="/" exact component={props => (
          <div className="App">
            Beep Boop. I'm alive.
          </div>
        )} />
      </main>

      <Footer>
        This is the footer, at the foot of the page.
      </Footer>
    </Router>
  )
}

export default App
