<?php

$routes = [
    '/pecuaria' => '/pages/pecuaria.html',
    '/agricultura' => '/pages/agricultura.html',
    '/contato' => '/pages/landing.html',
    '/pecuaria-leiteira' => '/pages/pecuaria-leiteira.html',
    '/personalizado' => '/pages/personalizado.html',
    '/quem-somos' => '/pages/quem-somos.html',
    '/termos-politica-privacidade' => '/pages/termos-politica-privacidade.html',
    
    
];

$path = $_SERVER['REQUEST_URI'];

if (array_key_exists($path, $routes)) {
    $file = __DIR__ . $routes[$path];
    if (file_exists($file)) {
        include $file;
        exit();
    }
}

// se a rota não existir, mostre um erro 404
http_response_code(404);
echo 'Página não encontrada.';
