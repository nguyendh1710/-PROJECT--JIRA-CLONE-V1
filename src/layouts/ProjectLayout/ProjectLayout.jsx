import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Outlet } from 'react-router-dom'
import "./style.css";

export default function ProjectLayout() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid xs={10}>
          <Header />
          <div className="dummy-element"></div>

            <Outlet/>
          {/* <ProjectManagement /> */}
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </>
  );
}
