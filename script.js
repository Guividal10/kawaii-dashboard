const ctx1 = document.getElementById('grafico');

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['24/04', '28/04', '01/05', '03/05', '10/05', '17/05'],
        datasets: [{
            label: 'Faturamento',
            data: [1500, 3900, 1500, 2100, 3500, 1700],
            borderColor: '#ff6f91',
            backgroundColor: 'rgba(255,111,145,0.15)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        plugins:{
            legend:{
                display:false
            }
        }
    }
});