import styled from 'styled-components'

export const StyledMenu = styled.div`
    display: grid;
    grid-template-rows: 25px 57px 57px 57px 1fr 40px 40px 40px 40px 40px 10px;
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

export const MenuHome = styled.div`
    grid-area: home;
`

export const MenuAbout = styled.div`
    grid-area: about;
`

export const MenuResume = styled.div`
    grid-area: resume;
`

export const MenuXing = styled.div`
    grid-area: xing;
`

export const MenuLinkedin = styled.div`
    grid-area: linkedin;
`

export const MenuTwitter = styled.div`
    grid-area: twitter;
`

export const MenuGithub = styled.div`
    grid-area: github;
`

export const MenuLanguage = styled.div`
    grid-area: language;
`