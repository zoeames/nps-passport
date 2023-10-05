import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { CurvedText } from "../CurvedText/CurvedText";

import styles from "./Stamp.module.scss";

const Stamp = ({ data }) => {
  const [textColor, setTextColor] = useState("");
  const [curvedTextColor, setCurvedTextColor] = useState("");

  useEffect(() => {
    if (data) {
      switch (data.theme) {
        case 'west':
          setCurvedTextColor('blue-curved-color');
          setTextColor('blue-color');
          break;
        case 'south':
          setCurvedTextColor('red-curved-color');
          setTextColor('red-color');
          break;
        case 'east':
          setCurvedTextColor('green-curved-color');
          setTextColor('green-color');
          break;
        default:
          setCurvedTextColor('default-curved-color');
          setTextColor('default-color');
      }
    }
  }, [data]);

  return (
    <div className={styles["stamp"]} data-testid='stamp'>
      <CurvedText title={data.topText} reversed={true} textColor={curvedTextColor}/>

      <div className={`${styles[textColor]} ${styles["middle-text"]}`}>{data.middleText}</div>

      <CurvedText title={data.bottomText} textColor={curvedTextColor}/>

    </div>
  );
};

Stamp.propTypes = {
  data: PropTypes.object,
};

Stamp.defaultProps = {
  data: {},
};

export { Stamp };
