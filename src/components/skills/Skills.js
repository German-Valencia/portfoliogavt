import React from "react";
import html from "../../utils/html.png";
import css from "../../utils/css.png";
import babel from "../../utils/babel.png";
import js from "../../utils/js.png";
import npm from "../../utils/npm.png";
import postgre from "../../utils/postgre.png";
import react from "../../utils/react.png";
import mui from "../../utils/mui.png";

//MUI components

import Grid from "@mui/material/Grid";

const Skills = () => {
  return (
    <div>
      <hr />
      <h1 style={{ textAlign: "center" }} id="skills">
        Skills
      </h1>
      <Grid container xl={12}>
        <img
          src={html}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="html"
        />
        <img
          src={css}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="css"
        />
        <img
          src={babel}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="babel"
        />
        <img
          src={js}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="js"
        />
        <img
          src={npm}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="npm"
        />
        <img
          src={postgre}
          height="200px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="postgre"
        />
        <img
          src={react}
          height="170px"
          width="200px"
          style={{ paddingLeft: "75px" }}
          alt="react"
        />
        
      </Grid>
    </div>
  );
};

export default Skills;
