import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SimpleCard({ icon }) {
  return (
    <CardContent >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {/* icon */}
        <FontAwesomeIcon icon={icon} color='black' />
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: "0.7rem" }} textTransform={'capitalize'} color="text.secondary" gutterBottom>
        {/* iconName */}
        {icon.iconName}
      </Typography>
    </CardContent>
  );
}