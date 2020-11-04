import React from 'react'
/*
status: message => 'border-primary-500 text-gray-600'
status: info => 'text-primary-600 bg-primary-100 border-primary-600'
status: ok => 'text-green-600 bg-green-100 border-green-600'
status: warning => 'text-yellow-600 bg-yellow-100 border-yellow-600'
status: error => 'text-red-600 bg-red-100 border-red-600'
*/

class StatusMessages extends React.Component {

    showMessage = (status, message='') => {

        switch(status) {

            case 'info':
                return(
                    <div className="mb-6 md:mb-0">
                        <p className='text-sm py-2 px-4 shadow border-l-2 text-primary-600 bg-primary-100 border-primary-600' >
                            <i className="fas fa-info mr-2" ></i> { message === '' ? 'Su solicitud ha sido enviada.' : message }
                        </p>
                    </div>
                )

            case 'ok':
                return(
                    <div className="mb-6 md:mb-0">
                        <p className='text-sm py-2 px-4 shadow border-l-2 text-green-600 bg-green-100 border-green-600' >
                            <i className="fas fa-check mr-2" ></i> { message === '' ? 'Se procesaron correctamente los datos.' : message }
                        </p>
                    </div>
                )

            case 'warning':
                return(
                    <div className="mb-6 md:mb-0">
                        <p className='text-sm py-2 px-4 shadow border-l-2 text-yellow-600 bg-yellow-100 border-yellow-600' >
                            <i className="fas fa-exclamation mr-2" ></i> { message === '' ? 'Debe revisar los campos.' : message }
                        </p>
                    </div>
                )

            case 'error':
                return(
                    <div className="mb-6 md:mb-0">
                        <p className='text-sm py-2 px-4 shadow border-l-2 text-red-600 bg-red-100 border-red-600' >
                            <i className="fas fa-exclamation mr-2" ></i> { message === '' ? 'Debe completar todos los campos solicitados.' : message }
                        </p>
                    </div>
                )

            default:
                return(
                    <div className="mb-6 md:mb-0">
                        <p className='text-sm py-2 px-4 shadow border-l-2 border-gray-500 text-gray-600' >
                            <i className="fas fa-asterisk mr-2" ></i> { message === '' ? 'Campos requeridos y obligatorios.' : message }
                        </p>
                    </div>
                )
        }
    }

   render() {
        return(
            <div>
                { this.showMessage(this.props.status, this.props.message) }

            </div>
        )
   }
}

export default StatusMessages
