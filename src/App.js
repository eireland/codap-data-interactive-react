import React from 'react';
import dataInteractives from "./data_interactive_map.json";
import { Header } from "./components/header/header";
import { CardList } from "./components/card-list/card-list";
import { Footer } from "./components/footer/footer";

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.state = {
      dataInteractives: dataInteractives.data_interactives,
      categorySelected: "Partners",
    }
  }

  render() {
    const plugins = this.state.dataInteractives;
    const categorySelected = this.state.categorySelected;
    return (
      <div className="App">
        <Header plugins={plugins} categorySelected={categorySelected} handleCategorySelect={this.handleCategorySelect}  />
        <CardList plugins={plugins} categorySelected={categorySelected} />
        <Footer />
      </div>
    );
  }

  handleCategorySelect(category) {
    this.setState({ categorySelected: category });
  }
}

