'use client';

// material-ui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// third-path
import { enqueueSnackbar, useSnackbar } from 'notistack';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| NOTISTACK - ACTION BUTTONS ||============================== //

export default function SnackBarAction() {
  const { closeSnackbar } = useSnackbar();
  const actionTask = (snackbarId) => (
    <Stack direction="row" sx={{ gap: 0.5 }}>
      <Button
        size="small"
        color="error"
        variant="contained"
        onClick={() => {
          alert(`I belong to snackbar with id ${snackbarId}`);
        }}
      >
        Undo
      </Button>
      <Button size="small" color="secondary" variant="contained" onClick={() => closeSnackbar(snackbarId)}>
        Dismiss
      </Button>
    </Stack>
  );

  return (
    <MainCard title="With Action">
      <Button
        variant="contained"
        fullWidth
        sx={{ marginBlockStart: 2 }}
        onClick={() => enqueueSnackbar('Your notification here', { action: (key) => actionTask(key) })}
      >
        Show Snackbar
      </Button>
    </MainCard>
  );
}
