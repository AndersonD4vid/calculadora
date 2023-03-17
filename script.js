function calcular(){

   var operacao = document.getElementById('operacao').value;

   var valorUm = document.getElementById('valorUm').value;
   var valorDois = document.getElementById('valorDois').value;

   valorUm = parseFloat(valorUm);
   valorDois = parseFloat(valorDois);

   if(valorUm === '' || valorDois === ''){
      alert('Por favor, digite algum valor!');
   }

   var resultado = null;

   switch(operacao){
      case '1': // subtração
         resultado = valorUm - valorDois;
         break;
      case '2': // adição
         resultado = valorUm + valorDois;
         break;
      case '3': // multiplicação
         resultado = valorUm * valorDois;
         break;
      case '4': // divisão
         resultado = valorUm / valorDois;
         break;
      case '5': // divisão
         resultado = (valorUm / 100) * valorDois;
         break;

      default : 
         alert('Operação inválida, escolha outra!');
         return false;
}

document.getElementById('resultado').value = resultado;

}

function limpar(){
   valorUm = document.getElementById('valorUm').value = '';
   valorDois = document.getElementById('valorDois').value = '';
   valorDois = document.getElementById('resultado').value = '';
}