export default function FeedbackValidator<T>(name: string, email: string, feedback: string) {
    const errors: T | any = {}
            
    if(feedback.length === 0) {
            errors.feedback = 'Invalid Feedback Length'
    }

    if(name.length === 0) {
        errors.name = 'Invalid name length'
    }
    
    return errors
}