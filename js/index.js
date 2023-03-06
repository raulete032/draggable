

var tareas= document.querySelectorAll(".tareas");
var card= document.querySelectorAll(".card");
var cardSeleccionada=null;
var tareaElegida=null;


for(let i=0;i<tareas.length;i++){
    tareas[i].addEventListener("dragover", dragover);
    tareas[i].addEventListener("drop", drop);
}

for(let i=0;i<card.length;i++)
    card[i].addEventListener("drag", drag);
    

function drag(e){
    cardSeleccionada= e.toElement;
}

function dragover(e){
    e.preventDefault();

}

function drop(e){
    tareaElegida= e.toElement;
    tareaElegida.appendChild(cardSeleccionada);
}


document.getElementById("crearTarea").onclick= function(){

    let nombrePersona= document.getElementById("inputNombrePersona").value;
    let tarea= document.getElementById("inputTarea").value;


    let div= document.createElement("div");
        div.className="card";
        div.draggable=true;
    
    //Persona
    let pPersona= document.createElement("p");
    let spanPersona= document.createElement("span");
        let txtSpanPersona= document.createTextNode("Persona: ");
        spanPersona.appendChild(txtSpanPersona);
    
        let txtPPersona= document.createTextNode(nombrePersona);
    pPersona.appendChild(spanPersona);
    pPersona.appendChild(txtPPersona);


    //Tarea
    let pTarea= document.createElement("p");
    let spanTarea= document.createElement("span");
        let txtSpanTarea= document.createTextNode("Persona: ");
        spanTarea.appendChild(txtSpanTarea);
    
        let txtPTarea= document.createTextNode(tarea);
    pTarea.appendChild(spanTarea);
    pTarea.appendChild(txtPTarea);

    div.appendChild(pPersona);
    div.appendChild(pTarea);

    div.addEventListener("drag", drag);

    document.getElementById("asignada").appendChild(div);

}