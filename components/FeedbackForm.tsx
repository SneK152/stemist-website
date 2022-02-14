import {FormikHelpers, useFormik} from 'formik'
import FeedbackValidator from '../lib/feedback.validator';

interface InputField {
    name: string;
    email: string;
    feedback: string;
}

export default function FeedBackForm() {

    let {handleChange, handleSubmit, values, errors, isSubmitting} = useFormik({
        initialValues: {
            name: '',
            email: '',
            feedback: ''
        },
        onSubmit: ({name, email, feedback}: InputField, {resetForm, setErrors, setSubmitting}: FormikHelpers<InputField>) => {
            setSubmitting(true)
            
            let errors = FeedbackValidator(name, email, feedback)
            
            if(Object.keys(errors).length != 0) {
                console.log(name, email, feedback, errors)
                setErrors(errors)
            } else {
                console.log(name, email, feedback, errors)
                resetForm()
            }

            setSubmitting(false)
        }
    })
    
    return (
        <div>
            <p>Please leave your feedback here</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Enter your name:</label>
                    <input 
                        name='name'
                        type='text'
                        onChange={handleChange}
                        value={values.name}
                    />
                    <p>{errors.name}</p>
                </div>
                <div>
                    <label htmlFor='email'>Enter your email:</label>
                    <input 
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={values.email}
                    />
                    <p>{errors.email}</p>
                </div>
                <div>
                    <label htmlFor='feedback'>Enter you feedback</label>
                    <textarea
                        onChange={handleChange}
                        value={values.feedback}
                        name='feedback'
                    />
                    <p>{errors.feedback}</p>
                </div>
                <button type='submit'>
                    {isSubmitting ? 'Submitting your feedback' : 'Submit your feedback'}
                </button>
            </form>
        </div>
    )
}