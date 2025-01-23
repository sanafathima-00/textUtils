import React, { useState } from 'react';

export default function TextBox(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Your text converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let loText = text.toLowerCase();
    setText(loText);
    props.showAlert("Your text converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    let clrText = '';
    setText(clrText);
    props.showAlert("Text box is cleared", "success");
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'rgb(52, 58, 64)',
              color: props.mode === 'light' ? 'black' : 'white',
              borderColor: props.mode === 'light' ? 'black' : 'white'
            }}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3" onClick={handleUpClick}>
            Upper Case
          </button>
          <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={handleLoClick}>
            Lower Case
          </button>
          <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h3>Your paragraph has:</h3>
        <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
        <h3>You can read this paragraph in approximately:</h3>
        <p>{(0.008 * (text.trim().length > 0 ? text.trim().split(/\s+/).length : 0)).toFixed(3)} minutes</p>
      </div>
    </>
  );
}