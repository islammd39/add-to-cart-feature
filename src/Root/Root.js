import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from '../Pages/Shared/Footer';

export const Context = createContext([])

const Root = () => {
    const meals = useLoaderData()
    // console.log(meals.categories);
    const {categories} = meals;
    // console.log(categories);

  return (
    <Context.Provider value={categories}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Context.Provider>
  );
};

export default Root;
