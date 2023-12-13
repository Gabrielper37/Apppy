from flask import Flask, render_template, request, redirect, session
from flaskext.mysql import MySQL

app=Flask(__name__)
app._static_folder = "static"
app.secret_key = "Hello_World"

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST']='Gabrielper.mysql.pythonanywhere-services.com'
app.config['MYSQL_DATABASE_USER']='Gabrielper'
app.config['MYSQL_DATABASE_PASSWORD']='potatoman'
app.config['MYSQL_DATABASE_BD']='Gabrielper$tpocrud'
mysql.init_app(app)

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/index")
def indexOld():
    return render_template("index.html")

@app.route("/discografia")
def discografia():
   return render_template("discografia.html")

@app.route("/historia")
def historia():
   return render_template("historia.html")

@app.route("/nosotros" ,methods=["GET"])
def nosotros():
    sql = "SELECT * FROM Gabrielper$tpocrud.msglist ;"
    conn=mysql.connect()
    cursor=conn.cursor()
    cursor.execute(sql)
    msglist=cursor.fetchall()
    conn.commit()
    return render_template("nosotros.html" ,msglist=msglist)

# /Store de NOSOTROS
@app.route("/nosotros",methods=["POST","GET"])
def storage():
    NombreyApellido = request.form["fnombre"]
    Email = request.form["fcorreo"]
    Mensaje = request.form["fmensaje"]
    Respuesta = "No Respondido."
    datos = (NombreyApellido,Email,Mensaje,Respuesta)
    sql = "INSERT INTO Gabrielper$tpocrud.msglist (ID, NombreyApellido, Email, Mensaje, Status) VALUES (NULL, %s, %s, %s, %s)"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql,datos)
    conn.commit()
    return redirect("/nosotros")

# /Store de NOSOTROS
  

@app.route("/login")
def Login():
    return render_template("Login.html")

@app.route("/checklogin" ,methods=["POST","GET"])
def check():
    user = request.form["fuser"]
    password = request.form["fpassword"]
    # Tupla para el cursor, si va por separado no funciona.
    datos = (user,password)            
    # El query averigua si la tupla coincide con algun "Users" y "Passwords" en la tabla.
    sql = "SELECT Users, Passwords FROM Gabrielper$tpocrud.loginsystem WHERE Users = %s AND Passwords = %s"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql,datos)
    conn.commit()
    # Guardamos la data en resultado, si el query falla, no guarda nada.
    resultado = cursor.fetchall()
    # debug
    # print(datos)

    # verificamos si resultado tiene algo, si tiene accede, sino tira error.
    if resultado:
        # print debug para terminal
        print("Usuario y contraseña correcto")
        # Checker para saber si inicio sesion realmente o no.
        session["checker"] = True
        # Nos llevamos Checker con Session.
        return redirect("/adminnosotros")
    else:
        print("No encontro nada")
        return render_template("Login.html", status="Usuario y/o contraseña incorrecto/s")
    # "status" sirve para informarle al usuario si hay algun problema

@app.route("/adminnosotros", methods=["GET"])
def AdminNosotros():
    # Recuperamos Checker de la sesion anterior.
    checker = session.get("checker", None)
    # Con el if aseguramos que no puedan llegar hasta aca sin iniciar sesion
    if checker == True:
        sql = "SELECT * FROM Gabrielper$tpocrud.msglist ;"
        conn=mysql.connect()
        cursor=conn.cursor()
        cursor.execute(sql)
        msglist=cursor.fetchall()
        conn.commit()
        return render_template("AdminNosotros.html",msglist=msglist)
    else:
        return render_template("Login.html", status="No ha iniciado sesion.")
    

@app.route("/adminnosotros/destroy/<int:id>")
def destroy(id):
    checker = session.get("checker", None)
    if checker == True:
        conn=mysql.connect()
        cursor=conn.cursor()
        sql="DELETE FROM Gabrielper$tpocrud.msglist WHERE id=%s"
        cursor.execute(sql,id)
        conn.commit()
        return redirect("/adminnosotros")
    else:
        return render_template("Login.html", status="No ha iniciado sesion.")

@app.route('/update/<int:id>', methods=['POST',"GET"])
def update(id):
    checker = session.get("checker", None)
    if checker == True:
        # IDs=request.values["IDs"]
        Nombre=request.form['Nombre']
        Email=request.form['Email']
        Mensaje=request.form['Mensaje']
        Status=request.form['Status']
        datos=(Nombre,Email,Mensaje,Status,id)
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "UPDATE Gabrielper$tpocrud.msglist SET NombreyApellido=%s, Email=%s, Mensaje=%s, Status=%s WHERE id=%s;"
        cursor.execute(sql,datos)
        conn.commit()
        return redirect('/adminnosotros')
    else:
        return render_template("Login.html", status="No ha iniciado sesion.")



if __name__=="__main__":
    app.run(debug=True)

