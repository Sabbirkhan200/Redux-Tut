import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Acoroding from './Mainaccor'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <div style={{ textAlign: 'center', display: 'flex', margin: '0px 80px' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Html কি ? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HTML এর পূর্ণরূপ হল Hyper Text Markup Language HTML হল একটি
              মার্কআপ ল্যাঙ্গুয়েজ যার মাধ্যমে একটি ওয়েব পেজের কন্টেন্ট গুলোকে
              বর্ণনা করা হয়।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>সিএসএস কি? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              সিএসএস এর এব্রিবিয়েশন হচ্ছে ক্যাসকাইডিং স্টাইল শীট (Cascading
              Style Sheets)
              <br />
              <ul>
                <li> Internal style sheet (single page)</li>
                <li> External style sheet( CSS codes)</li>
                <li> Inline CSS codes ( single / specific element )</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>জাভাস্ক্রিপ্ট কি? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              জাভাস্ক্রিপ্ট হচ্ছে এইচটিএমএল ও ওয়েব এর একটি প্রোগ্রামিং ভাষা।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Bootstrap কি ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              css এর একটি ফ্রেমওয়ার্ক ফ্রি front-end framework,
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ textAlign: 'center', display: 'flex', margin: '0px 80px' }}>
        <Accordion
          expanded={expanded === 'panel'}
          onChange={handleChange('panel')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>DOM কি?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Document Object Model (DOM)</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'pane2'}
          onChange={handleChange('pane2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>React কি? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              সিএসএস এর এব্রিবিয়েশন হচ্ছে ক্যাসকাইডিং স্টাইল শীট (Cascading
              Style Sheets)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'pane3'}
          onChange={handleChange('pane3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>জাভাস্ক্রিপ্ট কি? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              জাভাস্ক্রিপ্ট হচ্ছে এইচটিএমএল ও ওয়েব এর একটি প্রোগ্রামিং ভাষা।
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'pane4'}
          onChange={handleChange('pane4')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Bootstrap কি ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              css এর একটি ফ্রেমওয়ার্ক ফ্রি front-end framework,
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
