import mix from './mix';
import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fonts } = theme;
const Userinfocss = styled.div`
  ${mix.flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
  ${media.bp600`
    padding-top: 4rem;
  `};
  .avatar {
    ${mix.flexCenter};
    margin-bottom: 1.5rem;
    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
    `};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }
  h3 {
    color: ${colors.lightblue};
  }
  a {
    color: ${colors.black};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .info {
    ${mix.flexCenter};
    ${media.bp600`
      display: block;
    `};
    &__item {
      ${mix.flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;
      svg {
        margin-right: 10px;
      }
    }
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;
    &__item {
      ${mix.flexCenter};
      flex-direction: column;
      background-color: ${colors.lightestBlue};
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;
      ${media.bp400`
        padding: 1rem 0.5rem;
      `};
      .num {
        color: ${colors.black};
        font-size: 1.5rem;
        ${media.bp400`
          font-size: 1rem;
        `};
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: ${colors.black};
        ${media.bp400`
          font-size: 0.5rem;
        `};
      }
    }
  }
`;


export default Userinfocss;