import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Register from './screens/Register'
import Login from './screens/Login'
import Layout from './components/Layout';
import MainContainer from './containers/MainContainer'
import { registerStudent, loginStudent, verifyStudent, removeToken } from './services/auth'

function App() {
  const [currentStudent, setCurrentS] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const studentData = await verifyStudent()
      setCurrentS(studentData)
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const studentData = await loginStudent(formData)
    setCurrentS(studentData)
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const studentData = await registerStudent(formData);
    setCurrentS(studentData);
    history.push("/");
  };

  const handleLogout = async () => {
    setCurrentS(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }
  return (
    <div className="App">
      <Layout currentStudent={currentStudent} handleLogout={handleLogout}>
        <Switch>
          <Route path="/" component={MainContainer} />
          <Route path="/register">
            <Register handleRegister={handleRegister} />
            </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
            </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
