import React from "react";
import Image3 from "../../utils/codigo2.jpg";
import styles from "./images.module.css"


//MUI COMPONENTS

import Grid from "@mui/material/Grid";

const Images = () => {
  return (
    <div>
      <Grid
          container
        >
      
      <img
        src={Image3}
        className={styles.image1}
        alt="codigo2"
      />
      </Grid>
    </div>
  );
};

export default Images;
