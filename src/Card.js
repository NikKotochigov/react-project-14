import { useContext } from "react";
import { Context } from "./Context";
import styled from 'styled-components';

const DarkThemeDiv = styled.div`
    background-color: #222;
    color: white;
    padding: 5px;
    margin: 5px;
`

export default function Card(props) {

  const classes = useContext(Context)

  return <DarkThemeDiv className={classes}>{props.children}</DarkThemeDiv>;
}