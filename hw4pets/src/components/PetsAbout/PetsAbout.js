import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../sevices/pets.json';
import style from './Pets.module.css';

const getIdFromProps = props => props.match.params.id;
class PetsAbout extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const idItem = getIdFromProps(this.props);
    const items = pets.filter(item => item.id === idItem);
    this.setState({ items });
  }

  goBack = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <button className={style.btn} type="button" onClick={this.goBack}>
          goBack
        </button>
        {items.map(item => (
          <div key={item.id} className={style.list}>
            <img
              className={style.img}
              src={item.image}
              height="300"
              width="300"
              alt={item.breed}
            />
            <div>
              <h3>Name: {item.name} </h3>
              <p>age: {item.age}</p>
              <p>color: {item.color}</p>
              <p>breed: {item.breed}</p>
              <p>gender: {item.gender}</p>
            </div>
            <p>description: {item.description}</p>
          </div>
        ))}
      </>
    );
  }
}
PetsAbout.propTypes = {
  history: PropTypes.string.isRequired,
};
export default PetsAbout;
