import {Hero} from "./Hero/Hero";
import {About} from "./About/About";
import {Services} from "./Services/Services";
import {Client} from "./Client/Client";
import React from "react";
import {DataProvider} from "../../Context/DataContext";
import {FormHero} from "../From/FormHero";

export const Main = () => {
    return <>
        <DataProvider>
            <Hero/>
            <About/>
            <Services/>
            <Client/>
            <FormHero/>
        </DataProvider>

    </>
}