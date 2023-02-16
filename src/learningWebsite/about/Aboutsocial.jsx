import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  fontSize: 20,
  color: theme.palette.text.sl,
}))

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '80%', marginLeft: 20 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <a href="https://www.facebook.com/profile.php?id=100007083614680">
              <FacebookIcon />
              My Facebook
            </a>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <a href="https://www.youtube.com/channel/UCR1yi7S6KqIdHA0q-H_YZPg">
              <YouTubeIcon />
              My Youtuve
            </a>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <a href="https://twitter.com/BoyzMental">
              <TwitterIcon />
              My Twitter
            </a>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <a href="https://www.instagram.com/sabbirkhan81863/?fbclid=IwAR1grB_HcxatlkwbD5PXtgEXUvUwVajddYPQ-p90Tjm53oKmL1NgzZZ79LU">
              <InstagramIcon />
              My Instagram
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
