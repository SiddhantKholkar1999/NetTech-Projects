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
    console.log('setFormData : ', setFormData);
    
    //handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <h1>CustomComponents</h1>
            <form id='form' onSubmit={handleSubmit}>
                {
                    props && props.map((el, i) => (
                        <div key={i}>
                            <label htmlFor={el.label}>{el.label}</label>
                            <input
                                type={el.type}
                                placeholder={el.placeholder}
                                required={el.required}
                            />
                        </div>
                    ))
                }
            </form>
        </>
    )
}
