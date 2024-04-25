export const data = {
  labels: [
    "UK", "DE", "AU", "IT", "VE", "PL", "US", "MX", "CA", "BR", "FR", "KR",
    "SK", "RU", "ES", "NL", "AT", "FI", "SE", "JP", "HU", "PT", "SA", "IR",
    "DK", "NO", "CZ", "AR", "HR", "UA", "SG", "IN", "CL", "BE", "GR", "DO",
    "PH", "TH", "SI", "TW", "AE", "TR", "CN", "ZA", "RS", "PE", "HK", "EG",
    "CO", "MY", "CH", "IL", "RO", "PR", "CY", "ID", "IE", "HN"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
      borderRadius: {
        topLeft: 5,
        topRight: 5
      },
      data: [
        2369, 1979, 162, 1317, 11, 619, 3577, 437, 1062, 1219, 1672, 18, 71,
        828, 1622, 380, 70, 144, 159, 193, 108, 194, 211, 106, 100, 194, 127,
        83, 52, 30, 112, 150, 136, 158, 118, 2, 15, 27, 14, 41, 109, 60, 14, 17,
        27, 48, 9, 5, 51, 14, 11, 16, 2, 7, 11, 6, 2, 4,
      ],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    // mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Countries',
      color: '#1e40af',
      align: 'start',
      padding: 30,
      font: {
        size: 18,
        weight: 'bold'
      }
    },
    legend: {
      display: false,
      position: 'top',
      align: 'center',
      labels: {
        color: ['#000000'],
        useBorderRadius: true,
        borderRadius: 2,
        boxWidth: 14,
        boxHeight: 14,
        // padding: 10,
        font: {
          size: 11,
          // weight: 'bold'
        }
      },
      title: {
        display: false,
        padding: 0,
        color: '#0000ff',
        text: 'Legend Title',
      }
    }
  },
  scales: {
    x: {
      title: {
        display: false,
        text: 'Countries',
        color: '#000000', // BLACK
        font: {
          size: 13,
          weight: 'normal'

        }
      },
      // stacked: true,
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
      ticks: {
        display: true,
        font: {
          size: 11,
          weight: 'normal'
        },
        minRotation: 0 // Roptate the label
      }
    },
  },
}