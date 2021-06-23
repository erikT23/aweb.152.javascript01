
        var fecha = new Date();
        var texto = new String ();
        var horas = fecha.getHours();

        if (horas < 12){
            alert ("Buenos dias, ingrese sus datos")
        };
        if (horas >= 12 && horas < 18){
            alert ("Buenas tardes, ingrese sus datos")
        };
        if (horas >= 18){
            alert ("Buenas noches, ingrese sus datos")
        };




    
    var nombre = "";
    var edad = 0;
    var localidad ="" ;   
    var profesion = "";

        nombre = prompt("Cual es tu nombre?");
        edad = prompt("Cual es tu edad?");
        localidad = prompt("Cual es tu localidad?");
        profesion = prompt("Cual es tu profesion?");

        var respuesta = confirm("Los datos son correctos? " +
                                "\n Nombre: " +nombre+
                                "\n Edad: " +edad+
                                "\n locadlidad: " +localidad+
                                "\n Profesion: " +profesion);


        if (respuesta){
                document.writeln ("<center>")
            document.writeln("<table border=1>");
            //renglon 1
                document.writeln("<tr>");
                    document.writeln("<td rowspan='4' width='25%' >");
                        document.writeln("foto");
                    document.writeln("</td>");

                    document.writeln("<td>");
                        document.writeln("<b>Nombre: </b> <div>"+nombre+"</div>");
                        document.writeln("</td>");
                    document.writeln("</tr>");

                    document.writeln("<tr>");
                        document.writeln("<td>");
                            document.writeln("<b>Edad: </b> "+edad);
                        document.writeln("</td>");

                    document.writeln("</tr>");

                    document.writeln("<tr>");
                        document.writeln("<td>");
                            document.writeln("<b>Localidad: </b> "+localidad);
                        document.writeln("</td>");
                    document.writeln("</tr>");

                    document.writeln("<tr>");
                        document.writeln("<td>");
                        document.writeln("<b>profesion: </b>"+profesion);
                    document.writeln("</td>");
                document.writeln("</tr>");
            document.writeln("</table>");
            
            var btn = document.createElement("button");
            btn.textContent = "cambiar nombre";
            btn.setAttribute("type","button");
            btn.setAttribute("onclick","cambiarNombre()");
            document.body.appendChild(btn);

            var br = document.createElement("br");

            var ctrlNombre = document.createElement("input");
            ctrlNombre.setAttribute("type","text");
            ctrlNombre.setAttribute("id","ctrl-nombre");

            document.body.appendChild(ctrlNombre);
            document.body.appendChild(br);
            document.body.appendChild(btn);



        }else{
            alert ("Gracias por visitarnos, vuelve pronto");
        }


        function cambiarNombre(){
            var ctNombre = document.getElementById('ctrl-nombre');
            var nombre = document.getElementById("nombre");
            nombre.innerHTML = ctNombre.value;



        }
        