import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom: 20px

    div{
        flex:1
        marginBottom:20px;
    }

    .information, .buttons{
        display:flex;
        justify-content:space-between
    }

    img { 
        max-width:200px;
        object-fit:cover;
        margin-left:40px;
    }
`;