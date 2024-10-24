document.addEventListener('DOMContentLoaded',()=>{
    const addForm=document.querySelector('form.add'),
          addInput=addForm.querySelector('.adding__input'),
          addInput_2=addForm.querySelector(".adding__input_2"),
          resultDisplay=document.querySelector(".result"),
          resultDisplay_1=document.querySelector(".result_1"),
          resultDisplay_2=document.querySelector(".result_2"),
          resultDisplay_3=document.querySelector(".result_3"),
          buttonDisplay=addForm.querySelector('button'),
          signDisplay=addForm.querySelector('.sign');
    buttonDisplay.addEventListener('click',(event)=>{
        event.preventDefault();
        resultDisplay.textContent = '';
        resultDisplay_1.textContent = '';
        resultDisplay_2.textContent = '';
        resultDisplay_3.textContent = '';
        const newValue=parseInt(addInput.value,10);
        const newValue2=parseInt(addInput_2.value,10);
        const operator=signDisplay.value;
        switch(operator){
            case "*":
                const result=MultiplicationOfDigits(newValue,newValue2);
                resultDisplay.textContent=`Result:${result}`;
                break;
            case "+":
                const result_1=SumOfDigits(newValue,newValue2);
                resultDisplay_1.textContent=`Result:${result_1}`;
                break;
            case "-":
                const result_2=DifferenceOfDigits(newValue,newValue2);
                resultDisplay_2.textContent=`Result:${result_2}`;
                break;
            case "/":
                const result_3=DivisionOfDigits(newValue,newValue2);
                resultDisplay_3.textContent=`Result:${result_3}`;
                break;
            default:
                resultDisplay.textContent='Please enter valid value';
        }
    })
    const SumOfDigits=(newValue,newValue2)=>{
        return newValue+newValue2;
    }
    const MultiplicationOfDigits=(newValue,newValue2)=>{
        return newValue*newValue2;
    }
    const DifferenceOfDigits=(newValue,newValue2)=>{
        return newValue-newValue2;
    }
    const DivisionOfDigits=(newValue,newValue2)=>{
        return newValue/newValue2;
    }
})
