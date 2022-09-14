import './App.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Grid from '@mui/material/Grid';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Grid container direction='row'>
          <Grid item xs={2}>
            <Sidebar/>
          </Grid>
          <Grid item xs={10}>
            <Body/>
          </Grid>
        </Grid>
      </QueryClientProvider>
    </div>
  );
}

export default App;
