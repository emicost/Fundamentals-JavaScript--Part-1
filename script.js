 

 //Notiuni de introduere in Javascript partea 1 curs. 



let country = 'Romania';
let continent = 'Europe';
let population = 2000;

console.log(country);
console.log(continent);
console.log(population);




//Aici las comentarii pentru a explica ce face cod ul meu 

 



language="Romania";
const country ="Romania";
const continent ="Europe";
const isIsland = "false";

isIsland = true;




// Math operators 
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas,ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


const firstName = 'Jonas';
const lastName = "Munteanu ";
console.log (firstName + " "+ lastName );




//Assisgnment operators (operatori de atributie )
let x = 10 + 5; // 15 
x += 10 ; // x= x + 10 
x *= 4 // x= x * 4
x ++;//x=x+1

console.log(x);





// Comparision operators 

console.log( ageJonas > ageSara);
console.log(ageSarah >= 18);
 
const isFullAge = ageSarah >= 18;
 console.log (now - 1991 > now - 2018);


 console.log(populatia /2 );
 const populattia = populatia *1;
 const.log(populatia)
 

const now = 2037;
const ageJonas = now - 1991;
const ageSara= now - 2018;

console.log(now - 1991 > now - 2018);
 
let x,y;
x = y = 25-10-5;
console.log( x,y);
 



const massMark = 79;
const heightMark = 1.69;
const massJonh = 92;
const heightJonh = 1.95
const BMIMark =  massMark/heightMark ** 2 ;
const BMIJonk = massJonh / heightJonh ;

const markHigherBMI =  BMIMark > BMIJonk ;


console.log( BMIMark,BMIJonk );
console.log(markHigherBMI);




//Template literals


const firstName ="Mihai";
const job ="Dealear";
const birthYear = "2001";
const year =" 2037";

const Mihai ="I am " + firstName + ", a " + ( year - birthYear)  + "yesrs old " + job + "!" ;
 
console.log (Mihai);

const JonasNew = ` I am ${firstName}, a ${year - birthYear } yesrs old ${job} ! `;
console.log(JonasNew);
 
console.log('Just a regular spring');

console.log(" Spring with \n\
      multiple \n\
      lines");

console.log(`Spring 
      multimple 
      lines`);


 //if else
      const age = 15; // Changed to a number instead of a string// Correct comparison without quotes
      
      if (age >= 18) {
          console.log("Sarah can start driving license");
      }
      else{
      
            const yesrsleft  = 18 - age ;
            console.log(`Sarah is to young. Wait anothers 
            ${years later } years:)`);
      }
      


      const birthYear = 2012;


      let century ;
      if (birthYear >= 2000 ){
             century = 20 ; 
      } else{
             century = 21;

      }
      console.log(century);
      





const inputYear = "1991";
console.log(Number(inputYear) ,inputYear);
console.log(Number(inputYear) + 18);


    console.log(Number('Jonas'));  
    console.log(typeof NaN );

    console.log(String(23,23 ));
    

   
   
    //type coercion 

    console.log( 'i am '  + 23  +  'years old');
    console.log( '23' + '10' + 3 );
    console.log( '23 ' / '2');

    let n= '1 ' + 1  ; // raspunsul corect este 11 
    n = n - 1 ; // acum sacadem 11 cu 1 
    console.log(n ); in consosle este afisat 10 








  // Truly and False Values 
   
   // Fals Values=   "0 " "undefined " " null" " NaN";
     
  
   console.log(Boolean(0));
   console.log(Boolean(undefined));
   console.log(Boolean('Jonas'));
   console.log(Boolean({}));

   

  const money = 0;// este o valoare falsa 0, daca o schimbam se va executa "else"
  if (money){
      console.log("Don t spend it all"); 
  }
  else{
      console.log("You shode get a job");
  }


let height;// PENTRU CA NU ESTE DEFINIT ESTE FALSA  
if(height){
      console.log('YAY ! Height is defined');
}
else{
      console.log('Height is UNDEFINED');
}





 
// Equality Operators == vs ===


const age = 18 ;
if(age === 18 )console.log('You gest becomea an adult ');// Ne va da o valoare adevarata

// "=== " verifica daca timpul de date si valoarea  lor este la fel (cel mai recomandat de folosit )
// "==" verifica daca sunt datele sunt egele 

if(age === '18' )console.log('You gest becomea an adult '); 
// acum nu mai este adevarta este una falsa 


const favourite = Number (prompt("What's your favorite number?"));
console.log(favourite);

if(favourite === 23){ //23 ==23 ->True
      console.log('Coll good number');
}
else if(favourite ===7){
      console.log('Number is 7');
}
else{
      console.log('Number is not 7 or 23');
}
      */


// Bolleam Logic 

// O valoarea poate fii adevarta cand toate celelelte volori sunt adevarate. Pentru acest aspect avem operatorul 'AND'

//Operatorul "OR" , chiar daca una dintre variabile este falsa atata timp cat una dintre variabile este adevarata operatiunea nostra va fii una ADEVARATA. 

//Operatorul NOT inverseaza variabilele, transforma ceea adevarata in falsa si invers 

 

//LogicaL Operators "AND" "OR" "AND"

const hasDriverLicense = true;//A
const hasGoodVision = true;//B

console.log( hasDriverLicense && hasGoodVision);//Asa arata operatorul AND 
console.log( hasDriverLicense || hasGoodVision);//Asa arata operatorul AND 

console.log( !hasDriverLicense);//Asa arata operatorul NOT,schimba valoarea varibilei. Acesta a devenit Falsa. 

if(hasDriverLicense && hasGoodVision ){// pentru ca este o conditie adevarata de executa comanda in consola 
   console.log('You can drive');
}
else{
   console.log('Nu poti sa conduci');
}


const isTired = true;//in acest ca valoarea nostra este adevarta.
console.log(hasDriverLicense && hasGoodVision && ! isTired );//Dupa ce am adaugat operatorul NOT 'IsTired'devine Fals. 
if(hasDriverLicense && hasGoodVision && ! isTired){
      console.log('You can drive ')//nu se va executa pentru una dintre valori nu este adevarata
}
else{
      console.log('You can t drive... ')};//acesta comanda se va executa intructa una dintre valori nu este adevarata. 

      */


      //Coding Exercise 3 
      

  const hasDriveLicense = true;//A
  const hasGoodVision = true;//B 
  
  
  console.log(hasDriveLicense && hasGoodVision );///Daca toate valorile sunt adevarate se va execta (true)
  console.log(hasDriveLicense || hasGoodVision );//Daca unde una este adevarata se la executa comnada (true)
  console.log(!hasDriveLicense);



if(hasDriveLicense && hasGoodVision ){//Folosind AND
      console.log('You are able to drive');
}
else{
      console.log('Someone else shoul drive ');
}
 

//const hasDriveLicense = true;//A
//const hasGoodVision = true;//B 
const isTire = true;//C //Folosind OR 
  
console.log(hasDriveLicense && hasGoodVision && !isTire  );

  if(hasDriveLicense && hasGoodVision && !isTire )// Folosim NOT 
      {console.log('You are able to drive')
}
else{
      console.log('Someone else shoul drive ');
} 
      




//Switch Statment 

const day ="Monday";//In functie de ziua de pare o alegem se va executa in consosla. 
switch (day) {
      case 'Monday'://day===Monday
      console.log('Tema la romana');
      console.log('Test la mate');
      break;//desparte blocurile de informatii 

 
      case 'Tuesday':
            console.log('Pregatire pentru istorie');
      break;//fara acesata 'break' va continua pana apare una.

      case'Weddnesday':
      case'thursaday':
       console.log('Test la Engleza');
      break;

      case'Friday':
       console.log('Ultima zi de scoala');

      break;


      case'saturday':
      case'sunday':
       console.log('ziua mea libera');
      break;
      default:
            console.log('Nu sunt valide ');
}


const day ="Friday";//Am trasnformat intr-un cod lofic folosind if,else if, else d

if(day == 'Monday'){
      console.log('Tema la romana');
      console.log('Test la mate');
}
else if (day == 'Tuesday'){
      console.log('Pregatire pentru istorie');
}
else if (day == 'Weddnesday'){
      console.log('Pregatire pentru istorie');
    console.log('Test la Engleza');
   
}
else if (day == 'Friday'){
      console.log('Ultima zi de scoala');
    
}


//Statments and Expressions

//Orice care produc un Booleum valeum este o expresie. 

//1. Statements sau le mai putem spunde si Instructiunii sunt bucatile de cod care ne arata o actiune. Putem avea constante logice if, else sau momente in care oferim variabile let sau const 

//2.Expressions sau expresii sunt acele unitati de cod care pot sa returneze o valoare (in consola ).Acestea pot sa fie simple sau compuse. 




