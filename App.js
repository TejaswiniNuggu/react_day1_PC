import "./App.css";
import { AddColor } from "./AddColor";
//import { MovieList } from "./MovieList";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList.1";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { initial_movie_list } from "./initial_movie_list";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import { AddMovie } from "./AddMovie";
import { ProSidebar, Menu, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import IconButton  from "@mui/material/IconButton";
import  Badge  from "@mui/material/Badge";
import SearchIcon from '@mui/icons-material/Search';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TextField from '@mui/material/TextField';
import { Shop_Products } from "./Shop";
import {Details} from "./Details";
import {Detailsecond} from "./Details2"
import {Detail3} from "./Details3";



export default function App() {
  return(
    <div className="pricingsnips">
    <Details />
    <Detailsecond />
    <Detail3 />
    </div>

  );
}