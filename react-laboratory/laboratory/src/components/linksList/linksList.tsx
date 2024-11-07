import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {LinksElements} from "./linksElements";
import {RoutesElement} from "./routesElement";

type LinksListProps = {
  type?: 'links' | 'routes';
}

export const LinksList = (props: LinksListProps) => {
  const {type = 'links'} = props;
  switch (type) {
    case 'links':
      return <LinksElements />
    case 'routes':
      return <RoutesElement />
    default:
      return <LinksElements />
  }
};
