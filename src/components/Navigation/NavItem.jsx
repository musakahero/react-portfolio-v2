import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

export const NavItem = ({
    to,
    textContent
}) => {

    return <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
        }
    >{textContent}</NavLink>
}