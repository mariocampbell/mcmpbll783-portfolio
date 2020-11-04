import React, { Component } from 'react';
import emailjs from 'emailjs-com'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

import { Spinner, StatusMessages } from '../atoms';

class FormContacts extends Component {

    state = {
        sending: false,
        submitText: 'Enviar',
        user_name: '',
        user_email:'',
        user_message: '',
        message_status: '',
        message_text: ''
    }

    onChangeInputs = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    doValidations = (event) => {
        event.preventDefault()
        this.setState({ sending: true, submitText: 'Enviando' })

        let formContact = event.target

        if(isEmail(this.state.user_email) || isEmpty(this.state.user_name) || isEmpty(this.state.user_message) ) {
            this.sendEmail(formContact)
        } else {
            console.log('Verifique los campos ingresados...');
        }
    }

    sendEmail = (formContact) => {

        emailjs.sendForm('zoho', 'template_qVgTcGoZ', formContact, 'user_eBJIfpAA4Gl3wv7Irkq7x')
            .then((result) => {
                console.log(result.text);
                this.setState({
                    sending: false,
                    submitText: 'Enviar',
                    user_name: '',
                    user_email:'',
                    user_message: '',
                    message_status: 'ok',
                    message_text: 'He recibido tu mensaje. Muchas gracias.'
                })
                formContact.reset()
                setTimeout(() => {
                    this.setState({
                        message_status: '',
                        message_text: ''
                    })
                }, 2000);
            }, (error) => {
                console.log(error.text);
                this.setState({
                    sending: false,
                    submitText: 'Enviar',
                    message_status: 'error',
                    message_text: 'Por favor, verifique los datos ingresados.'
                })
            });

    }

    render() {
        return (
            <form
            id='formulario'
            className='pt-10'
            onSubmit={ this.doValidations }
            >
                <div className='pb-8'>
                    <label className='block font-light' htmlFor="user_name">Nombre*</label>
                    <input
                        value={ this.state.user_name }
                        onChange={ this.onChangeInputs }
                        type="text"
                        id='user_name'
                        name='user_name'
                        className='w-full bg-transparent border-b border-primary-500 text-lg py-2'
                        required
                    />
                </div>
                <div className='pb-8'>
                    <label className='block font-light' htmlFor="user_email">Email*</label>
                    <input
                        value={ this.state.user_email }
                        onChange={ this.onChangeInputs }
                        type="email"
                        id='user_email'
                        name='user_email'
                        pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'
                        className='w-full bg-transparent border-b border-primary-500 text-lg py-2'
                        required
                        />
                </div>
                <div className='pb-8'>
                    <label className='block font-light' htmlFor="user_message">Mensaje*</label>
                    <textarea
                        value={ this.state.user_message }
                        onChange={ this.onChangeInputs }
                        type="text"
                        id='user_message'
                        name='user_message'
                        className='w-full bg-transparent border-b border-primary-500 text-lg py-2'
                        required
                    ></textarea>
                </div>
                <div className='flex flex-col items-center md:flex-row md:justify-between'>
                    <StatusMessages status={ this.state.message_status } message={ this.state.message_text } />
                    <button type='submit' className='bg-primary-500 flex justify-center items-center hover:bg-primary-600 transition duration-300 ease-in-out w-full md:w-auto px-16 py-2 text-white uppercase rounded-full focus:outline-none'>
                        { this.state.submitText }
                        <div className={`${ this.state.sending ? 'block' : 'hidden' } `}>
                            <Spinner width='w-6 ml-4' />
                        </div>
                    </button>
                </div>
            </form>
        );
    }
}

export default FormContacts;
