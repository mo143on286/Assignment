export const options_1 = {
  layout: {
      padding: 25
    },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y:
      {
        // min: 25,
        // max: 125,
        // stepSize: 20,
        ticks: {
          // stepSize: 25,
          padding: 15,
        },
        grid: {
          drawBorder: false,
        },
      },
    x:
      {
        ticks: {
          display: false,
          padding: 15,
        },
        grid: {
          display: false,
        },
      },
  },
  // aspectRatio: 1,
};

export const options_2 = {
   layout: {
      padding: 25
    },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y:
      {
        // offset: true,
        // min: 25,
        // max: 125,
        // stepSize: 20,
        ticks: {
          // stepSize: 25,
          padding: 15,
        },
         grid: {
          drawBorder: false,
        },
      },
    x:
      {
        grid: {
          display: false,
        },
        ticks: {
          padding: 15,
        },
      },
  },
};

export const options_3 = {
  layout: {
      padding: 25
    },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y:
      {
        // min: 25,
        // max: 125,
        ticks: {
          // stepSize: 25,
          padding: 15,
        },
         grid: {
          drawBorder: false,
        },
      },
    x:
      {
        ticks: {
          padding: 15,
        },
        grid: {
          display: false,
        },
      },
  },
  elements: {
      point:{
          radius: 0
      }
   },
  aspectRatio: 3.4,
};
