import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from '@/components/iconify';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }: { onOpenNav: () => void }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');
  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Stack direction="row" spacing={lgUp ? 3 : 1} alignItems="center">
        <img src="/assets/light-logo.svg" alt="logo" style={{width: lgUp ? 55 : 42, height: lgUp ? 55 : 42, marginLeft: '3px'}} />
      </Stack>
      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={mdUp ? 3 : 1}>
        {mdUp && (
          <>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <IconButton color={'default'} sx={{padding: '5px'}}>
                <img src="/assets/icons/ic_ticket.svg" alt="ic_ticket" style={{width: 25, height: 25}} />
              </IconButton>
              <Typography fontSize='0.8rem' color='text.primary'>Ticket</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <IconButton color={'default'} sx={{padding: '5px'}}>
                <img src="/assets/icons/ic_api.svg" alt="ic_api" style={{width: 25, height: 25}} />
              </IconButton>
              <Typography fontSize='0.8rem' color='text.primary'>APIs</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <IconButton color={'default'} sx={{padding: '5px'}}>
                <img src="/assets/icons/ic_settings.svg" alt="ic_settings" style={{width: 25, height: 25}} />
              </IconButton>
              <Typography fontSize='0.8rem' color='text.primary'>Settings</Typography>
            </Box>
          </>
        )}
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: theme.shadows[5],
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          // width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          width: '100%',
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
