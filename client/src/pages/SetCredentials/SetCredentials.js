import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../redux/actions/userActions';
import { setSchedule } from '../../redux/actions/scheduleActions';
import jwtDecode from 'jwt-decode';
import ApiClient from '../../Services/ApiClient';

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

  const fetchSecheduleUrl = process.env.REACT_APP_SERVER_URL + '/schedule/';

  ApiClient.getSchedule()
  .then(response => response.json())
  .then(data => { dispatch(setSchedule(data)); });

  dispatch(setUser(userObj));

  return ( <Redirect to="/HomePage" /> );

  }

export default SetCredentials;
