import React, { Component } from 'react';
import Counters from './components/Counters/Counters';
import NavBar from './components/NavBar/NavBar';
import './main.scss';

class App extends Component {
  state = {
    cards: [0, 0, 0, 0],
    numberOfActive: 0,
  };

  // state = {
  //   itemCounters: 0,
  //   cards: [
  //     {
  //       id: 1,
  //       value: 0,
  //     },
  //     {
  //       id: 2,
  //       value: 0,
  //     },
  //     {
  //       id: 3,
  //       value: 0,
  //     },
  //     {
  //       id: 4,
  //       value: 0,
  //     },
  //   ],
  // };

  // handleDelete = (id) => {
  //   const updateCards = this.state.cards.filter((card) => card.id !== id);
  //   this.setState({
  //     cards: updateCards,
  //   });
  // };

  // handleAdd = (action, id) => {
  //   if (action === 'add') {
  //     const card = this.state.cards.find((card) => card.id === id);
  //     card.value = card.value + 1;

  //     const cards = this.state.cards;
  //     const filterCards = cards.filter((c) => c.id !== card.id);

  //     this.setState({
  //       cards: [card, ...filterCards],
  //     });
  //   }
  // };

  // handleSubtract = (action, id) => {
  //   if (action === 'subtract') {
  //     const card = this.state.cards.find((card) => card.id === id);
  //     card.value = card.value - 1;

  //     const cards = this.state.cards;

  //     const deleteCards = cards.filter((c) => c.id !== card.id);
  //     this.setState({
  //       crads: deleteCards,
  //     });
  //   }
  // };

  handleClick = (action, index) => {
    const cards = this.state.cards;
    console.log('cards', cards);

    if (action === 'add') {
      cards[index]++;
      this.setState({
        cards: cards,
      });
    }
    if (action === 'subtract') {
      cards[index]--;
      this.setState({
        cards: cards,
      });
    }

    if (action === 'delete') {
      const cardsNotDeleted = this.state.cards;
      cardsNotDeleted.splice(index, 1);

      this.setState({
        cards: cardsNotDeleted,
      });
    }

    this.count();
  };

  count = () => {
    const numberOfActive = this.state.cards.filter((e) => Boolean(e)).length;
    // const cards = this.state.cards;
    // if (cards[element].length >= 0) {
    this.setState({
      numberOfActive: numberOfActive,
    });
    // }
  };

  render() {
    return (
      <div>
        <NavBar numberOfActive={this.state.numberOfActive} />
        <Counters
          handleClick={this.handleClick}
          cards={this.state.cards}
          // handleAdd={this.handleAdd}
          // handleDelete={this.handleDelete}
          // handleSubtract={this.handleSubtract}
        />
      </div>
    );
  }
}
export default App;
