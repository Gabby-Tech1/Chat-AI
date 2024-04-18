import React, { createContext, useState } from 'react'
import runChat from '../Config/GTchat'

export const Context = createContext()

const GTContext = (props) => {

  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState('')
  const [prevPrompt, setPrevPrompt] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [resultData, setResultData] = useState("")

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev=>prev+nextWord)
    }, 75*index)
  }

  const newChat = () => {
    setIsLoading(false)
    setShowResults(false)
  }
  const onSent = async (prompt) => {

    setResultData("")
    setIsLoading(true)
    setShowResults(true)
    let response
    if (prompt !== undefined) {
      response = await runChat(prompt)
      setRecentPrompt(prompt)
      
    } else {
      setPrevPrompt(prev=>[...prev,input])
      setRecentPrompt(input)
      response = await runChat(input)
    }
    
    let responseArray = response.split("**")
    let newResponse = "" ;
    for(let i=0; i<responseArray.length; i++){
      if (i === 0 || i%2 !== 1) {
        newResponse += responseArray[i];
      }else{
        newResponse += "<b>"+responseArray[i]+"</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponseArray = newResponse2.split(" ")
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord+" ")
      
    }
    setIsLoading(false)
    setInput("")
  }

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    isLoading,
    resultData,
    input,
    setInput,
    newChat
  }


  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default GTContext