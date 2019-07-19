import React from 'react';

import {
    Input
} from 'formsy-react-components';

class CommercialContact extends React.Component {

    getInputName(name){
        return `${this.props.inputPrefix}_${name}`;
    }

    render(){
        return (
            <div className="commercial-contact">
                <h1>Contacto Comercial</h1>
                <hr/>
                <div className="commercial-contact__wrapper">
                    <fieldset className="mt-4">
                        <Input
                            name={this.getInputName('name')}
                            id={this.getInputName('name')}
                            value=""
                            label="Nombre"
                            type="text"
                            placeholder=""
                            labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                            elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                            help="Este campo es requerido"
                            required
                        />
                        <Input
                            name={this.getInputName('lastname')}
                            id={this.getInputName('lastname')}
                            value=""
                            label="Apellido"
                            type="text"
                            placeholder=""
                            labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                            elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                            help="Este campo es requerido"
                            required
                        />
                        <Input
                            name={this.getInputName('phone')}
                            id={this.getInputName('phone')}
                            value=""
                            label="Teléfono"
                            type="text"
                            placeholder=""
                            labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                            elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                            help="Este campo es requerido"
                            required
                        />
                        <Input
                            name={this.getInputName('email')}
                            id={this.getInputName('email')}
                            value=""
                            label="Email"
                            type="email"
                            placeholder=""
                            labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                            elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                            help="Este campo es requerido"
                            required
                            validations="isEmail"
                            validationErrors={{
                                isEmail: 'This doesn’t look like a valid email address.',
                            }}
                        />
                    </fieldset>
                </div>

            </div>
        )
    }
};

export default CommercialContact;