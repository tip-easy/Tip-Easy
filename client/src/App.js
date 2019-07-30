import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>I nav</nav>

      <main>
        <Route path="/" exact component={props => (
          <div className="App">
            Beep Boop. I'm alive.
          </div>
        )} />
      </main>

      <footer>
        This is the footer, at the foot of the page.
      </footer>
    </Router>
  )
}

export default App
