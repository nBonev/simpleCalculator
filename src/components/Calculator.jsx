import { useState } from "react"

export default function Calculator() {
    let [num, setNum] = useState('');
    let [isButtonDisabled, setButtonDisabled] = useState(false);

    const buttonsHandler = (value) => {
        if(value !== '/' && value !== '*' && value !== '-' && value !== '+') {
            setNum(num + value)
        }else {
            setNum(num + value)
            setButtonDisabled(isButtonDisabled = true);
        }

    }

    const eraseHandler = (value) => {
        setNum(num = value)

    }

    const equalsHandler = () => {
        if(num.includes('/')) {
            const [firstNumber, secondNumber] = num.split('/');
            let result = Number(firstNumber) / Number(secondNumber);
            setNum(String(result))
            setButtonDisabled(isButtonDisabled = false);
        }else if (num.includes('*')) {
            const [firstNumber, secondNumber] = num.split('*');
            let result = Number(firstNumber) * Number(secondNumber);
            setNum(String(result))
            setButtonDisabled(isButtonDisabled = false);
        }else if (num.includes('+')) {
            const [firstNumber, secondNumber] = num.split('+');
            let result = Number(firstNumber) + Number(secondNumber);
            setNum(String(result))
            setButtonDisabled(isButtonDisabled = false);
        }else if (num.includes('-')) {
            const [firstNumber, secondNumber] = num.split('-');
            let result = Number(firstNumber) - Number(secondNumber);
            setNum(String(result))
            setButtonDisabled(isButtonDisabled = false);
        }
        
        
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <table id="calc"> 
        <tr> 
            <td colSpan="3"> 
                <input type="text" id="result" value={num} onChange={handleChange}/> 
            </td> 
            <td><input id="operators" onClick={() => eraseHandler('')} type="button" value="c" /></td> 
        </tr> 
  
        <tr> 
            <td><input onClick={() => buttonsHandler(1)} type="button" value="1" /></td> 
            <td><input onClick={() => buttonsHandler(2)} type="button" value="2" /></td> 
            <td><input onClick={() => buttonsHandler(3)} type="button" value="3" /></td>
            {isButtonDisabled ? <td><input id="operators" disabled onClick={() => buttonsHandler('/')} type="button" value="/" /></td> 
                              : <td><input id="operators" onClick={() => buttonsHandler('/')} type="button" value="/" /></td> } 
            
        </tr> 
        <tr> 
            <td><input onClick={() => buttonsHandler(4)} type="button" value="4" /></td> 
            <td><input onClick={() => buttonsHandler(5)} type="button" value="5" /></td> 
            <td><input onClick={() => buttonsHandler(6)} type="button" value="6" /></td> 
            {isButtonDisabled ? <td><input id="operators" disabled onClick={() => buttonsHandler('*')} type="button" value="*" /></td> 
                              : <td><input id="operators" onClick={() => buttonsHandler('*')} type="button" value="*" /></td> } 
        </tr> 
        <tr> 
            <td><input onClick={() => buttonsHandler(7)} type="button" value="7" /></td> 
            <td><input onClick={() => buttonsHandler(8)} type="button" value="8" /></td> 
            <td><input onClick={() => buttonsHandler(9)} type="button" value="9" /></td>
            {isButtonDisabled ? <td><input id="operators" disabled onClick={() => buttonsHandler('-')} type="button" value="-" /></td> 
                              : <td><input id="operators" onClick={() => buttonsHandler('-')} type="button" value="-" /></td> }  
        </tr> 
        <tr> 
            <td><input onClick={() => buttonsHandler(0)} type="button" value="0" /></td>
            <td><input onClick={() => buttonsHandler('.')} type="button" value="." /></td>  
            {isButtonDisabled ? <td><input id="operators" onClick={equalsHandler} type="button" value="=" /></td> 
                              : <td><input id="operators" disabled onClick={equalsHandler} type="button" value="=" /></td> }
            {isButtonDisabled ? <td><input id="operators" disabled onClick={() => buttonsHandler('+')} type="button" value="+" /></td> 
                              : <td><input id="operators" onClick={() => buttonsHandler('+')} type="button" value="+" /></td> }  
        </tr> 
    </table> 
        </>
    )
}