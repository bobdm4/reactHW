import React, { Component } from 'react';
import pets from '../../sevices/pets.json';
import PetsId from '../../components/PetsId/PetsId';
import { Route } from 'react-router-dom';
import PetsAbout from '../../components/PetsAbout/PetsAbout';


// const getIdFromProps = props => props.match.params.id;

class Pets extends Component {
    state = {
        items: [],
    }
    componentDidMount() {
        this.setState({
            items: pets,
        })
    }
    render() {
        const { items } = this.state;
        // const { id } = this.props;
        return (
            <div>
                <PetsId items={items} />
                <Route path={`${this.props.match.path}/:id`} component={PetsAbout} />
            </div>
        );
    }
}


export default Pets;