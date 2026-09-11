<?php

namespace Database\Seeders;

use App\Models\Produto;
use Illuminate\Database\Seeder;

// SEEDER: popula a tabela com os mesmos produtos das outras arquiteturas.
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $produtos = [
            ['nome' => 'Teclado Mecânico RGB',      'preco' => 349.90,  'categoria' => 'Periféricos', 'emoji' => '⌨️', 'descricao' => 'Switches azuis, layout ABNT2 e iluminação RGB personalizável.', 'estoque' => 24],
            ['nome' => 'Mouse Gamer 16000 DPI',     'preco' => 199.90,  'categoria' => 'Periféricos', 'emoji' => '🖱️', 'descricao' => 'Sensor óptico de 16000 DPI e 7 botões programáveis.', 'estoque' => 40],
            ['nome' => 'Monitor 27" 144Hz',         'preco' => 1499.00, 'categoria' => 'Monitores',   'emoji' => '🖥️', 'descricao' => 'Painel IPS Full HD, 144Hz e 1ms de resposta.', 'estoque' => 12],
            ['nome' => 'Headset 7.1 Surround',      'preco' => 279.90,  'categoria' => 'Áudio',       'emoji' => '🎧', 'descricao' => 'Som surround 7.1 e microfone com cancelamento de ruído.', 'estoque' => 30],
            ['nome' => 'Webcam Full HD 1080p',      'preco' => 189.90,  'categoria' => 'Vídeo',       'emoji' => '📷', 'descricao' => 'Gravação em 1080p a 30fps com foco automático.', 'estoque' => 18],
            ['nome' => 'Cadeira Gamer Ergonômica',  'preco' => 1199.00, 'categoria' => 'Mobiliário',  'emoji' => '🪑', 'descricao' => 'Reclinável até 180°, apoio lombar e couro sintético.', 'estoque' => 8],
        ];

        foreach ($produtos as $produto) {
            Produto::create($produto);
        }
    }
}
