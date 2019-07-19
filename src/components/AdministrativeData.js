import React, { Component } from 'react';
import CommercialContact from './CommercialContact';

import {
    Input,
    Textarea,
    Form,
} from 'formsy-react-components';


class AdministrativeData extends Component {
    state = {
        form: {
            name: '',
            phone: '',
            description: '',
            specialty: '',
            address: '',
            schedule_init: '',
            schedule_end: ''
        }
    };

    componentDidMount(){
        if(this.props.mode === 'edit'){
            console.log("si pasa marico");
            let {formData} = this.props;
            console.log("formData: ", formData);
            this.setState({form: formData});
        }
    }

    onInputChange = (name, value) => {
        this.setState({[name]: value});
    };

    render(){
        return (
            <div className="admin-data">
                <h1>Datos Administrativos</h1>
                <hr/>

                <Form onValidSubmit={(data) => { this.props.onSubmitForm(data)}}>
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
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
                            changeCallback={this.onInputChange}
                            required
                            addonBefore={<span className="input-group-text">Cierre</span>}
                        />

                    </fieldset>

                    <div className="row">
                        <div className="col">
                            <CommercialContact inputPrefix="main" showCheckbox={false}/>
                        </div>
                        <div className="col">
                            <CommercialContact inputPrefix="other" showCheckbox={true}/>
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
            </div>
        )
    }
}

export default AdministrativeData;