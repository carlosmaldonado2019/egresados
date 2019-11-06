$(function () {

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta6.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica6(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta8.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica8(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta9.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica9(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta10.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica10(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta11.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica11(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta12.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica12(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta13.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica13(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta14.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica14(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta14a.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica14a(data);
    })
        .fail(function (data) {
            alert('error');
        })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta15.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica15(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta16.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica16(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta17.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica17(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta18.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica18(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta19.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica19(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta20.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica20(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta21.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica21(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta22.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica22(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta23.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica23(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A1.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_1(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A2.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_2(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A3.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_3(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A4.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_4(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A5.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_5(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A6.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_6(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A7.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_7(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A8.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_8(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-A9.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24_9(data);
    })

    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B1.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b1(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B2.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b2(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B3.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b3(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B4.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b4(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B5.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b5(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B6.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b6(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B7.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b7(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B8.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b8(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B9.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b9(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta24-B10.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica24b10(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta26.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica26(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-1.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_1(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-2.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_2(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-3.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_3(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-4.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_4(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-5.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_5(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-6.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_6(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-7.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_7(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-8.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_8(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-9.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_9(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-10.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_10(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-11.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_11(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-12.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_12(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-13.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_13(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-14.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_14(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-15.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_15(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-16.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_16(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-17.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_17(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-18.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_18(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-19.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_19(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta27-20.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica27_20(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta28.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica28(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta29.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica29(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta30.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica30(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta31.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica31(data);
    })
    $.ajax({
        type: "GET",
        url: '../admin/graficas/pregunta32.php',
        contentType: 'application/json',
        dataType: "json"
    }).done(function (data) {

        grafica32(data);
    })
});

function grafica6(data) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Si', 'No'],
            datasets: [{
                label: '6.- ¿Esta usted titulado?',
                data: [data['si'], data['no']],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
}

function grafica8(data) {
    var ctx = document.getElementById('myChart2').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].pre8);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '8.- ¿En la realización de su proyecto de titulación ¿se integraron y aplicaron los conocimientos adquiridos durante su formación?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
}

function grafica9(data) {
    var ctx = document.getElementById('myChart3').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '9.- ¿Por qué no se ha titulado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
}

function grafica10(data) {
    var ctx = document.getElementById('myChart4').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '10.- ¿Qué tan importante considera titularse?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
}

function grafica11(data) {
    var ctx = document.getElementById('myChart5').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '11.- ¿Conoce usted las opciones de titulación que existen en la UABC para el posgrado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
}

function grafica12(data) {
    var ctx = document.getElementById('myChart6').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '12.- ¿En cuantos años cursó sus estudios de posgrado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica13(data) {
    var ctx = document.getElementById('myChart7').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '13.- ¿Cuál fue el promedio general de estudios?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica14(data) {
    var ctx = document.getElementById('myChart8').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '14.- ¿Realizó usted otros estudios de posgrado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica14a(data) {
    var ctx = document.getElementById('myChart9').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '14a.- ¿En que área?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica15(data) {
    var ctx = document.getElementById('myChart10').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '15.- ¿Siendo estudiante trabajó en actividades relacionadas con su posgrado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica16(data) {
    var ctx = document.getElementById('myChart11').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '16.- Durante la mayor parte de sus estudios de posgrado su dedicación a los estudios',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica17(data) {
    var ctx = document.getElementById('myChart12').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '17.- ¿Durante sus estudios de posgrado ¿cuál fue su principal sostén económico?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica18(data) {
    var ctx = document.getElementById('myChart13').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '18.- ¿Su trabajo actual está relacionado con sus estudios de posgrado?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica19(data) {
    var ctx = document.getElementById('myChart14').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '19.- ¿Cuánto tiempo tardó en conseguir trabajo al salir de la UABC?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica20(data) {
    var ctx = document.getElementById('myChart15').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '20.- ¿El posgrado le ayudó a mejorar sus ingresos?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica21(data) {
    var ctx = document.getElementById('myChart16').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '21.-  Considera que su formación en el posgrado, fue:',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica22(data) {
    var ctx = document.getElementById('myChart17').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '22.-  Considera que el posgrado que estudió tuvo una orientación:',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica23(data) {
    var ctx = document.getElementById('myChart18').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '23.- ¿Qué puesto tiene actualmente?',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}

function grafica24_1(data) {
    var ctx = document.getElementById('myChart19').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 1.- El nivel académico',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_2(data) {
    var ctx = document.getElementById('myChart20').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 2.- La reputación académica',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_3(data) {
    var ctx = document.getElementById('myChart21').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 3.- La administración del programa',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_4(data) {
    var ctx = document.getElementById('myChart22').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 4.- Los recursos para la investigación',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_5(data) {
    var ctx = document.getElementById('myChart23').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 5.- La biblioteca\n',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_6(data) {
    var ctx = document.getElementById('myChart24').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 6.- Los laboratorios (sí corresponde)',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_7(data) {
    var ctx = document.getElementById('myChart25').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 7.- El acceso a equipo de cómputo',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_8(data) {
    var ctx = document.getElementById('myChart26').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 8.- Las instalaciones de la universidad',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24_9(data) {
    var ctx = document.getElementById('myChart27').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-A 9.- Otro',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b1(data) {
    var ctx = document.getElementById('myChart28').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 1.- Aulas',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b2(data) {
    var ctx = document.getElementById('myChart29').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 2.- Laboratorios',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b3(data) {
    var ctx = document.getElementById('myChart30').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 3.- Sala audiovisual',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b4(data) {
    var ctx = document.getElementById('myChart31').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 4.- Estacionamientos',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b5(data) {
    var ctx = document.getElementById('myChart32').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 5.- Computadoras',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b6(data) {
    var ctx = document.getElementById('myChart33').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 6.- Velocidad del internet',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b7(data) {
    var ctx = document.getElementById('myChart34').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 7.- Limpieza general de la institución\n',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b8(data) {
    var ctx = document.getElementById('myChart35').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 8.- Biblioteca',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b9(data) {
    var ctx = document.getElementById('myChart36').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 9.- Accesos de discapacitados',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica24b10(data) {
    var ctx = document.getElementById('myChart37').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '24-B 10.- Seguridad',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica26(data) {
    var ctx = document.getElementById('myChart38').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '26.- Considera usted que los mecanismos de admisión fueron:',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_1(data) {
    var ctx = document.getElementById('myChart39').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-1.- Métodos de enseñanza',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_2(data) {
    var ctx = document.getElementById('myChart40').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-2.- Actualidad de los contenidos teóricos de las principales asignaturas',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_3(data) {
    var ctx = document.getElementById('myChart41').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-3.- Actualidad de los contenidos en general',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_4(data) {
    var ctx = document.getElementById('myChart42').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-4.- Grado de aplicabilidad de los contenidos a la realidad nacional',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_5(data) {
    var ctx = document.getElementById('myChart43').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-5.- Habilidades para la identificación y resolución de problemas',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_6(data) {
    var ctx = document.getElementById('myChart44').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-6.- Grado de vinculación temática entre las asignaturas',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_7(data) {
    var ctx = document.getElementById('myChart45').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-7.- Pertinencia del curriculum (rígido o flexible)',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_8(data) {
    var ctx = document.getElementById('myChart46').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-8.- Pertinencia y suficiencia de los materiales y apoyo técnico',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_9(data) {
    var ctx = document.getElementById('myChart47').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-9.- Pertinencia y suficiencia de los materiales bibliográficos',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_10(data) {
    var ctx = document.getElementById('myChart48').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-10.- Métodos de evaluación del aprendizaje',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_11(data) {
    var ctx = document.getElementById('myChart49').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-11.- Adecuación de las instalaciones físicas',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_12(data) {
    var ctx = document.getElementById('myChart50').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-12.- Grado de formación pedagógica de los profesores',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_13(data) {
    var ctx = document.getElementById('myChart51').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-13.- Flexibilidad del curriculum',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_14(data) {
    var ctx = document.getElementById('myChart52').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-14.- Relación maestro-estudiante',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_15(data) {
    var ctx = document.getElementById('myChart53').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-15.- Relación entre estudiantes',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_16(data) {
    var ctx = document.getElementById('myChart54').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-16.- Puntualidad y asistencia de los profesores',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_17(data) {
    var ctx = document.getElementById('myChart55').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-5.- Su aprendizaje',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_18(data) {
    var ctx = document.getElementById('myChart56').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-18.- Desarrollo de habilidades orientadas hacia la dirección ',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_19(data) {
    var ctx = document.getElementById('myChart57').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-19.- Desarrollo de habilidades para la cooperación y el trabajo en equipo',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica27_20(data) {
    var ctx = document.getElementById('myChart58').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '27-20.- Tiempo asignado a cada asignatura',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica28(data) {
    var ctx = document.getElementById('myChart58').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '28.- Los objetivos de su posgrado con relación a su actual campo de trabajo, están',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica29(data) {
    var ctx = document.getElementById('myChart59').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '29.- Los conocimientos que adquirió durante su formación en el posgrado satisfacen las necesidades de su empleo actual:',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica30(data) {
    var ctx = document.getElementById('myChart60').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {


            labels: names,
            datasets: [{
                label: '30.- ¿Considera que durante sus estudios de posgrado tuvo oportunidad de reflexionar sobre problemas éticos a los que se enfrenta en su ejercicio profesional',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica31(data) {
    var ctx = document.getElementById('myChart61').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'num. de alumnos',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: '31.- ¿Había vinculación entre los proyectos de investigación que tenía el programa y las investigaciones o proyectos de trabajo realizadas por los estudiantes para obtener el grado? '
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}
function grafica32(data) {
    var ctx = document.getElementById('myChart62').getContext('2d');
    var marks = [];
    var names = [];
    for (var i in data) {
        names.push(data[i].nombre);
        marks.push(data[i].num);
    }


    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'num. de alumnos',
                data: marks,
                backgroundColor: [
                    'rgba(255,226,45,0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255,226,45)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: '32.- ¿En la planeación curricular de su programa de posgrado se contemplaron actividades para incorporar a los estudiantes de modo activo en los proyectos de investigación o profesionales existentes? '
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    window.onload = function (e) {
        e.preventDefault();
    };
}