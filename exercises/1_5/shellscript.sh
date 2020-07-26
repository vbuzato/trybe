#!/bin/bash
<<COMENT

echo "Qual é sua idade"

read IDADE

#echo "Muito Prazer, $NOME"

TAREFAS="viajar votar beber sair trabalhar"

if [ $IDADE -lt 18 ]
then
    echo "Você é menor de 18 anos"
else
    echo "Você é maior de 18 anos"
    for TAREFA in $TAREFAS
        do
            echo "Agora você já pode $TAREFA."
        done
fi

COMENT

