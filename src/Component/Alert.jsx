import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function Alerts1() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Login success — <strong>Welcome!</strong>
      </Alert>
    </Stack>
  );
}

function Alerts2() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Fail</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
}

function Alerts3() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>추가 성공</AlertTitle>
          장바구니에 담겼어요! — <strong> Thanks</strong>
        </Alert>
      </Stack>
    );
}




export {Alerts1, Alerts2, Alerts3}