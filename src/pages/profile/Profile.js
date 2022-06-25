import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import './profile.css'

const Input = styled('input')({
  display: 'none'
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F7F3EB' : '#F7F3EB',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  margin: '0.5rem',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

function Profile() {
  const userInfo = useSelector(state => state.user.info)
  return (
    <div className="profile__page">
      <div className="profile__page-content">
        <div className="profile__page-content__title">
          <p>PROFILE</p>
        </div>
        <div className="profile__page-content__image">
          <Avatar src="/broken-image.jpg" /*sx={{ width: 150, height: 150 }}*/ id="image__avatar" />
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton aria-label="upload picture" component="span"  id='image__icon'>
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <div className="profile__page-content__info">
          <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item className="user__label">First Name :</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__info"> {userInfo.firstName} </Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__label">Last Name :</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__info">{userInfo.lastName}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__label">Email :</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__info">{userInfo.email}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__label">Phone :</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__info">{userInfo.phone}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__label">Adress :</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="user__info">{userInfo.adress}</Item>
            </Grid>
          </Grid>


        </div>
      </div>
    </div>
  )
}

export default Profile