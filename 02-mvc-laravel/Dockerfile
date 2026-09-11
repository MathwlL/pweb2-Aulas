# Projeto 2 — Laravel MVC.
#
# Como na Aula 02, o build cria um projeto Laravel novo com o Composer e
# depois SOBRESCREVE apenas os arquivos que interessam para a aula
# (Model, Controller, rotas, migration, seeder e views). Assim o repositório
# fica enxuto e não é preciso ter PHP/Composer instalados na máquina.

FROM php:8.3-cli

# Dependências que o Composer precisa para baixar/extrair pacotes.
RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip git libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Cria um projeto Laravel novo (gera .env, APP_KEY e usa SQLite por padrão).
RUN composer create-project laravel/laravel . --no-interaction --prefer-dist

# Sobrescreve os arquivos didáticos do MVC.
COPY app/Models/Produto.php app/Models/Produto.php
COPY app/Http/Controllers/ProdutoController.php app/Http/Controllers/ProdutoController.php
COPY routes/web.php routes/web.php
COPY database/migrations/2026_01_01_000000_create_produtos_table.php database/migrations/2026_01_01_000000_create_produtos_table.php
COPY database/seeders/DatabaseSeeder.php database/seeders/DatabaseSeeder.php
COPY resources/views/layouts/app.blade.php resources/views/layouts/app.blade.php
COPY resources/views/produtos/index.blade.php resources/views/produtos/index.blade.php
COPY resources/views/produtos/show.blade.php resources/views/produtos/show.blade.php

# Script que prepara o banco e sobe o servidor.
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8000

CMD ["/entrypoint.sh"]
