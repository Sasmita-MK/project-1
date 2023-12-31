import { useTransition } from "react";
import Bali from "./Home/Bali.png";
import Pics from "./Home/Pics";
import giveSlide from "./Home/Slide";
import plane from "./Home/HomePlane.png";
import { Typography } from "@mui/material";
import ActionBar from "../ActionBar";
export default function Body()
{
    const crntSlide = giveSlide(Pics);
    //const crntSlide = 1;

    return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", height:"70vh",backgroundImage: `url(${Pics[crntSlide].pic})`,backgroundSize:"200vh",backgroundRepeat:"no-repeat",opacity:"75%",backgroundPositionY:"60%" }}>
            <img style={{height:"15vh", position:"absolute",top:"140px"}} src = {plane}></img>
            <Typography style = {{position: "absolute" , top:"180px",right:"100px"}}variant="h4">{Pics[crntSlide].name}</Typography>
            <ActionBar></ActionBar>
        </div>
    );
}