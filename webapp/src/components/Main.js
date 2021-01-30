import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { GoMarkGithub } from "react-icons/go";
import styled from 'styled-components';
import theme from '../styles/theme';
import mix from '../styles/mix';
const { colors } = theme;


class Main extends React.Component{
  state = {
    username:'',
  };
  handleChange= (e)=>{
    this.setState({username: e.target.value});
    //console.log(e.target.value);
  }
  onSubmitHandler = () =>{
    // console.log("1");
    // console.log(this.props);
    this.props.history.push(`/user/${this.state.username}`)

  }
  StyledContainer = styled.div`
  ${mix.flexCenter};
  background-color: ${colors.white};
  background-image: linear-gradient(${colors.blue} 0%,${colors.orange} 50%, ${colors.green} 100%);
  color: ${colors.offWhite};
  height: 100vh;
  form {
    background-color: transparent;
    border-radius: 15px;
    padding: 3em;
    margin-bottom: 10em;
    max-width: 600px;
    text-align: center;
    svg {
      color: ${colors.lightestBlue};
    }
    label {
      display: block;
      font-size: 3rem;
      font-weight: 500;
      margin: 2rem;
    }
    input[type='text']{
      background-color: ${colors.lightestBlue};
      outline: 0;
      border: 0;
      border-radius: 1rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.darkGrey};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }
    button{
      background-color: ${colors.black};
      outline: 0;
      border: 0;
      border-radius: 1rem;
      width: 100%;
      margin-top:2rem;
      max-width: 100px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.blue};
      font-size: 1rem;
      font-weight: 200;
      text-align: center;
    }
    .submit {
      ${mix.blueButton};
      margin-top: 3rem;
      filter: none;
    }
  }
`;
//console.log(props.history);
render(){
  return (
    <main>
      <Helmet><meta charSet="utf-8" /><title>GithubFinder</title><link  href="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png"></link></Helmet>
      <this.StyledContainer> 
        <form  onSubmit={e => {
         e.preventDefault();
         this.onSubmitHandler();
        }}>
          <GoMarkGithub size="150px"/>
          <label >Find Your Profile</label>
          <input type="text" name="username" value={useState.username}  onChange={(e)=>this.handleChange(e)}/>
        </form>
      </this.StyledContainer>
      {/* <button type="button" onClick={onSubmitHandler}> Click Me </button> */}
{/* <Switch>
  <Route path="/" exact component = {Form}/>
  <Route path="/temp" exact component = {Temp}/>
  <Redirect to="/"/>
</Switch> */}

    </main>
  );
}
}
export default Main;