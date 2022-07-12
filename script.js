//DOM - document object model - reprezentarea vizuala a elementelor html in obiecte js
//1. Identificarea elem. html necesare din pagina
// elementele input button, lista (ul,li)
//identf. flow-ul/procesul pentru functionalitatea de implementat
//dupa introducerea textului in input, la apasarea butonului add=> se adauga textul ca ultim element in lista
//1. introduc text input
//2 apas buton add
//3. adaug element text in lista

// detalii de implementare

//declaram variabile pentru elementele din pagina html
let inputElem = document.getElementById("shopping-input")
let buttonElem = document.getElementById("shopping-butoon")
let listenElem = document.getElementById("shopping-ul")

//identificam actiunea din pagina si atasam un event listener pe el (ascultam, dupa evenimente pe acel element, pe buton)

buttonElem.addEventListener("click", addElementToList)

//identificam pasii pe care vrem sa ii implementam cand apare evenimentul de click
//adaugarea elementului din input in lista
function addElementToList() {
  //1.luam textul din input
  let inputValue = inputElem.value
  console.log(inputValue)
  //2. adaugam un element nou in lista care contine valoarea unui input
  //2.a. cream un element li pentru a fi adaugat in lista lui
  let li = document.createElement("li");
  //2.b. setam valoarea elem. li cu valoarea din nput
  li.innertext = inputValue;
  //2.c. atasam element li la lista lui
  listElem appendChild(li)

}