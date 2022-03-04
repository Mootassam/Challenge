import React from "react";
import { cone, Milk, orangeCub, SugarCubes } from "../../assets";
import "./Project.scss";
import { AppWrap } from "../../wrapper";
const Project = () => {
  return (
    <div className='app__project'>
      <div className='app_project-img'>
        <img src={Milk} alt='photo_milk' />
        <img src={orangeCub} alt='photo_club' />
        <img src={cone} alt='photo_cune' />
        <img src={SugarCubes} alt='photo_sugar' />
      </div>
    </div>
  );
};

export default AppWrap(Project, "Projects");
