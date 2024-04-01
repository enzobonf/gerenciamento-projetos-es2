#!/bin/bash

# Função para aguardar o banco de dados estar disponível
wait_for_db() {
  echo "Aguardando o banco de dados estar disponível..."
  while ! nc -z db 3306; do
    echo "Banco de dados não está disponível, tentando novamente em 1 segundo..."
    sleep 1
  done
  echo "Banco de dados pronto!"
  npx prisma db seed
}

# Aguardar o banco de dados estar disponível
wait_for_db 
