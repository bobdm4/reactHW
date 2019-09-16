пшкimport React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';

import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default class Dashbord extends Component {
  state = {
    transHist: [],
    amount: '',
    balance: 0,
    balanceInc: 0,
    balanceDec: 0,
  };

  // hw3
  componentDidMount() {
    const history = localStorage.getItem('history');
    if (history) {
      const state = JSON.parse(history);
      this.setState({ ...state });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    const { transHist } = this.state;
    if (prevState.transHist !== transHist) {
      localStorage.setItem('history', JSON.stringify(this.state));
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  typeBtn = e => {
    const { name } = e.target;
    this.addTransaction({ ...this.state }, name);
  };

  reset = () => {
    this.setState({
      amount: '',
    });
  };

  notifyWarn = () => toast.warn('Enter corect amount...');

  notifyError = () =>
    toast.error('Not enough money! Donate card (5375 4141 0728 7889!');

  addTransaction = (s, btnType) => {
    if (+s.amount <= 0) {
      this.notifyWarn();
      this.reset();
      return;
    }
    const addToHistory = {
      id: shortid.generate(),
      type: btnType,
      amount: +s.amount,
      date: new Date().toLocaleString(),
    };
    if (btnType === 'deposit') {
      this.setState(prevS => ({
        transHist: [...prevS.transHist, addToHistory],
        balance: s.balance + +s.amount,
        balanceInc: s.balanceInc + +s.amount,
      }));
      this.reset();
    } else if (btnType === 'withdraw') {
      if (+s.amount <= s.balance) {
        this.setState(prevS => ({
          transHist: [...prevS.transHist, addToHistory],
          balance: s.balance - +s.amount,
          balanceDec: s.balanceDec + +s.amount,
        }));
        this.reset();
      } else {
        this.notifyError();
        this.reset();
      }
    }
  };

  render() {
    const { amount, balance, transHist, balanceInc, balanceDec } = this.state;
    return (
      <div className="dashbord">
        <Controls
          amount={amount}
          onChange={this.handleChange}
          typeBtn={this.typeBtn}
        />
        <ToastContainer />
        <Balance
          balance={balance}
          balanceInc={balanceInc}
          balanceDec={balanceDec}
        />
        {transHist.length > 0 && <TransactionHistory transHist={transHist} />}
      </div>
    );
  }
}
