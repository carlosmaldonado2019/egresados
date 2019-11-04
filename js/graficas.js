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