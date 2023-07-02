import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavigationItem({ link, children }) {
  return (
    <li className="px-2">
      <NavLink
        className="p-1 transition hover:text-accent duration-300 hover:border-b hover:border-accent active:text-accent  "
        to={link}
      >
        {children}
      </NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
