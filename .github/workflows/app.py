from flask import Flask, render_template

app = Flask(__name__)

# --- DATOS DE TU CURRÍCULUM (Variables Python) ---
CV_DATA = {
    "nombre": "Leonardo Esteller Madrigal",
    "titulo": "Estudiante de Ing. Informática | Desarrollo",
    "resumen": "Estudiante apasionado por la Ingeniería Informática, con enfoque en el desarrollo web con Python (Flask) y un sólido conocimiento de estructuras de datos y lógica de programación.",
    "experiencia": [
        {
            "puesto": "Agente de Policía",
            "empresa": "Ministerio de Seguridad Pública",
            "fechas": "Marzo - 2018 - Actualmente",
            "tareas": [
                "Coordinador de Escuadra (3 Años).",
                "Agente Conductor (5 Años)."
            ]
        },
        {
            "puesto": "Agente de Seguridad Privada",
            "empresa": "Varias Empresas de Seguridad",
            "fechas": "2010 - 2018",
            "tareas": [
                "Responsable de vigilancia y control de acceso en varios puntos críticos.",
                "Manejo de situaciones de emergencia y protocolos de seguridad."
            ]
        }
    ],
    "habilidades_tecnicas": [
        {"nombre": "Python"},
        {"nombre": "Flask/Jinja"},
        {"nombre": "HTML/CSS"},
        {"nombre": "JavaScript"},
        {"nombre": "SQL/Bases de Datos"},
    ],
    "proyectos": [
        # Puedes llenar tus proyectos aquí más tarde
    ],
    "contacto": {
        "email": "lesteller@hotmail.com", 
        "linkedin_url": "https://www.linkedin.com/in/leonardo-esteller-madrigal-7750b8141/",
        "github_url": "https://github.com/Lesteller34" 
    }
}
# ----------------------------------------------------

@app.route('/')
def home():
    # Pasamos el diccionario de datos al template
    return render_template('index.html', data=CV_DATA)

if __name__ == '__main__':
    app.run(debug=True)