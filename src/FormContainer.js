import React, {forwardRef, useRef, useState, useImperativeHandle} from 'react';


const Input = forwardRef((_, ref) => {
    const [value, setValue] = useState('')
    useImperativeHandle(ref, () => ({ value }), [value])
  
    return <input value={value} onChange={(e) => setValue(e.target.value)} />
});

const FormContainer = () => {
    const nameRef = useRef('')
    const ageRef = useRef('')
    const addressRef = useRef('')
  
    return (
      <section>
        <Input ref={nameRef} />
        <Input ref={ageRef} />
        <Input ref={addressRef} />
        <button onClick={() => alert(nameRef.current.value)}>Click</button>
      </section>
    )
}

export default FormContainer;

