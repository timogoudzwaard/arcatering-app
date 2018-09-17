import React, { Component } from 'react';
import * as firebase from 'firebase';

// Style
import './OptedIn.css';

class OptedIn extends Component {
  state = {
    optedIn: [],
  }

  componentDidMount() {
    // Get current date
    const dateObj = new Date();
    const currentDate = dateObj.getFullYear() + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate();

    const db = firebase.firestore();
    db.collection(currentDate).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Get all users who opted in for lunch
        const { optedIn } = this.state;
        this.setState({ optedIn: [...optedIn, doc.id] });
      });
    });
  }

  render() {
    const { optedIn } = this.state;
    if (optedIn.length === 0) {
      return null;
    }

    const renderList = optedIn.map(opted => <li key={opted}>{opted}</li>);
    return (
      <div className="opted-in-list">
        <h4>
          Eet samen met:
        </h4>
        <ul>
          {renderList}
        </ul>
        <hr />
      </div>
    );
  }
}

export default OptedIn;
