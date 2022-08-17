import styled from "styled-components";
import { ITypography } from ".";

export const Container = styled.div<ITypography>`    
    font-size: ${(props) => props.theme.typography[props.type]};
    color: ${(props) => {
        if (props.color) {
            const [ name, color ] = props.color.split("/");
            //@ts-ignore
            return `${props.theme.colors[name.toLowerCase()][color]}`
        }
    }};
    ${(props) => {
        if (props.bold) {
            return `font-weight: bold;`
        }
    }}
`