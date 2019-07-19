import React, {Component} from 'react';
import AdministrativeData from './AdministrativeData';

import service from '../apis/service';

import history from '../history';

import Swal from 'sweetalert2';


class DeliveryCreate extends Component {
    mode = 'create';

    onSubmit = async (fields) => {
        try {
            await service.post(`/delivery`, fields);

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Se ha creado el registro con exito',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                history.push({
                    pathname: '/delivery'
                });
            });
        }catch(error){
            console.error(error);
        }

    };

    onCancel = () => {
        history.push({
            pathname: '/delivery'
        });
    };

    render(){
        return (
            <div>
                <h1>Crear Delivery</h1>
                <AdministrativeData mode={this.mode} onSubmitForm={this.onSubmit} onCancel={this.onCancel}/>
            </div>
        )
    }
}

export default DeliveryCreate;