function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//array global
var elements = new Array();


var turns=0, changes=0, ifs = 0;

var counter = 0;
const content_items = document.getElementById('content');
const input = document.getElementById('input');
const order_b = document.getElementById('botton-order');
const button = document.getElementById('button');

button.addEventListener('click', function(){
  let value = Number(input.value);
  if(!isNaN(value) && input.value != ''){
    input.value='';

    //agregar item al DOM
    let item = document.createElement('li');
    item.textContent = value;
    item.setAttribute('style', 'order:'+counter+';');counter+=1;

    //array que contiene valor y elemento
    elements.push(new Array(value, item));



    content_items.appendChild(item);

  }else{
    alert('Tiene que ser un valor numerico');
  }
});



//agregar evento para order
var ms=1000;
order_b.addEventListener('click',async function(){
  var top;

      do {
          top = false;
          //vueltas
          for (var i=0; i < elements.length-1; i++) {
            turns+=1;
            // la magia

                    //efecto de subida
                    //efecto de subida

                      elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'top:-100px;');
                      elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'top:-100px;');
                      await sleep(1000);
                  // ms+=1000;




                  ifs+=1;

              if (elements[i][0] > elements[i+1][0]) {
                //intercambios
               changes+=1;

                // tornar de verdes
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'background:#56db1f;color:#FFF;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'background:#56db1f;;color:#FFF;');
                await sleep(500);

                //intercambiar
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'left:50px;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'left:-50px;');
                await sleep(150);


                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'left:0px;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'left:0px;');
                await sleep(150);

                //cambiar
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'left:0;order:'+(i+1)+';' );
                elements[i+1][1].setAttribute('style', elements[i][1].getAttribute('style') + 'left:0;order:'+(i)+';' );

                //bajar items
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'top:0;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'top:0;');
                await sleep(1000);


                // tornar de blancas
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'background:#FFF;color:#000;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'background:#FFF;color:#000;');
                await sleep(500);

                //fin efecto


                  var temp = elements[i];
                  elements[i] = elements[i+1];
                  elements[i+1] = temp;
                  top = true;
              }else{
                //no cambiar, tornar de rojos
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'background:red;color:#fff;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'background:red;color:#fff;');
                await sleep(500);
                //quitar rojo
                //no cambiar, tornar de blanco
                elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'background:#FFF;color:#000;');
                elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'background:#FFF;color:#000;');
                await sleep(500);
              }

              //fin de ciclo for (interno)



              //bajar items
              elements[i][1].setAttribute('style', elements[i][1].getAttribute('style') + 'top:0;');
              elements[i+1][1].setAttribute('style', elements[i+1][1].getAttribute('style') + 'top:0;');
              await sleep(1000);
          }
      } while (top);
      console.log(elements);

      //actualizar resultados
      document.getElementById('ifs').textContent = 'Comparaciones: '+ifs;
      document.getElementById('changes').textContent = 'Cambios: '+changes;
      document.getElementById('turns').textContent = 'Vueltas: '+turns;

       turns=0, changes=0, ifs = 0;

  });
