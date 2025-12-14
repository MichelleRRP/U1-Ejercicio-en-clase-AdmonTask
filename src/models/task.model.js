const {randomUUID} = require("node:crypto");

let tasks = [
     {id: randomUUID(), 
     title: "Aprender API Rest",
     completed: false},
     {id: randomUUID(), 
     title: "Utilizar el MVC en api rest",
     completed: false}];

     
function addTask(title){
    const task = {
    id: randomUUID(),
    title: title,
    completed: false}

    tasks.push(task);
    return task;
}


function findAll(){
return tasks;
}


function removeTask(id){
    const index = tasks.findIndex(t=>t.id===id);
    if(index ==-1)
        return false;
    tasks.splice(index,1)
    return true
}
 


//Funcion para buscar una tarea por su ID
function findByID(id){
  const index = tasks.findIndex(t=> t.id==id); //buscar el indice de la tarea 
  if(index==-1) return null; //si no se encuentra el id regresa null
  return tasks[index]; //si se encuentra, regresa la tarea encontrada
}

//Funcion para actualizar una tarea por su ID 
function updateTask(id,data){
  const index = tasks.findIndex(t => t.id === id); //buscar el indice de la tarea con el id recibido
  if (index === -1) return null; //si no existe la tarea, regresa null

  //Fusionar el objeto actual con los nuevos datos (sobrescribe lo que venga en data)
  tasks[index] = { ...tasks[index], ...data };

  return tasks[index]; //regresa la tarea ya actualizada
}

//Funcion para cambiar solo el estado de una tarea por su id
function ChangeState(id,data){
  const index = tasks.findIndex(t => t.id === id); //buscar el indice de la tarea que coincida con el id
  if (index === -1) return null; //si no existe la tarea, regresa null

  //solo se aplican las propiedades que llegan en "data"
  tasks[index] = { ...tasks[index], ...data };

  return tasks[index]; //regresa la tarea con el cambio aplicado
}

module.exports = {
    addTask, findAll, removeTask, findByID, updateTask, ChangeState
}