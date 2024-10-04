import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'

.root {
    --bg-color: #222831;
    --primary-color: #DDDDDD;
    --secondary-color: #F05454;
    --font: "Nunito Sans", sans-serif;
}

.body {
    background-color: var(--bg-color);
    color: var(--primary-color);
    font-family: var(--font);
    height: 100vh;
    margin: 0;
}

.header {
    background-color: var(--primary-color);
    text-align: center;
    padding: 1px;
}

.h1 {
    font-size: 2rem;
    color: var(--bg-color);
    font-weight: 700;
}

.nav {
    display: flex;
    justify-content: center;
    font-weight: 400;
}

.nav a {
    text-decoration: none;
    color: var(--bg-color);
    margin: 0 2rem 1rem 0rem;
    font-size: 1.2rem;
}

.nav a:hover {
    text-decoration: underline;
    transform: scale(0.90);
    transition: transform 0.1s;
}

.graficos-container {
    margin: 5rem;
}

.grafico {
    margin-top: 3rem;
}

.graficos-container__texto {
    font-size: 1.3rem;
    text-align: center;
    padding: 2rem;
    border: var(--secondary-color) solid 2px;
}

.span {
    font-weight: bold;
    color: var(--secondary-color);
}

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--bg-color);
    width: 100%;
    height: 3rem;
    margin-top: 2rem;
}raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()b