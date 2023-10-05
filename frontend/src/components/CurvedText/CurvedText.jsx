import PropTypes from "prop-types";
import React from "react";
import ReactCurvedText from "react-curved-text";

import styles from "./CurvedText.module.scss";

const CurvedText = ({ title, reversed, textColor }) => {
  return (
    <ReactCurvedText
      width={300}
      height={300}
      cx={150}
      cy={150}
      rx={130}
      ry={130}
      startOffset='50%'
      reversed={reversed}
      text={title}
      textProps={{"style": {"fontSize": "22"}}}
      textPathProps={{"text-anchor": "middle", "class" :  styles[textColor]}}
      svgProps={{"style": {"transform": reversed ? "rotate(270deg)" : "rotate(90deg)"}}}
    />
  );
};

CurvedText.propTypes = {
  title: PropTypes.string,
  reversed: PropTypes.bool,
  textColor: PropTypes.string,
};

CurvedText.defaultProps = {
  title: '',
  reversed: false,
  textColor: ''
};

export { CurvedText };
