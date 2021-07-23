import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import MainContainer from './containers/MainContainer'
import { registerStudent, loginStudent, verifyStudent, removeToken } from './services/auth'

function App() {
  const [currentStudent, setCurrentS] = useState(null)

  useEffect(() => {
    const handleVerify = async () => {
      const studentData = await verifyStudent()
      setCurrentS(studentData)
    }
    handleVerify()
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
