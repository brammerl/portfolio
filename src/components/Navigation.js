import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from '../components/Home';
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#3d405b'
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/Home" {...a11yProps(0)} />
          <LinkTab label="About" href="/About" {...a11yProps(1)} />
          <LinkTab label="Projects" href="/Projects" {...a11yProps(2)}/>
          <LinkTab label="Contact" href="/Projects" {...a11yProps(3)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contact/>
      </TabPanel>
    </div>
  );
}