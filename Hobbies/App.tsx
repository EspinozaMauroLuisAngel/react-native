import React from "react"
import { StatusBar } from "react-native"
import StackNavigation from "./src/navigation/StackNavigation"

const App = () => {
  return (
    <>
    <StatusBar animated={ true } barStyle= "dark-content"/>
    <StackNavigation/>
    </>
  )
}

export default App  
