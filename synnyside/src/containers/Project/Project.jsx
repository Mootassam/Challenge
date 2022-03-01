import React from "react";
import { cone, Milk, orangeCub, SugarCubes } from "../../assets";
import "./Project.scss";

const Project = () => {
  return (
    <div className='app__project'>
      <div className='app_project-img'>
        <img src={Milk} alt='' srcset='' />
        <img src={orangeCub} alt='' srcset='' />
        <img src={cone} alt='' srcset='' />
        <img src={SugarCubes} alt='' srcset='' />
      </div>
    </div>
  );
};

export default Project;
