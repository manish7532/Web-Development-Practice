
import Header from './Header'
import Footer from './Footer'
// import { useState } from 'react';
// import Navbar from './Navbar';
// import Alert from './Alert';
// import UserGreeting from './UserGreeting'
// import Student from './Student'
// import Food from './Food'
// import Card from './Card'
// import List from './List'
// import Button from './Button'
// import MyComponent from './MyComponent'
// import Counter from './Counter'
// import MyOnChangeComponent from './MyOnChangeComponent'
// import ColorPicker from './ColorPicker'
// import UpdaterFunction from './UpdaterFunction'
// import UpdateObjects from './UpdateObjects'
// import UpdateArray from './UpdateArray'
// import UpdateArrayOfObjects from './UpdateArrayOfObjects'
// import ToDoList from './TodoList'
import MyUseEffect from './MyUseEffect'

function App() {
  //  const fruits = [
  //         { id: 1, name: "Apple", calories: 95 },
  //         { id: 2, name: "Orange", calories: 85 },
  //         { id: 3, name: "Banana", calories: 120 },
  //         { id: 4, name: "Coconut", calories: 45 },
  //         { id: 5, name: "PineApple", calories: 138 }
  //     ]
  //  const vegetables = [
  //         { id: 1, name: "potato", calories: 110 },
  //         { id: 2, name: "celery", calories: 15 },
  //         { id: 3, name: "carrots", calories: 25 },
  //         { id: 4, name: "corn", calories: 62 },
  //         { id: 5, name: "broccoli", calories: 50 }
  //     ]



  // const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  //   const [alert, setAlert] = useState(null);
  //   const showAlert = (message, type) => {
  //     setAlert({
  //       msg: message,
  //       type: type
  //     })
  //   }
  //   const toggleMode = () => {
  //     if (mode === "light") {
  //       setMode('dark')
  //       document.body.style.backgroundColor = "#042743";
  //       showAlert("Dark mode has been enabled", "success")
  //     }
  //     else {
  //       setMode('light')
  //       document.body.style.backgroundColor = "white";
  //       showAlert("light mode has been enabled", "success")
  //     }
  //   }


  return (
    <>
      <Header />
      {/* <Food />
      <Card />
      <Student name="Manish" age={25} isStudent={true} />
      <Student name="Anushka" age={24} isStudent={false} />
      <UserGreeting username="Manish" isLoggedIn={true} />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      <Button />
      <MyComponent />
      <Counter />
      < MyOnChangeComponent />
      <ColorPicker />
      <UpdaterFunction />
      <UpdateObjects />
      <UpdateArray />
      <UpdateArrayOfObjects />
      <Navbar title="Anushka" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> */}
      {/* <ToDoList /> */}
      <MyUseEffect />
      <Footer />
    </>
  )
}

export default App
