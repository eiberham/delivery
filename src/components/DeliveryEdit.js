import React from 'react';
import AdministrativeData from './AdministrativeData';

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
            <div>
                <h1>Crear Delivery</h1>
                <AdministrativeData mode={this.mode} formData={this.state.delivery} onSubmitForm={this.onSubmit} onCancel={this.onCancel}/>
            </div>
        )
    }
}

export default DeliveryEdit;