import React from "react";
import '../styles/Button.css';

function Button({ text , isClickButton , clickHandle }){
  return(
    <button 
      className={isClickButton ? 'click-button' : 'restart-button' } 
      onClick={ clickHandle }>
      { text }
    </button>
  );
}

export default Button;