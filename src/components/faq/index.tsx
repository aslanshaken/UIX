import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import { useTheme } from 'styled-components';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from 'react';

type Props = {
  title: string;
  desc: string;
  opened?: boolean;
}

export default function Faq({ title, desc, opened = false }: Props) {
  const [open, setOpen] = useState<boolean>(opened)

  return (
    <Box sx={{ border: '1px solid #5D5A88', borderRadius: 5, pl: 3.5, pr: 2, py: 2.5, maxWidth: 700, my: 2 }}>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant="h6" component="h3" gutterBottom textAlign='center' fontWeight='bold' color='#5D5A88'>
          {title}
        </Typography>

        <IconButton aria-label="delete" sx={{ ml: 2 }} onClick={() => setOpen(_ => !_)}>
          {
            open ? 
              <KeyboardArrowDownOutlinedIcon /> :
              <KeyboardArrowRightOutlinedIcon/>
          }
        </IconButton>
      </Box>

      {
        open &&
        <Typography variant="body2" color="#9795B5" mt={2} sx={{ width: "calc(100% - 60px)"}}>
          {desc}
        </Typography>
      }

    </Box>
  );
}
