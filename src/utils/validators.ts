export const nameValidator = (name: string) => {
    if(!name.trim()) return "Обязательное поле"
    const re = new RegExp(/^[a-zа-яё\s\-]+$/, 'i')
    if(!name.match(re)) return "Введено не корректное значение"
    return null
}

export const emailValidator = (email: string) => {
    if(!email.trim()) return "Обязательное поле"
    const re = new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)
    if(!email.match(re)) return "Введено не корректное значение"
    return null
}

export const phoneValidator = (phone: string) => {
    if(!phone.trim()) return "Обязательное поле"
    const re = new RegExp(/^(\+?\d[\-]?)((\(?\d{3}\)?)|(\d{3})[\-]?)(\d\-?){6}\d$/)
    if(!phone.match(re)) return "Введено не корректное значение"
    return null
}

export const validate = (values: any) => {
    let errors: any = {}
    const nameError = nameValidator(values.name)
    const emailError = emailValidator(values.email)
    const phoneError = phoneValidator(values.phone)
    const languageError = !values.language && "Choose language"
    const confirmError = !values.confirm && "Accept the terms"
    if(nameError) errors.name = nameError
    if(emailError) errors.email = emailError
    if(phoneError) errors.phone = phoneError
    if(languageError) errors.language = languageError
    if(confirmError) errors.confirm = confirmError
    return errors
}