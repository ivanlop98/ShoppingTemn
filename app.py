from flask import jsonify, render_template, request, redirect, url_for
from conexion import app
from models import Producto, db

#Crear un end-point
@app.route('/', methods = ['GET', 'POST'])
def index():
    lista_productos = Producto.query.all()
    return render_template("menu.html", lista_productos = lista_productos)

@app.route('/producto', methods = ['GET', 'POST'])
def indexprueba():
    lista_productos = Producto.query.all()
    return render_template("producto.html", lista_productos = lista_productos)

@app.route('/seleccion_producto', methods=['GET', 'POST'])
def seleccionar_producto():
    producto = None  # Inicializa la variable producto como None
    
    if request.method == 'POST':
        # Obtén el ID del producto seleccionado desde el formulario
        producto_id = request.form.get('producto')
        
        # Usa el ID para obtener el producto correspondiente desde la base de datos
        producto = Producto.query.get(producto_id)
    
    # Lógica para obtener una lista de productos (puedes reemplazar esto con tu propia lógica)
    lista_productos = Producto.query.all()
    
    return render_template("eliminar_datos.html", lista_productos=lista_productos, producto=producto)



@app.route('/modificar_producto/<int:id>', methods=['GET', 'POST'])
def modificar_producto(id):
    productoact = Producto.query.get(id)
    if productoact is None:
        return jsonify({'error': 'Producto no encontrado'}), 404

    if request.method == 'POST':
        if request.form['action'] == 'modificar':
            nombre = request.form['nombre']
            codigo_original = request.form['codigo_original']
            marca = request.form['marca']
            precio = float(request.form['precio'])
            estado = request.form['estado']
            imagen = request.form['imagen' ]
            imagen_hover = request.form['imagen_hover' ] 
            descripcion = request.form['descripcion'] # Recibe una lista de URLs de imágenes

            if (productoact.nombre != nombre or
                productoact.codigo_original != codigo_original or
                productoact.marca != marca or
                productoact.precio != precio or
                productoact.estado != estado or
                productoact.imagen != imagen or
                productoact.imagen_hover != imagen_hover or
                productoact.descripcion != descripcion):

                productoact.nombre = nombre
                productoact.codigo_original = codigo_original
                productoact.marca = marca
                productoact.precio = precio
                productoact.estado = estado
                productoact.imagen = imagen
                productoact.imagen_hover = imagen_hover
                productoact.descripcion = descripcion

                db.session.commit()
        elif request.form['action'] == 'eliminar':
            db.session.delete(productoact)
            db.session.commit()
    return redirect("/")  # Reemplaza '/prueba' con la URL que deseas redirigir

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)



@app.route('/cargar_datos' , methods=['GET', 'POST'])
def cargar_datos():
    if request.method == 'POST':
        nombre = request.form['nombre']
        codigo_original = request.form['codigo_original']
        marca = request.form['marca']
        precio = float(request.form['precio'])
        estado = request.form['estado']
        imagen = request.form['imagen' ]
        imagen_hover = request.form['imagen_hover' ]
        descripcion = request.form['descripcion']
        producto = Producto(nombre, codigo_original, marca, precio, estado, imagen, imagen_hover, descripcion)

        db.session.add(producto)
        db.session.commit()
        return redirect('/cargar_datos')  # Redirecciona a la misma página después de agregar un producto

    return render_template('cargar_datos.html')

# ... Tu código anterior ...

# Ruta para obtener los datos de un producto por su ID
@app.route('/producto/<int:id>')
def obtener_producto(id):
    producto = Producto.query.get(id)
    if producto is None:
        return jsonify({'error': 'Producto no encontrado'}), 404

    # Convierte los datos del producto en un diccionario JSON y devuélvelo como respuesta
    producto_data = {
        'nombre': producto.nombre,
        'codigo_original': producto.codigo_original,
        'marca': producto.marca,
        'precio': producto.precio,
        'estado': producto.estado,
        'imagen': producto.imagen,
        'imagen_hover': producto.imagen_hover,
        'descripcion': producto.descripcion
    }
    return jsonify(producto_data)

# ... Tu código posterior ...

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
