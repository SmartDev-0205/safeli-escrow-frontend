import { useState } from 'react';

import Box from '@mui/material/Box';
import { Button, Card, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography, useTheme } from '@mui/material';
import useSocket from '@/context/use-socket';
import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

const numberOfMilestones = [5, 6, 7, 8, 9, 10];
const currencies = ['USD', 'EUR', 'CNY'];

export default function MilestoneDescriptionView (props: any) {
  const theme = useTheme();
  const { update } = useSocket();

  const [status, setStatus] = useState({
    numberOfMilestone: 0,
    currency: '',
    totalAmount: 0,
    clientName: '',
    contractName: '',
    companyName: '',
    title: '',
    desc: ''
  })

  const onNext = () => {
    props.nextStep();
    update({createMilestoneStep: 3})
  }

  const onBack = () => {
    props.previousStep();
    update({createMilestoneStep: 1})
  }

  return (
    <Card sx={{ px: 3, py: 4, borderRadius: 2, boxShadow: theme.shadows[20], width: '100%', minHeight: 'calc(100vh - 230px)'}}>
      <Stack direction="column" alignItems="center" spacing={3} maxWidth={800} margin='0 auto'>
        <Stack direction='column' alignItems='center' spacing={0.5}>
          <Typography variant='h4'>Basic Details</Typography>
          <Typography color='text.secondary'>First step is to fill out the basic details of this contract.</Typography>
        </Stack>
        <Grid container spacing={1}>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Number of Milestones</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <Select
                value={status.numberOfMilestone}
                onChange={e => setStatus({...status, numberOfMilestone: Number(e.target.value)})}
                sx={{width: '100%'}}
              >
                {numberOfMilestones.map((i, k) => (
                  <MenuItem value={i} key={k}>{i}</MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Currency</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <Select
                value={status.currency}
                onChange={e => setStatus({...status, currency: e.target.value})}
                sx={{width: '100%'}}
              >
                {currencies.map((i, k) => (
                  <MenuItem value={i} key={k}>{i}</MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Total Amount</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="total-amount"
                type='number'
                value={status.totalAmount}
                onChange={e => setStatus({...status, totalAmount: Number(e.target.value)})}
                sx={{width: '100%'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <Iconify icon='mdi:dollar' />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Client Name</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="client-name"
                type='string'
                value={status.clientName}
                onChange={e => setStatus({...status, clientName: e.target.value})}
                sx={{width: '100%'}}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Contract Name</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="contract-name"
                type='string'
                value={status.contractName}
                onChange={e => setStatus({...status, contractName: e.target.value})}
                sx={{width: '100%'}}
              />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mt={1}>
            <Typography variant='subtitle1'>Company Name</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="company-name"
                type='string'
                placeholder='MO Global'
                value={status.companyName}
                onChange={e => setStatus({...status, companyName: e.target.value})}
                sx={{width: '100%'}}
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography variant='subtitle1'>Project Title</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="project-title"
                type='string'
                placeholder='Website Development'
                value={status.title}
                onChange={e => setStatus({...status, title: e.target.value})}
                sx={{width: '100%'}}
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography variant='subtitle1'>Project Description</Typography>
            <Box sx={{width: '100%', mt: '5px'}}>
              <TextField
                name="project-description"
                type='string'
                placeholder='We need you as a Frontend Developer to review our  prototype and suggest improvements.'
                value={status.desc}
                multiline
                rows={3}
                onChange={e => setStatus({...status, desc: e.target.value})}
                sx={{width: '100%'}}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{width: '100%'}} spacing={2}>
          <Grid item xs={6} mt={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${theme.palette.background.gray} !important`, padding: '12px 20px', fontSize: '1rem', width: '100%', color: 'text.primary', border: '1px solid #dbe0e6'
              }}
              onClick={onBack}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6} mt={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${theme.palette.background.primary} !important`, padding: '12px 20px', fontSize: '1rem', width: '100%', border: `1px solid ${theme.palette.background.primary}`
              }}
              onClick={onNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );
}