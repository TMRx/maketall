
import styled from "styled-components";
 const MapStyled = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 20px;
    max-width: 600px;   
 `
const Iframe = styled.iframe`
    border: 1px solid #686868;
    border-radius: 5px;
`

export const Map = () => {
    return (
        <MapStyled id='map'>
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8076.933186982056!2d30.352162856793615!3d50.383805813513376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca24d93d4597%3A0x8ef078bd7f4d39e2!2z0LLRg9C70LjRhtGPINCX0LDQu9GW0LfQvdC40YfQvdCwLCA5Miwg0JLQuNGI0L3QtdCy0LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7Liwg0KPQutGA0LDRl9C90LAsIDA4MTMy!5e0!3m2!1suk!2spl!4v1626549872839!5m2!1suk!2spl"
                width="100%" height="450"  loading="lazy"></Iframe>
        </MapStyled>
    )
}


