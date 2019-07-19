import React from 'react';

class Cell extends React.Component {
    state = {
        sort: 'asc',
        icon: 'arrow_drop_up'
    };

    renderSortButton(){
        if(this.props.sortable)
            return (
                <i className="material-icons" data-id={this.props.name} onClick={() => this.onSortClick(this.props.name)}>{this.state.icon}</i>
            );
        return <span></span>
    }
    onSortClick = (name) => {
        let sort = this.state.sort;
        sort = (sort === 'asc') ? 'desc' : 'asc';

        let icon = this.state.icon;
        icon = (icon === 'arrow_drop_up')
            ? 'arrow_drop_down'
            : 'arrow_drop_up';

        this.setState({sort, icon}, () => this.props.handleSortClick(name, sort));
    };
    renderCell(){
        if(this.props.header)
            return (
                <th key={this.props.name} className={(this.props.shown ? 'd-table-cell' : 'd-none')}>{this.props.label}
                    {
                        this.renderSortButton()
                    }
                </th>

            );
        else
            return <td key={this.props.name} className={(this.props.shown ? 'd-table-cell' : 'd-none')}>{this.props.label}</td>;
    }

    render(){
        return this.renderCell()
    }
}

export default Cell;