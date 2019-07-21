import React from 'react';
import Cell from './Cell';
import ReactPaginate from 'react-paginate';
import {filter, map, pick, chain} from 'lodash';

import Swal from 'sweetalert2';

class Grid extends React.Component {
    state = {
        columns: [],
        data: []
    };

    componentWillReceiveProps({data, total}) {
        this.setState({pageCount: Math.ceil(total / 10)});
    }

    renderHead(){
        let {columns} = this.props;
        if(columns.length < 1) return <div></div>;

        return columns.map( column => {
            return <Cell
                     name={column.field}
                     label={column.label}
                     sort={column.sort}
                     sortable={column.sortable}
                     header={column.header}
                     handleSortClick={this.onSortClick}
                     key={column.field}
                     shown={column.shown}
            />
        });
    }

    renderBody(){
        let columns = chain(filter(this.props.columns, {shown: true})).map('field').value();
        let rows = map(this.props.data, item => pick(item, ['id', ...columns]));

        return rows.map( row => {
            return (
                <tr key={row.name}>
                    {
                        columns.map(item => {
                            return (
                                <Cell
                                    name={row[item]}
                                    label={row[item]}
                                    header={false}
                                    shown={true}
                                    key={row[item]}
                                />
                            )
                        })
                    }
                    <td>
                        <button className="btn btn-lg delivery-list__button-delete">
                            <i className="material-icons" onClick={() => this.onDeleteClick(row.id, row.name)}>delete_outline</i>
                        </button>
                        <button className="btn btn-lg delivery-list__button-edit" onClick={() => this.onEditClick(row.id)}><i className="material-icons">edit</i></button>
                    </td>
                </tr>
            )
        })
    }

    onPageClick = (event) => {
        this.props.handlePageClick(event);
    };

    onSortClick = (name, sort) => {
        this.props.handleSortClick(name, sort);
    };

    onDeleteClick = (id, name) => {
        Swal.fire({
            title: `¿Está seguro de borrar ${name} ?`,
            text: `Una vez realizada esta operación no se podrá deshacer`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: `Aceptar`,
            cancelButtonText: `Cancelar`
        }).then( async (result) => {
            if (result.value) {
                let deleted = await this.props.onDeleteItem(id);
                if(deleted){
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Se ha borrado el registro con exito',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };

    onEditClick = (id) => {
        this.props.handleEditClick(id);
    };

    render(){
        return (
            <div className="grid">
                <table className="table">
                    <thead>
                        <tr>
                            {this.renderHead()}
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderBody()}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.onPageClick}
                    containerClassName={'pagination justify-content-center'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

export default Grid;