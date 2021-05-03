// Easy Tools Js v1.0 min


class CalcArray{constructor(){this.addArray=0;this.productA;this.averagea=0;this.object={}}
adition(array){for(let i in array){this.addArray+=array[i]}
return this.addArray}
product(array){this.productA=1;for(let i in array){this.productA*=array[i]}
return this.productA}
average(array){for(let i in array){this.averagea+=array[i]}
return this.averagea/array.length}
type(array){let aux=0,aux2=0,aux3=0,aux4=0;if(array.length>0&&array.includes(NaN)==!1&&array.includes(undefined)==!1&&array.includes(null)==!1){for(let i in array){if(typeof(array[i])==="number"){aux=1}else if(typeof(array[i])==="string"){aux2=1}else if(typeof(array[i])==="boolean"){aux3=1}else if(typeof(array[i])==="object"){aux4=1}}}else{if(array.length<=0)return"emply";else return!1}
if(aux==1&&aux2==0&&aux3==0&&aux4==0){return"number"}else if(aux==0&&aux2==1&&aux3==0&&aux4==0){return"string"}else if(aux==0&&aux2==0&&aux3==1&&aux4==0){return"boolean"}else if(aux==0&&aux2==0&&aux3==0&&aux4==1){return"object"}else if(aux!=0||aux2!=0||aux3!=0||aux4!=0){return"mixed"}}
arrayTObject(array){for(let i in array){this.object[i]=array[i]}
return this.object}}
class Areas{constructor(){this.area=!0}
circle(radio){this.area=Math.PI*radio**2;return this.area}
square(side){this.area=side**2
return this.area}
triangule(base,height){this.area=base*height/2;return this.area}
rectangule(base,height){this.area=base*height;return this.area}
rombo(mayorDiagonal,menorDiagonal){this.area=mayorDiagonal*menorDiagonal/2;return this.area}
trapecio(mayorBase,menorBase,height){this.area=mayorBase+menorBase/2*height;return this.area}
sphere(radio){this.area=4*Math.PI*radio**2;return this.area}
cube(side){this.area=6*side**2;return this.area}
tetrahedron(edge){this.area=4*(Math.sqrt(3)/4*edge**2);return this.area}}
class Perimeter{constructor(){this.perimeter=0}
square(side){this.perimeter=side*4;return this.perimeter}
triangule(side1,side2,side3){this.perimeter=side1+side2+side3;return this.perimeter}
circle(radio){this.perimeter=2*Math.PI*radio;return this.perimeter}
rectangule(sidea,sideb){if(sidea!=sideb){this.perimeter=(sidea*2)+(sideb*2);return this.perimeter}}
cube(heigth,large,width){this.perimeter=(4*heigth)+(4*large)+(4*width);return this.perimeter}
shepere(radio){let diameter=radio*2;this.sheperep=Math.PI*diameter;return this.sheperep}
nAgono(sides,type){if(sides.length===type&&sides.length>=4){for(let i in sides){this.perimeter+=sides[i]}}
return this.perimeter}}
class Conjunts{constructor(){this.unionc;this.intersectionc=[];this.diferencec=[];this.complementc=[];this.simetricDiferencec=[]}
union(conjunt1,conjunt2){this.unionc=conjunt1.concat(conjunt2);return this.unionc}
intersection(conjunt1,conjunt2){for(let i in conjunt1){if(conjunt2.includes(conjunt1[i])){this.intersectionc.push(conjunt1[i])}}
return this.intersectionc}
diference(conjunt1,conjunt2){for(let i in conjunt1){if(conjunt2.includes(conjunt1[i])){}else{this.diferencec.push(conjunt1[i])}}
return this.diferencec}
simetricDiference(conjunt1,conjunt2){for(let i in conjunt1){if(conjunt2.includes(conjunt1[i])){}else{this.simetricDiferencec.push(conjunt1[i])}}
for(let i in conjunt2){if(conjunt1.includes(conjunt2[i])){}else{this.simetricDiferencec.push(conjunt2[i])}}
return this.simetricDiferencec}
complement(universal,conjunt){for(let i in universal){if(conjunt.includes(universal[i])){}else{this.complementc.push(universal[i])}}
return this.complementc}}
class Statistics{constructor(){this.mediad;this.promediod;this.medianad;this.rangod;this.varianced=0;this.standarDesviaciond}
media(data){this.mediad=0;for(let i in data){this.mediad+=data[i]}
return this.mediad/data.length}
average(data){let averaged=0;for(let i in data){averaged+=data[i]}
return averaged/data.length}
mediana(data){let orderData=data.sort((a,b)=>a-b);let value;let mid=orderData.length/2;if(orderData.length%2==0){this.medianad=(orderData[mid-1]+orderData[mid])/2.0}else{value=Math.floor(mid);this.medianad=orderData[value]}
return this.medianad}
range(data){let maximun=0;for(let i in data){if(maximun<data[i]){maximun=data[i]}}
let minimun=data[0]
for(let i in data){if(data[i]<minimun){minimun=data[i]}}
return maximun-minimun}
variance(data){let n=data.length;let variance=0;let add=0;for(let i in data){add+=data[i]}
let average=add/data.length;for(let i in data){this.varianced+=Math.pow((data[i]-average),2.0)}
return this.varianced/(n-1)}
standarDesv(data){let variance=this.variance(data);this.standarDesviaciond=Math.sqrt(variance);return this.standarDesviaciond}}
class AnaliticGeometry{constructor(){this.rectEquationp;this.distancep=0;this.pendingp;this.midPointp}
equation(x1,x2,y1,y2){if(x1===x2){return!1}else{this.rectEquationp=`y=${(y2 - y1) / (x2 - x1)}x+${(-(y2 - y1) * x1 / (x2 - x1) + y1)}`
return this.rectEquationp}}
distance(x1,x2,y1,y2){let x=x2-x1;let y=y2-y1;let distanceAux=Math.pow(x,2)+Math.pow(y,2);this.distancep=Math.sqrt(distanceAux);return this.distancep}
midPoint(x1,x2,y1,y2){let mx=(x2+x1)/2;let my=(y2+y1)/2;this.midPointp=[mx,my];return this.midPointp}
pending(x1,x2,y1,y2){this.pendingp=((y2+y1)/(x2-x1));return this.pendingp}}
class Equations{constructor(){this.simpleEquationd;this.quadraticEquationd}
simple(a,sign,b,c){if(a!=0&&sign=="+"){this.simpleEquationd=(c-b)/a}else if(a!=0&&sign=="-"){this.simpleEquationd=(c+b)/a}else if(a!=0&&sign=="*"){this.simpleEquationd=(c/b)/a}else if(a!=0&&sign=="/"){this.simpleEquationd=(c*b)/a}else{return!1}
return this.simpleEquationd}
cuadratic(a,b,c){let determinator=Math.pow(b,2)-(4*a*c);let value1=0;let value2=0;if(determinator>0&&a!=0){value1=((b*(-1))+Math.sqrt(determinator))/(2*a);value2=((b*(-1))-Math.sqrt(determinator))/(2*a);this.quadraticEquationd=[value1,value2];return this.quadraticEquationd}else{return"is not a real number"}}}
class FormValidation{constructor(){this.confirmation=!0}
email(email){let position;let counter=0;let charters="_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@-_+{}|~`!*$%&=?/'";for(let i in email){if(email[i]==='@'){counter+=1}
if(charters.includes(email[i])){}else{return!1}}
for(let i in email){if(email[i]==='@'){position=i;if(position>0&&counter==1){for(let i in email){if(email[i]=='.'&&email[i]!=email[0]){if(email[i]=='.'&&position>email[i]&&email[i]!=email.charAt(email.length-1)){return this.confirmation}}}}}}}
phone(min,max,number){let lengthNumber=number.toString().length;if(typeof(number)=='number'&&lengthNumber>=min&&lengthNumber<=max){this.confirmation}else{return!1}}
input(min,max,input,t){for(let i in t){if(input.includes(t[i])){return!1}}
if(input.length>min&&input.length<=max&&input.length>0){return this.confirmation}else{return!1}}
passaword(passaword1,charmin){let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ",lower="abcdefghijklmnopqrstuvwxyz",numbers="0123456789";let validation1,validation2,validation3;if(charmin>0)
if(passaword1.length<charmin)return!1;for(let i in capital){if(passaword1.includes(capital[i])){validation1=!0}}
for(let i in lower){if(passaword1.includes(lower[i])){validation2=!0}}
for(let i in numbers){if(passaword1.includes(numbers[i])){validation3=!0}}
if(validation1==!0&&validation2==!0&&validation3==!0){return this.confirmation}}}
class Generate{constructor(){this.array=[];this.strings="";this.numberg=0}
number(min,max){this.numberg=(Math.floor(Math.random()*(max-min))+min);return this.numberg}
string(length){let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let charactersLength=characters.length;for(let i=0;i<length;i++){this.strings+=characters.charAt(Math.floor(Math.random()*charactersLength))}
return this.strings}
arrayN(numberof){if(numberof<1000000){let generator;for(let i=0;i<numberof;i++){generator=parseInt(Math.random()*100);this.array.push(generator)}
return this.array}}
arrayS(numberof){let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let charactersLength=characters.length;if(numberof<1000000){for(let i=0;i<numberof;i++){this.strings=this.string(Math.floor(Math.random()*(10-1))+1);this.array.push(this.strings);this.strings=""}}
return this.array}}
const functionTest=(param,method,test,answer)=>{let values=[];let lenTest=0,datas=[];if(param==1){for(let i in test){if(method(test[i])==answer[i])
values.push(!0);else values.push(!1)}}
if(test.length==answer.length){if(param==2){for(let i in test){param1=test[i][0];param2=test[i][1];if(method(param1,param2)==answer[i])
values.push(!0);else values.push(!1)}}else if(param==3){for(let i in test){param1=test[i][0];param2=test[i][1];param3=test[i][2];if(method(param1,param2,param3)==answer[i])
values.push(!0);else values.push(!1)}}else if(param==4){for(let i in test){param1=test[i][0];param2=test[i][1];param3=test[i][2];param4=test[i][3];if(method(param1,param2,param3,param4)==answer[i])
values.push(!0)
else values.push(!1)}}else if(param==5){for(let i in test){param1=test[i][0];param2=test[i][1];param3=test[i][2];param4=test[i][3];param5=test[i][4];if(method(param1,param2,param3,param4,param5)==answer[i])
values.push(!0);else values.push(!1)}}else if(param==6){for(let i in test){param1=test[i][0];param2=test[i][1];param3=test[i][2];param4=test[i][3];param5=test[i][4];param6=test[i][5];if(method(param1,param2,param3,param4,param5,param6)==answer[i])
values.push(!0);else values.push(!1)}}else if(param==7){for(let i in test){param1=test[i][0];param2=test[i][1];param3=test[i][2];param4=test[i][3];param5=test[i][4];param6=test[i][5];param7=test[i][6];if(method(param1,param2,param3,param4,param5,param6,param7)==answer[i])
values.push(!0);else values.push(!1)}}}
if(values.includes(!1)==!0)return!1;else{if(values.length>0)return!0}}
const typeMethod=(method,expetedType,datas)=>{let typeMethod=typeof(method);let dataType;let expected;if(expetedType==typeMethod){dataType=!0}else{dataType=undefined}
if(dataType!=undefined&&dataType===!0&&datas===1){expected={"expetedType":expetedType,"typeMethod":typeMethod,"validation":dataType};return expected}else if(dataType===undefined&&datas===1){expected={"expetedType":expetedType,"typeMethod":typeMethod,"validation":!1};return expected}
if(dataType!=undefined&&dataType===!0&&datas!=1){return!0}else if(dataType!=undefined&&datas!=1){return!1}else{return typeMethod}}
class Stack{constructor(){this.stack=[]}
insert(element){this.stack.push(element);return this.stack}
delete(){this.stack.pop();return this.stack}
showSize(){return this.stack.length}
viewElements(){return this.stack}}
class Queue{constructor(){this.queue=[]}
insert(element){this.queue.push(element);return this.queue}
delete(){return this.queue.shift()}
showSize(){return this.queue.length}
viewElements(){return this.queue}}
class LinkedListItem{constructor(value,next){this.value=value;this.next=next}}
class LinkedList{constructor(){this.head=null}
prepend(value){const newItem=new LinkedListItem(value,this.head);this.head=newItem}
find(value){if(!this.head){return null}
let currentNode=this.head;while(currentNode){if(currentNode.value===value){return currentNode}
currentNode=currentNode.next}}
deleteHead(){if(this.head){if(this.head.next){const secondNode=this.head.next;this.head=secondNode}else{this.head=null}}}
viewElements(){let currentNode=this.head;while(currentNode){console.log(currentNode.value);currentNode=currentNode.next}}}
const quickSort=(array)=>{if(array.length<=1){return array}
var index=array[0];var left=[];var right=[];for(var i=1;i<array.length;i++){if(array[i]<index){left.push(array[i])}else{right.push(array[i])}}
return quickSort(left).concat(index,quickSort(right))};const bubbleSort=(array)=>{let sortVar;for(let i=0;i<array.length;i++){for(let j=0;j<array.length-i;j++){if(array[j]>array[j+1]){sortVar=array[j];array[j]=array[j+1];array[j+1]=sortVar}}}
return array}
const binarySearch=(value,array)=>{let first=0;let last=array.length-1;let position=!1;let found=!1;let middle;while(found===!1&&first<=last){middle=Math.floor((first+last)/2);if(array[middle]==value){found=!0;position=middle}else if(array[middle]>value){last=middle-1}else{first=middle+1}}
return position}
const ofArray=new CalcArray();const areaOf=new Areas();const perimeterOf=new Perimeter();const ofConjunts=new Conjunts();const statistic=new Statistics();const geometryCart=new AnaliticGeometry();const equations=new Equations();const forms=new FormValidation();const generate=new Generate();const stack=new Stack();const queue=new Queue();const linkedList=new LinkedList()


export {

    ofArray,
    areaOf,
    perimeterOf,
    ofConjunts,
    geometryCart ,
    equations,
    statistic,
    generate,
    formTools,
    stack,
    queue,
    linkedList,
    binarySearch,
    bubbleSort,
    quickSort,
    typeMethod,
    functionTest

};
