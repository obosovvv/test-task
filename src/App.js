import React from 'react';
import './styles/App.css';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import Pagination from '@material-ui/lab/Pagination';
import * as PropTypes from 'prop-types';
import Content from './components/content';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header';
const { Suspense } = React;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

Pagination.propTypes = { count: PropTypes.number };

function AppRoot() {
  const classes = useStyles();

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Header />
      <Suspense fallback={
        <div className={classes.root}>
          <CircularProgress />
        </div>
      }>
        <Content />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
