import styled from 'styled-components'

export const MenuGrid = styled.div`
    display: grid;
    grid-template-rows: 25px 57px 57px 57px 1fr 40px 40px 40px 40px 80px 10px;
    grid-template-areas: 
    "."
    "home"
    "about"
    "resume"
    "."
    "xing"
    "linkedin"
    "twitter"
    "github"
    "language"
    ".";
    justify-items: center;
    border-right: 2px solid #F2F4F5;
`
export const MenuLanguage = styled.div`
    grid-area: language;
`