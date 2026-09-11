#!/bin/sh
# Preparação automática do Laravel a cada start do container.
set -e

# Garante que o arquivo do banco SQLite exista.
touch database/database.sqlite

# Recria o schema e popula os produtos (ambiente de aula, sempre limpo).
php artisan migrate:fresh --seed --force

# Sobe o servidor de aplicação do Laravel.
php artisan serve --host=0.0.0.0 --port=8000
