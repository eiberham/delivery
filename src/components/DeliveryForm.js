import React, { Component } from 'react';
import CommercialContact from './CommercialContact';

import {
    Input,
    Textarea,
    Checkbox,
    Form,
} from 'formsy-react-components';


class DeliveryForm extends Component {
    state = {
        form: {
            name: '',
            phone: '',
            description: '',
            specialty: '',
            address: '',
            schedule_init: '',
            schedule_end: '',
            main_commercial_contact_name: '',
            main_commercial_contact_lastname: '',
            main_commercial_contact_phone: '',
            main_commercial_contact_email: '',
            checkbox_other_commercial_contact: false,
            other_commercial_contact_name: '',
            other_commercial_contact_lastname: '',
            other_commercial_contact_phone: '',
            other_commercial_contact_email: '',
        }
    };

    componentWillReceiveProps(props){
        let {mode, data} = props;

        if(mode === 'edit')
            this.setState({form: data});
    }

    onChange = form => {
        this.setState({form})
    };

    renderForm(){
        return (
            <Form onValidSubmit={(data) => { this.props.onSubmitForm(data)}} onChange={this.onChange}>
                <fieldset>

                    <Input
                        name="name"
                        id="name"
                        label="Nombre"
                        type="text"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-2']}
                        help="Este campo es requerido"
                        value={this.state.form.name}
                        required
                    />

                    <Input
                        name="phone"
                        id="phone"
                        label="Teléfono"
                        type="text"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-2']}
                        help="Este campo es requerido"
                        value={this.state.form.phone}
                        updateOnChange={true}
                        required
                        validations="maxLength:50"
                        validationErrors={{
                            maxLength: 'Sólo se permiten 50 caracteres',
                        }}
                    />

                    <Textarea
                        rows={3}
                        cols={40}
                        name="description"
                        label="Descripción"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-4']}
                        help="Este campo es requerido"
                        value={this.state.form.description}
                        validations="maxLength:1000"
                        validationErrors={{
                            maxLength: 'Sólo se permiten 1000 caracteres',
                        }}
                        required
                    />

                    <Textarea
                        rows={3}
                        cols={40}
                        name="specialty"
                        label="Especialidades"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-4']}
                        help=""
                        value={this.state.form.specialty}
                        validations="maxLength:500"
                        validationErrors={{
                            maxLength: 'Sólo se permiten 500 caracteres',
                        }}
                    />

                    <Input
                        name="address"
                        id="address"
                        label="Dirección"
                        type="text"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-2']}
                        help="Este campo es requerido"
                        value={this.state.form.address}
                        required
                        validations="maxLength:200"
                        validationErrors={{
                            maxLength: 'Sólo se permiten 200 caracteres',
                        }}
                    />

                    <Input
                        name="schedule_init"
                        id="schedule_init"
                        label="Horario de atención"
                        type="time"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-1']}
                        help="Este campo es requerido"
                        value={this.state.form.schedule_init}
                        required
                        addonBefore={<span className="input-group-text">Inicio</span>}
                    />

                    <Input
                        name="schedule_end"
                        id="schedule_end"
                        label=""
                        type="time"
                        placeholder=""
                        labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                        elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-1']}
                        help="Este campo es requerido"
                        value={this.state.form.schedule_end}
                        required
                        addonBefore={<span className="input-group-text">Cierre</span>}
                    />

                </fieldset>

                <div className="row">
                    <div className="col">
                        <CommercialContact>
                            <fieldset className="mt-4">
                                <Input
                                    name="main_commercial_contact_name"
                                    id="main_name"
                                    label="Nombre"
                                    type="text"
                                    value={this.state.form.main_commercial_contact_name}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    help="Este campo es requerido"
                                    required
                                />
                                <Input
                                    name="main_commercial_contact_lastname"
                                    id="main_lastname"
                                    label="Apellido"
                                    type="text"
                                    value={this.state.form.main_commercial_contact_lastname}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    help="Este campo es requerido"
                                    required
                                />
                                <Input
                                    name="main_commercial_contact_phone"
                                    id="main_phone"
                                    label="Teléfono"
                                    type="text"
                                    value={this.state.form.main_commercial_contact_phone}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    help="Este campo es requerido"
                                    required
                                />
                                <Input
                                    name="main_commercial_contact_email"
                                    id="main_email"
                                    label="Email"
                                    type="email"
                                    value={this.state.form.main_commercial_contact_email}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    help="Este campo es requerido"
                                    required
                                    validations="isEmail"
                                    validationErrors={{
                                        isEmail: 'El email ingresado es incorrecto',
                                    }}
                                />
                            </fieldset>
                        </CommercialContact>
                    </div>
                    <div className="col">
                        <CommercialContact>
                            <fieldset className="mt-4">
                                <Checkbox
                                    name="checkbox_other_commercial_contact"
                                    value={false}
                                    label=""
                                    valueLabel=" Idem contacto administrativo"
                                />
                                <Input
                                    name="other_commercial_contact_name"
                                    id="other_name"
                                    label="Nombre"
                                    type="text"
                                    value={this.state.form.other_commercial_contact_name}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    required={this.state.checkbox_other_commercial_contact}
                                    help=""
                                />
                                <Input
                                    name="other_commercial_contact_lastname"
                                    id="other_lastname"
                                    label="Apellido"
                                    type="text"
                                    value={this.state.form.other_commercial_contact_lastname}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    required={this.state.checkbox_other_commercial_contact}
                                    help=""
                                />
                                <Input
                                    name="other_commercial_contact_phone"
                                    id="other_phone"
                                    label="Teléfono"
                                    type="text"
                                    value={this.state.form.other_commercial_contact_phone}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    required={this.state.checkbox_other_commercial_contact}
                                    help=""
                                />
                                <Input
                                    name="other_commercial_contact_email"
                                    id="other_email"
                                    label="Email"
                                    type="email"
                                    value={this.state.form.other_commercial_contact_email}
                                    labelClassName={[{'col-sm-3': false}, 'col-sm-2']}
                                    elementWrapperClassName={[{'col-sm-9': false}, 'col-sm-6']}
                                    required={this.state.checkbox_other_commercial_contact}
                                    help=""
                                    validations="isEmail"
                                    validationErrors={{
                                        isEmail: 'El email ingresado es incorrecto',
                                    }}
                                />
                            </fieldset>
                        </CommercialContact>
                    </div>
                </div>


                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                        <input
                            className="btn btn-secondary"
                            type="reset"
                            value={`Cancelar`}
                            onClick={() => this.props.onCancel()}
                        />{' '}

                        <input
                            className="btn btn-primary"
                            formNoValidate
                            type="submit"
                            value={`Guardar`}
                        />
                    </div>
                </div>
            </Form>
        )
    }

    render(){
        return (
            <div className="admin-data">
                <h1>Datos Administrativos</h1>
                <hr/>
                {this.renderForm()}
            </div>
        )
    }
}

export default DeliveryForm;