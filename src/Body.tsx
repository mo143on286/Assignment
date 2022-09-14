import React, {useState} from 'react';
import styled from 'styled-components';
import {options_1, options_2, options_3} from './Options';
import Grid from '@mui/material/Grid';
import { Bar, Line } from "react-chartjs-2";
import { useQuery } from 'react-query';
import Axios  from 'axios';
import { Chart, registerables } from 'chart.js';
import { Button } from '@mui/material';
Chart?.register(...registerables);


export default function Body() {

  const [button, setButton] = useState(1);

  const Data = [
  {
    id: 1,
    month: '06/22',
    userDecline: 37,
  },
  {
    id: 2,
    month: '07/22',
    userDecline: 50,
  },
  {
    id: 3,
    month: '08/22',
    userDecline: 45,
  },
  {
    id: 4,
    month: '09/22',
    userDecline: 30,
  },
];

  const {data: jokeData} = useQuery(["apiData"], () => {
    return Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => res.data)
  });

  const dataArray = [jokeData?.id, jokeData?.type?.length, jokeData?.setup?.length, jokeData?.punchline?.length];

  const data_1 = {
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        data: dataArray?.map((data) => data),
        backgroundColor: [
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };

   const data_2 = {
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        data: dataArray?.map((data) => data),
        backgroundColor: [
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        data: Data?.map((data) => data.userDecline),
        backgroundColor: [
          "red",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const handleChartClick = (event: any) => {
    Array.from(document.querySelectorAll('.activeChart')).forEach((el) => el.classList.remove('activeChart'));
    event.currentTarget.classList.add('activeChart');
  };

  return (
    <StyledBody>
      <div className='line_bar'>
        <Button
        variant={button === 1 ? "contained": "outlined"}
        onClick={() => setButton(1)}
        className="button">
          Line
        </Button>
        <Button
        variant={button === 2 ? "contained": "outlined"}
        onClick={() => setButton(2)}
        className="button">
          Bar
        </Button>
      </div>
      {button === 1 ? (
        <Grid container spacing={4} direction='row'>
          <Grid item xs={6}>
            <Line data={data_1} options={options_1} onClick={handleChartClick}/>
          </Grid>
          <Grid item xs={6}>
            <Line data={data_2} options={options_2} onClick={handleChartClick} />
          </Grid>
          <Grid item xs={12}>
            <Line data={data_1} options={options_3} onClick={handleChartClick} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={4} direction='row'>
          <Grid item xs={6}>
            <Bar data={data_1} options={options_1} onClick={handleChartClick}/>
          </Grid>
          <Grid item xs={6}>
            <Bar data={data_2} options={options_2} onClick={handleChartClick}/>
          </Grid>
          <Grid item xs={12}>
            <Bar data={data_1} options={options_3} onClick={handleChartClick}/>
          </Grid>
        </Grid>
       )
       }
    </StyledBody>
  )
};


const StyledBody = styled.div`

background-color: #bebebe;
height:auto;
padding: 0.8rem;
box-sizing: border-box;

.MuiGrid-grid-xs-12 {
  display: flex;
  justify-content: center;
  canvas {
     max-width: 70rem;
  }
}

.MuiGrid-spacing-xs-4 {
  justify-content: space-evenly;
}

.MuiGrid-grid-xs-6 {
  max-width: 34rem;
}

canvas {
  background-color: #f6f6f6;
  border-radius: 25px;
  padding: 1rem 1rem 0 0;
  box-shadow: 1px 3px 5px grey;
}

.line_bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  margin-right: 3rem;
 .button{
  margin-right: 1.5rem;
 }
}

.activeChart {
  box-shadow: 1px 3px 5px black;
}
`;
