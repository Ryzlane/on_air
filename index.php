<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$settings = [
    'displayErrorDetails' => true,
];

$app = new \Slim\App(['settings' => $settings]);

$container = $app->getContainer();

$container['view'] = function() {
    $view = new \Slim\Views\Twig('./views');

    return $view;
};

// $container['test'] = function() use ($container)
// {
//     echo '<br>Service test créé';
//     return '<br>'.$container['settings']['lorem'];
// };

$app->get('/', function(Request $request, Response $response)
{
    // C'est ici qu'on fait tout le bordel : API, BDD, tests, forms...
    $dataViews = [
        'value' => 'Toto',
        'lorem' => [
            'foo' => 'bar',
        ],
    ];
    return $this->view->render($response, 'pages/home.twig', $dataViews); // on part de la racine des vues grâce à ligne 16 donc pas views
})->setName('home');

$app->get('/hello', function(Request $request, Response $response)
{
    $response->getBody()->write('Coucou');
    return $response;
})->setName('hello');

$app->get('/contact', function(Request $request, Response $response)
{
    $response->getBody()->write('<h1>Contact</h1>');
    return $response;
})->setName('contact');

// a-z entre a et z, le - ensuite les tirets, et le + pour tester plus qu'une fois
$app->get('/category/{categoryName:[a-z-+]}', function(Request $request, Response $response, $arguments)
{
    $response->getBody()->write('Category ' . $arguments['categoryName']);
    return $response;
})->setName('category');

// \d contraint aux int et le + à tester au moins un, sinon page not found
$app->get('/page/{pageNumber:\d+}', function(Request $request, Response $response, $arguments)
{
    $response->getBody()->write($arguments['pageNumber']);
    return $response;   
})->setName('page');

$app->run();