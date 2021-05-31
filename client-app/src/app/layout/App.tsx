import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../layout/NavBar'
import ActivityDashboard from '../../features/activites/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();
  useEffect(() => {
    activityStore.loadActivities();
    }, [activityStore])


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
