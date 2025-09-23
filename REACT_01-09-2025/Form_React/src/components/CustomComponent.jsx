import { useState } from 'react'

export const CustomComponent = ({props}) => {
    const [formData, setFormData] = useState(
        props.reduce((acc, current) => {
            console.log('current : ', current);
            acc[current.name] = '';
            return acc;
        },{})
    );
    console.log('formData : ', formData);
    
    return (
        <>
            <h1>CustomComponents</h1>
            {
                props.map((el) => (
                    <form key={el.name}>
                        <div>
                            <label htmlFor={el.label}>{el.label}</label>
                            <input
                                type={el.type}
                                placeholder={el.placeholder}
                                required={el.required}
                            />
                        </div>
                    </form>
                ))
            }
        </>
    )
}
