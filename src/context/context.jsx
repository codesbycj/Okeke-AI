import { createContext, useState } from "react";
import main from '../assets/config/gemini'


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayParam = (index,nextWord) => {
        setTimeout(() => {
            setResultData(prev=>prev+nextWord);
        }, 75*index);
    }

    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPreviousPrompt(prev=>[...prev,input])
        const response = await main(input);
        let responseArray = response.split("**")
        let newArray = " "; 
        for (let i = 0; i < responseArray.length; i++) {
           if (i === 0 || i%2 !== 1) {
            newArray += responseArray[i]
           } else {
            newArray += `<b>${responseArray[i]}</b>`
           }
        } 

        let newResponse = newArray.split("*").join('<br />');

        // const newArray = response.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        
       let newResponseArray = newResponse.split(" ");

       for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i]
        delayParam(i, nextWord + " ")
       }
        setLoading(false);
        setInput('');
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider