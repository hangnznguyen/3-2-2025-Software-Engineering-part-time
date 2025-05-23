import React, { useState } from 'react'
function useFormInput(initialValue) {
    // our custom hook still uses useState internally
    const [value, setValue] = useState(initialValue);
    
    // generic handler function to update state
    function handleChange(e) {
    setValue(e.target.value);
    }
    
    // generic function to reset input value
    const reset = () => setValue('');
    
    // object containing the state value and handler function
    // can be unpacked to set as props for input element
    const inputProps = {
    value: value,
    onChange: handleChange
    };
    
    // returns data to be used by a component
    return [inputProps, reset];
    }
    
    // Name this file useFormInput.jsx and store in a separate folder
    // to your components, typically called 'hooks'
    export default useFormInput;