import { useFormik } from 'formik';
import React from 'react';
import {Link} from "react-router-dom"
import './static/styles/App.scss';
import MyCheckbox from './components/MyCheckbox';
import MyInput from './components/MyInput';
import MySelect from './components/MySelect';
import {validate} from "./utils/validators"

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      language: "",
      confirm: false
    },
    validateOnMount: true,
    validate,
    onSubmit: (values) => {
      console.log('values', values)
    },

  })

  return (
    <div className="App">
      <div className="title">Регистрация</div>
      <p className="subtitle">Уже есть аккаунт? <Link to="#" className="link">Войти</Link></p>
      <form onSubmit={formik.handleSubmit}>
        <MyInput 
          label="Имя"
          placeholder="Введите Ваше имя"
          name="name"
          formik={formik}
        />
        <MyInput 
          label="Email"
          placeholder="Введите Ваш email"
          name="email"
          formik={formik}
        />
        <MyInput 
          label="Номер телефона"
          placeholder="Введите номер телефона"
          name="phone"
          formik={formik}
        />
        <MySelect 
          label="Язык"
          placeholder="Язык"
          name="language"
          values={['Русский', 'Английский', 'Китайский', 'Испанский']}
          formik={formik}
        />
        <MyCheckbox
          label={<p>Принимаю <Link to="#" className="link">условия</Link> использования</p>}
          formik={formik}
          name="confirm"
        />
        <button className="button" type="submit" style={{marginTop: "3px"}}
          disabled={!!Object.keys(formik.errors).length}
        >Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;
