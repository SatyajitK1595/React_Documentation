import React, { Component } from "react";
import StepZilla from 'react-stepzilla';
import New from './New';
import Update from './Update';
import Delete from"./Delete"; 

require('../Enquiry/Main.css')

class FirstSnap extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }

  render() {
    const steps =
    [
      {name: 'New Enquiry', component: <New getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Update Enquiry', component: <Update getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Delete Enquiry', component: <Delete getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
     ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <StepZilla 
            steps={steps}
            showNavigation={false}
            preventEnterSubmission={true}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>
      </div>
    )
  }
}
export default FirstSnap;