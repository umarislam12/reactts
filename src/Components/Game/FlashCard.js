import React, { Component } from "react";
import FlashcardEditor from "./FlashcardEditor";
import FlashcardViewer from "./FlashcardViewer";

export default class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: true,
      cards: [
      
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.editor ? (
          <FlashcardEditor
            cards={this.state.cards}
            switchMode={this.switchMode}
            deleteCard={this.deleteCard}
            addCard={this.addCard}
          />
        ) : (
          <FlashcardViewer switchMode={this.switchMode} />
        )}
      </div>
    );
  }
  switchMode = () => {
    this.setState((state) => ({
      editor: !state.editor,
    }));
  };
  addCard = (front, back) => {
    this.setState((state) => ({
      cards: [...state.cards, { front: front, back: back }],
    }));
  };
  deleteCard = (i) => {
    this.setState(state=>{
      const cards = [...state.cards];
      cards.splice(i, 1);
      console.log(i, cards);
      return {
        cards,
      };

    })
   
    // cards.filter(cards!=cards[i])
    // console.log(cards)
  };
}
