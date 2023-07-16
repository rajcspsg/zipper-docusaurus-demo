import React from 'react';
import classnames from "classnames";
import styles from "../styles.module.css";
import Link from "@docusaurus/Link";

const Header = (props) => {
    return (
<header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{props.title}</h1>
          <p className="hero__subtitle">{props.tagline}</p>
          <p >
          An implementation of Huet’s Zipper for Scala and Scala.js that is intended to be usable in many common scenarios
          </p>
          <Link className="button button--lg" to="https://github.com/stanch/zipper">View on gitub</Link>
        </div>
      </header>)
};

export default Header;