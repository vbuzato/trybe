#!/bin/bash
variavel="Usuário: $(whoami)"
echo $variavel
echo " "
read -p "Qual é seu nome? " NOME
read -p "Qual a sua idade? " IDADE
echo "Olá ${NOME}, você tem ${IDADE} anos."
echo "Seu usuário é o $(whoami) e você está no diretório $(pwd)."


