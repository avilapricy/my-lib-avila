import { ColorTypes, TypographyTypes } from "../../styled/styled";
import { Container } from "./style";


export interface ITypography {
    type: TypographyTypes
    children?: React.ReactNode
    style?: React.CSSProperties
    bold?: boolean
    color?: ColorTypes
    className?: string
}

function Typography(params: ITypography) {
    const { bold = false, children, style = {}, type, color = "primary/1", className = "" } = params;

    return (
        <Container bold={bold} style={style} type={type} color={color} className={className}>
            {children}
        </Container>
    )
}

export default Typography;