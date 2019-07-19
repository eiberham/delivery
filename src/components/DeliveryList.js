import React from 'react';
import Grid from './Grid';

import service from '../apis/service';

import history from '../history';

import _ from 'lodash';

class DeliveryList extends React.Component {
    state = {
        columns: [
            {field: 'id', label: 'Id', sort: 'asc', sortable: false, header: true, shown: false},
            {field: 'name', label: 'Nombre', sort: 'asc', sortable: true, header: true, shown: true},
            {field: 'address', label: 'Dirección', sort: 'asc', sortable: false, header: true, shown: true},
            {field: 'phone', label: 'Teléfono', sort: 'asc', sortable: false, header: true, shown: true},
            {field: 'actions', label: '', shown: false, header: true}
        ],
        data: [],
        filter: {
            name: '',
            address: '',
            sort: [],
        },
        total: 0,
        page: 1
    };

    componentDidMount(){
        this.fetchDeliveries(this.state.page);
    }

    async fetchDeliveries(page){
        let {data, headers} = await service.get(`/delivery${this.buildFilters()}_page=${page}&_limit=10`);
        this.setState({total: headers['x-total-count']});
        this.setState({data});
    }

    buildFilters(){
        let {name, address, sort} = this.state.filter;
        let filter = '';

        if(name !== '')
            filter += `?name_like=${name}`;

        if(address !== '')
           filter += (filter.length > 1) ? `&address_like=${address}` : `?address_like=${address}`;

        if(sort.length > 0){
            sort.forEach( item => {
                filter +=  (filter.length > 1)
                    ? `&_sort=${item.name}&_order=${item.sort}`
                    : `?_sort=${item.name}&_order=${item.sort}`
            });
        }

        return (filter.length > 1) ? `${filter}&` : '?';
    }

    onFilterFormSubmit = (event) => {
        event.preventDefault();
        this.fetchDeliveries();
    }

    onInputChange = (event) => {
        this.setState({ filter: {...this.state.filter, [event.target.id]: event.target.value}})
    }

    createNewDelivery(){
        history.push({
            pathname: '/delivery/create'
        });
    }

    onDeleteItem = (id) => {
        return new Promise( async(resolve, reject) => {
            try {
                await service.delete(`/delivery/${id}`);
                this.fetchDeliveries(this.state.page);
                resolve(true);
            }catch(error){
                reject(false);
            }
        })
    };

    handlePageClick = ({selected}) => {
        let page = selected + 1;
        this.setState({page});
        this.fetchDeliveries(page);
    };

    handleSortClick = (name, sort) => {
        let sorts = this.state.filter.sort;
        let merge = [];

        if(sorts.length > 0){
             merge = _.unionBy(
                [{name: name, sort: sort}],
                sorts,
                "name"
            );
        } else {
            merge.push({name: name, sort: sort});
        }

        this.setState({filter: {...this.state.filter, ['sort']: merge }}, () => {
            this.fetchDeliveries(this.state.page)
        });

    };

    handleEditClick = (id) => {
        history.push({
            pathname: `/delivery/${id}`
        });
    };

    render(){
        return (
            <div className="delivery-list">
                <h1 className="delivery-list__title mb-2">Listado de Deliveries</h1>
                <button className="btn btn-primary delivery-list__button-create mb-2" onClick={this.createNewDelivery}>
                    Nuevo Delivery
                </button>
                <hr/>
                <div className="delivery-list__filter">
                    <form className="form-inline" onSubmit={this.onFilterFormSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="name" className="col-sm-3 col-form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={this.onInputChange}
                                value={this.state.filter.name}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="address" className="col-sm-3 col-form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                onChange={this.onInputChange}
                                value={this.state.filter.address}
                            />
                        </div>
                        <button className="btn btn-lg bg-transparent" type="submit">
                            <i className="material-icons">search</i>
                        </button>
                    </form>
                </div>
                <Grid
                    columns={this.state.columns}
                    data={this.state.data}
                    total={this.state.total}
                    onDeleteItem={this.onDeleteItem}
                    handlePageClick={this.handlePageClick}
                    handleSortClick={this.handleSortClick}
                    handleEditClick={this.handleEditClick}
                />
            </div>
        )
    }
}

export default DeliveryList;