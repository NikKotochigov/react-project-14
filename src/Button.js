import { useContext } from "react";
import { Context } from "./Context";
import styled from 'styled-components';

const DarkThemeButton = styled.button`
    background-color: #222;
    color: white;
    padding: 5px;
    margin: 5px;
`

export default function Button(props) {

  const classes = useContext(Context);

  return <DarkThemeButton className={classes}>{props.children}</DarkThemeButton>;
}