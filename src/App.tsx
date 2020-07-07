import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Test: React.FC = ({ children }) => (
  <div css={{ color: 'red' }}>{children}</div>
)
const EmotionCssPropWorksWithAnyClassName: React.FC<{ className?: string }> = ({
  children,
  className,
}) => <div className={className}>{children}</div>

const Nav: React.FC = styled.nav({
  width: 500,
  display: 'flex',
  justifyContent: 'space-between',
})

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/one">one</Link>
          <Link to="/two">two</Link>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Test>Home</Test>
          </Route>
          <Route path="/one">
            <EmotionCssPropWorksWithAnyClassName css={{ color: 'green' }}>
              One
            </EmotionCssPropWorksWithAnyClassName>
          </Route>
          <Route path="/two">
            <Test>Two</Test>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
