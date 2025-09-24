import { CustomComponent } from './CustomComponent';

export const Form = () => {
    const fields = [
        {
            name: "username",
            placeholder: "enter your username",
            type: "text",
            label: "username",
            required: true
        },
        {
            name: "email",
            placeholder: "enter your email",
            type: "email",
            label: "email",
            required: true
        },
        {
            name: "password",
            placeholder: "enter your password",
            type: "password",
            label: "password",
            required: true
        },
        {
            name: "confirmPassword",
            placeholder: "enter your password",
            type: "password",
            label: "confirmPassword",
            required: true
        },
        {
            name: "Phone",
            placeholder: "enter you Phone",
            type: "tel",
            label: "Phone",
            required: true
        }
    ];

    const handleFormSubmit = (data) => {
        console.log('Form Submitted:', data);
    };

    return (
        <>
            <div>
                <CustomComponent
                    fields = {fields} 
                    onSubmit={handleFormSubmit}
                    buttonText = "Register"/>
            </div>
        </>
    )
}
