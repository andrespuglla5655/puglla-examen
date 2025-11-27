const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function sumar(a, b) {
  return a + b;
}
module.exports = { sumar };

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alexis verificando los cambios, que si vale</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }

        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            border: 1px solid rgba(255, 255, 255, 0.18);
            max-width: 600px;
            width: 90%;
        }

        .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .tech-stack {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .tech-item {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            transition: transform 0.3s ease;
        }

        .tech-item:hover {
            transform: translateY(-2px);
        }

        .footer {
            margin-top: 2rem;
            font-size: 0.8rem;
            opacity: 0.7;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            .container {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="icon">🚀</div>
        <h1>alexis nuevos cambios</h1>
        <p>Aplicación Node.js desplegada exitosamente usando Express, Docker y CI/CD</p>

        <div class="tech-stack">
            <span class="tech-item">Node.js</span>
            <span class="tech-item">Express</span>
            <span class="tech-item">Docker</span>
            <span class="tech-item">GitHub Actions</span>
            <span class="tech-item">Docker Swarm</span>
        </div>

        <div class="footer">
            <p>Desarrollado con ❤️ usando tecnologías modernas</p>
        </div>
    </div>
</body>
</html>
  `);
});

// Solo iniciar el servidor si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}
