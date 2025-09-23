import { CustomComponent } from './CustomComponent';

export const Form = () => {
    const field = [
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
    return (
        <>
            <CustomComponent props={field} />
        </>
    )
}
