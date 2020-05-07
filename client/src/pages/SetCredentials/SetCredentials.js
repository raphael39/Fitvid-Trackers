import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../actions/userActions';
import jwtDecode from 'jwt-decode';

function SetCredentials () {

  const dispatch = useDispatch();

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const _id = params.get('_id');
  const token = params.get('token');
  const decodedToken = jwtDecode(token);

  const userObj = {
    _id: _id,
    googleId: decodedToken.sub,
    firstName: decodedToken.given_name,
    lastName: decodedToken.family_name,
    email: decodedToken.email,
    token: token
  }

  dispatch(setUser(userObj));

  return ( <Redirect to="/HomePage" /> );

  }

export default SetCredentials;
