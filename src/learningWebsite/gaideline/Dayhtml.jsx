import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

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

export default function CustomizedAccordion() {
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
            <Typography>Day 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h4>Different tags</h4>
              html,
              <br /> title,
              <br /> body,
              <br /> paragraph,
              <br /> heading 1 to 6,
              <br /> anchor, <br /> break row,
              <br /> link,
              <br /> img
              <h4>Different attributes </h4>
              style, <br /> href, <br /> rel, <br />
              src,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Day 2 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol>
                <li>table</li>
                <li>th</li>
                <li>td</li>
                <li>b</li>
                <li>em</li>
                <li>span</li>
                <li>tg</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Day 3 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              জাভাস্ক্রিপ্ট হচ্ছে এইচটিএমএল ও ওয়েব এর একটি প্রোগ্রামিং ভাষা।
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
