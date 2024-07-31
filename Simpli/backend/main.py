from fastapi import FastAPI,Form
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

conector=mysql.connector.connect( 
    host="localhost",
    user="root",
    password="1234",
    database="simplidb"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"message":"Conexion Exitosa"}

@app.get("/get_tasks")
def get_tasks():
    cursor=conector.cursor(dictionary=True)
    cursor.execute("select * from empleado") 
    records=cursor.fetchall()
    return records

@app.post("/add_task")
def add_task(nombre: str = Form(...), rut: str = Form(...), email: str = Form(...), empresa: str = Form(...)):
    cursor = conector.cursor()
    sql = "INSERT INTO empleado (nombre, rut, email, empresa) VALUES (%s, %s, %s, %s)"
    val = (nombre, rut, email, empresa)
    cursor.execute(sql, val)
    conector.commit()
    return "Empleado agregado exitosamente"