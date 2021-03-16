import React from 'react';
import dataInteractives from "./data_interactive_map.json";
import { Header } from "./components/header/header";
import { CardList } from "./components/card-list/card-list";
import { Footer } from "./components/footer/footer";

export default class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      dataInteractives: dataInteractives.data_interactives
    }
  }

  render() {
    const plugins = this.state.dataInteractives;
    return (
      <div className="App">
        <Header plugins={plugins}/>
        <CardList plugins={plugins} />
        <Footer />
      </div>
    );
  }
}

