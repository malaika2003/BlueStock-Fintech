const ctx = document.getElementById('salesChart').getContext('2d');
function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.6, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

const gradient_color1=createGradient(ctx,'rgba(255, 115, 0, 1)','rgba(254, 214, 181, 1)');
const gradient_color2=createGradient(ctx,'rgba(56, 126, 209, 1)','rgba(187, 211, 239, 1)');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [, '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [{

                data: [,4, 4, 5, 6, 8, 18, 44, 50],
                borderColor: gradient_color1,
                label: 'Angel One',
                tension: 0.5,
                pointBorderColor: 'rgba(255, 115, 0, 1)',
                borderWidth: 10
            },
            {

                data: [,2, 3, 7, 12, 21, 48, 74, 79],
                borderColor: gradient_color2,
                label: 'Zerodha',
                tension: 0.5,
                pointBorderColor: 'rgba(56, 126, 209, 1)',
                borderWidth: 10


            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    
                    lineWidth: 0
                
                   
                },
                title: {
                    display: true,

                },
                
                ticks: {
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18
                    }
                }

            },
            y: {
                display: true,
                beginAtZero: true,
                grid:{
                    lineWidth: 2
                    
                },

                title: {
                    display: true,

                },
                ticks: {
                    callback: function(value, index, values) {
                        return value + 'L'; // Append 'L' to the tick labels on the y-axis
                    },
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18,
                        stepSize: 20
                    }
                }
            }
        }
    }
});



const comp = document.getElementById('complaintsChart').getContext('2d');
function createGradient(comp, color1, color2) {
    const gradient = comp.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.7, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

const gradient_color_1=createGradient(comp,'rgba(255, 115, 0, 1)','rgba(254, 214, 181, 1)');
const gradient_color_2=createGradient(comp,'rgba(56, 126, 209, 1)','rgba(187, 211, 239, 1)');



const complaintsChart = new Chart(comp, {
    type: 'line',
    data: {
        labels: [, '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [{

                data: [,220, 310, 380, 340, 300, 1400, 1380, 510],
                borderColor: gradient_color_1,
                label: 'Angel One',
                tension: 0.5,
                pointBorderColor: 'rgba(255, 115, 0, 1)',
                borderWidth: 10
            },
            {

                data: [,10, 80, 340, 345, 430, 910, 580, 390],
                borderColor: gradient_color_2,
                label: 'Zerodha',
                tension: 0.5,
                pointBorderColor: 'rgba(56, 126, 209, 1)',
                borderWidth: 10


            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                title: {
                    display: true,

                },
                ticks:{
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18
                
                    }
                }
               
            },
            y: {
                display: true,
                title: {
                    display: true,

                },
                grid:{
                    lineWidth: 2
                    
                },
                min: 0,
                max: 1800,
                ticks: {
                    callback: function(value, index, values) {
                        return value;
                    },
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18
                    }
                }
            }
        }
    }
});

const share = document.getElementById('shareHoldingChart').getContext('2d');
const gradient1 = share.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, 'rgba(255, 129, 25, 1)');
gradient1.addColorStop(1, 'rgba(255, 238, 223, 1)');

const gradient2 = share.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(27, 152, 255, 1)');
gradient2.addColorStop(1, 'rgba(222, 240, 255, 1)');



const shareHoldingChart = new Chart(share, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '',''],
        datasets: [
            {
                label: 'Share Holding',
                data: [43, 27, 10, 8, 7,3],
                backgroundColor: [
                    gradient1,
                    gradient2,
                    gradient1,
                    gradient2,
                    gradient1,
                    gradient2
                ],
                borderWidth: 0,
                borderRadius: 24,
                borderSkipped: false,
                barThickness: 53
                
            }
        ]
    },

    options: {
             responsive: true,
        plugins: {
            legend: {
                display: false,
                
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                }
                
            },
            y: {
                beginAtZero: true,
                max: 45,
                grid:{
                    lineWidth: 2
                    
                },
                ticks:{
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18
                
                    }
                }
            }
        }
    }
});

const shareZeodha = document.getElementById('shareHoldingChart2').getContext('2d');

const shareHoldingChart1 = new Chart(shareZeodha, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '',''],
        datasets: [
            {
                label: 'Share Holding',
                data: [43, 27, 10, 8, 7,3],
                backgroundColor: [
                    gradient2,
                    gradient1,
                    gradient2,
                    gradient1,
                    gradient2,
                    gradient1
                ],
                borderWidth: 0,
                borderRadius: 24,
                borderSkipped: false,
                barThickness: 53
                
            }
        ]
    },

    options: {
             responsive: true,
        plugins: {
            legend: {
                display: false,
                
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                max: 45,
                grid:{
                    lineWidth: 2
                    
                },
                ticks: {
                    callback: function(value, index, values) {
                        return value;
                    },
                    color: '#000000',
                    font : {
                        weight: 'bold',
                        size: 18
                    }
                }
            }
        }
    }
});


const finan = document.getElementById('financialsChart').getContext('2d');
const gradient_fin_1 = finan.createLinearGradient(0, 0, 0, 400);
gradient_fin_1.addColorStop(0, 'rgba(255, 129, 25, 1)');
gradient_fin_1.addColorStop(1, 'rgba(255, 238, 223, 1)');

const gradient_fin_2 = finan.createLinearGradient(0, 0, 0, 400);
gradient_fin_2.addColorStop(0, 'rgba(27, 152, 255, 1)');
gradient_fin_2.addColorStop(1, 'rgba(222, 240, 255, 1)');


        const myBarChart = new Chart(finan, {
            type: 'bar',
            data: {
                labels: ['', '', '', '', '', '', '','',''],
                datasets: [
                    {
                        label: 'Dataset 1',
                        backgroundColor: gradient_fin_1,
                        borderRadius: 24,
                        
                        borderWidth: 1,
                        data: [, 1200, 2200, 2900,,200, 700, 900]
                    },
                    {
                        label: 'Dataset 2',
                        backgroundColor: gradient_fin_2,
                        borderRadius:24,
                        borderWidth: 1,
                        data: [700, 2700, 4600, ,400, 1100, 2200,]
                    },
                  
                ]
            },
            options: {
                responsive: true,
           plugins: {
               legend: {
                   display: false,
                   
               }
           },
           scales: {
               x: {
                   display: true,
                   grid: {
                       display: false,
                   }
               },
               y: {
                   beginAtZero: true,
            
                   grid:{
                       lineWidth: 2
                       
                   },
                   ticks:{
                       color: '#000000',
                       font : {
                           weight: 'bold',
                           size: 18
                   
                       }
                   }
               }
           }
       }
   });
