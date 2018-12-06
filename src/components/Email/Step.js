import React, { Component } from "react";
import StepZilla from 'react-stepzilla';
import Emailvd from './Emailvd';
import Update_email from './Update_email';
import Delete_email from"./Delete_email"; 

require('../Enquiry/Main.css')

class Step extends Component {
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
      {name: 'New Email', component: <Emailvd getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Update Email', component: <Update_email getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Delete Email', component: <Delete_email getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
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
export default Step;