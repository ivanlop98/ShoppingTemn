from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), nullable=False)
    codigo_original = db.Column(db.String(80), nullable=False)
    marca = db.Column(db.String(50), nullable=False)
    precio = db.Column(db.Float, nullable=False)
    estado = db.Column(db.String(50), nullable=False)
    imagen = db.Column(db.String(150), nullable=True) 
    imagen_hover = db.Column(db.String(150), nullable=True)
    descripcion = db.Column(db.String(200), nullable=True)

    def __init__(self, nombre, codigo_original, marca, precio, estado, imagen, imagen_hover=None, descripcion=None):
        self.nombre = nombre
        self.codigo_original = codigo_original
        self.marca = marca
        self.precio = precio
        self.estado = estado
        self.imagen = imagen
        self.imagen_hover = imagen_hover
        self.descripcion = descripcion
