#!/bin/bash
#exercicios_bonus_shell_script.sh
 
words=( shell script usando estrutura repetição 'for' terminal )
#echo -e "\n\n${words[@]}" # echo usando quebra de linha com a opção -e
for i in ${words[@]}
    do
        echo "$i"
    done

