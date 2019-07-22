import React from 'react';
import DeliveryForm from './DeliveryForm';

import service from '../apis/service';

import history from '../history';

import Swal from 'sweetalert2';

class DeliveryEdit extends React.Component {
    mode="edit";

    state = {
        delivery: {}
    };

    componentDidMount(){
        let {id} = this.props.match.params;
        this.fetchDelivery(id);
    }

    async fetchDelivery(id){
        let {data} = await service.get(`/delivery/${id}`);
        this.setState({delivery: data});
    }

    onSubmit = async (fields) => {
        try {
            let {id} = this.props.match.params;
            await service.put(`/delivery/${id}`, fields);

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Se ha actualizado el registro con exito',
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

    render() {
        return (
            <div className="delivery-create__container">
                <div className="delivery-edit">
                    <h1 className="delivery-edit__title">Editar Delivery</h1>
                    <hr/>
                    <DeliveryForm mode={this.mode} data={this.state.delivery} onSubmitForm={this.onSubmit} onCancel={this.onCancel}/>
                </div>
            </div>
        )
    }
}

export default DeliveryEdit;