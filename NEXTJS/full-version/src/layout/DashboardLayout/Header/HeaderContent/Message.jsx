import { useRef, useState } from 'react';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

// assets
import MailOutlined from '@ant-design/icons/MailOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';

const avatar2 = '/assets/images/users/avatar-6.png';
const avatar3 = '/assets/images/users/avatar-7.png';
const avatar4 = '/assets/images/users/avatar-8.png';
const avatar5 = '/assets/images/users/avatar-9.png';

// sx styles
const avatarSX = {
  width: 48,
  height: 48
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| HEADER CONTENT - MESSAGES ||============================== //

export default function Message() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={(theme) => ({
          color: 'text.primary',
          bgcolor: open ? 'grey.100' : 'transparent',
          ...theme.applyStyles('dark', { bgcolor: open ? 'background.default' : 'transparent' })
        })}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MailOutlined />
      </IconButton>
      <Popper
        placement={downMD ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ maxHeight: 'calc(100vh - 250px)' }}
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [downMD ? -60 : 0, 9] } }] }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={downMD ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper sx={(theme) => ({ boxShadow: theme.customShadows.z1, width: '100%', minWidth: 285, maxWidth: { xs: 285, md: 420 } })}>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title="Message"
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <IconButton size="small" onClick={handleToggle}>
                      <CloseOutlined />
                    </IconButton>
                  }
                >
                  <List
                    component="nav"
                    sx={{
                      p: 0,
                      '& .MuiListItemButton-root': {
                        px: 2,
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      }
                    }}
                  >
                    <ListItem
                      component={ListItemButton}
                      divider
                      secondaryAction={
                        <Typography variant="caption" noWrap>
                          3:00 AM
                        </Typography>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar2} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            It&apos;s{' '}
                            <Typography component="span" variant="subtitle1">
                              Cristina danny&apos;s
                            </Typography>{' '}
                            birthday today.
                          </Typography>
                        }
                        secondary="2 min ago"
                      />
                    </ListItem>
                    <ListItem
                      component={ListItemButton}
                      divider
                      secondaryAction={
                        <Typography variant="caption" noWrap>
                          6:00 PM
                        </Typography>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar3} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Aida Burg
                            </Typography>{' '}
                            commented your post.
                          </Typography>
                        }
                        secondary="5 August"
                      />
                    </ListItem>
                    <ListItem
                      component={ListItemButton}
                      divider
                      secondaryAction={
                        <Typography variant="caption" noWrap>
                          2:45 PM
                        </Typography>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar4} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography component="span" variant="subtitle1">
                            There was a failure to your setup.
                          </Typography>
                        }
                        secondary="7 hours ago"
                      />
                    </ListItem>
                    <ListItem
                      component={ListItemButton}
                      divider
                      secondaryAction={
                        <Typography variant="caption" noWrap>
                          9:10 PM
                        </Typography>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar5} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Cristina Danny
                            </Typography>{' '}
                            invited to join{' '}
                            <Typography component="span" variant="subtitle1">
                              Meeting.
                            </Typography>
                          </Typography>
                        }
                        secondary="Daily scrum meeting time"
                      />
                    </ListItem>
                    <ListItem component={ListItemButton} sx={{ textAlign: 'center' }}>
                      <ListItemText
                        primary={
                          <Typography variant="h6" color="primary">
                            View All
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
