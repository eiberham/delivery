import React, {Component} from 'react';
import DeliveryForm from './DeliveryForm';

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
            <div className="delivery-create">
                <div className="delivery-create__header">
                    <h1 className="delivery-create__title">Nuevo Delivery</h1>
                </div>
                <DeliveryForm mode={this.mode} onSubmitForm={this.onSubmit} onCancel={this.onCancel}/>
            </div>
        )
    }
}

export default DeliveryCreate;