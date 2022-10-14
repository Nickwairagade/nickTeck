import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";

const intialState = {
    name: "",
    image:"",
    services: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Nikhil",
                    image: "../images/img1.svg"
                },
            });
    };
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "NickCreation",
                    image: "../images/about1.svg"
                },
            });
    };

    // To get the API data
    
    const getServices = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          dispatch({ type: "GET_SERVICES", payload: data });
        } catch (error) {
          console.log(error);
        }
      };

    // To Call The Api

    useEffect(() => {
        getServices();
    }, [])
    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>;
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
