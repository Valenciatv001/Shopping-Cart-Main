import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    width:100%;
    height:100%;
    border-radius:20px;
    border:1px solid #ccc;

    Button {
        border-radius: 0 0 20px 20px;
    }

    img {
        //
        max-height: 250px;
        object-fit:cover;
        border-radius: 20px 20px 20px 20px;
        padding-top:1rem;
    }

    div {
        padding:1.5rem;
        height:100%;
    }


`; 