import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
	//  key=32401247-d831a8438a21bb86fb66fd7b1
  };

  isFindImg = (nameImg) => {
    console.log(2);
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.isFindImg} />

        <Loader />
      </div>
    );
  }
}
