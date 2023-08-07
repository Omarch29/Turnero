import './credit-card.css';

import React, { useState, useRef } from 'react';
import Cards from 'react-credit-cards-2';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
  } from './utils';

export default function CreditCardComponent() {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: undefined,
        issuer: '',
        formData: null
      });
    
    const formRef = useRef(null);

     const handleCallback = ({issuer }, isValid) => {
        if (isValid) {
          setState(prevState => ({
            ...prevState,
             issuer }));
        }
      };
    
      const handleInputFocus = ({ target }) => {
        setState(prevState => ({
            ...prevState,
          focus: target.name
        }));
      };
    
      const handleInputChange = ({ target }) => {
        if (target.name === "number") {
          target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
          target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
          target.value = formatCVC(target.value);
        }
    
        setState(prevState => ({
            ...prevState,
             [target.name]: target.value }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        const { issuer } = state;
        const formData = [...e.target.elements]
          .filter(d => d.name)
          .reduce((acc, d) => {
            acc[d.name] = d.value;
            return acc;
          }, {});
    
        setState(prevState => ({
            ...prevState,  formData }));
        formRef.current.reset();
      };
    
      return (
        <div>
         <div key="Payment">
        <div className="App-payment">
          <h1>React Credit Cards</h1>
          <h4>Beautiful credit cards for your payment forms</h4>
          <Cards
            number={state.number}
            expiry={state.expiry}
            name={state.name}
            cvc={state.cvc}
            focused={state.focus}
            callback={handleCallback}
          />
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={state.issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
            </div>
          </form>
          {state.formData && (
            <div className="App-highlight">
              {formatFormData(state.formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
        </div>
        </div>
      );
}