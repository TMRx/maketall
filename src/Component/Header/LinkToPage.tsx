import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

type PropsType = {
    label:string
    to:string
    activeOnlyWhenExact?:boolean
}


export const LinkToPage:React.FC<PropsType>  = ({label,to,activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link to={to}>{label}</Link>
        </li>
    );
}


// <li className="nav-item active">
//     <NavLink to='/'>Головна</NavLink>
// </li>