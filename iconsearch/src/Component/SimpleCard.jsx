import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SimpleCard({ icon }) {
  return (
    <CardContent >
      <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
        {/* icon */}
        <FontAwesomeIcon icon={icon} size="2x" />
      </Typography>
      <Typography sx={{ textAlign: "center" }} color="text.secondary" gutterBottom>
        {/* iconName */}
        {icon.iconName}
      </Typography>
    </CardContent>
  );
}