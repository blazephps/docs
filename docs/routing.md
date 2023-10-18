# Routing

[[toc]]

Now you're are Here! this is the Routing so to getting started editing a routes by opening files `app/Route.php`, this is the default `Route.php` file

::: code-group

```php [app/Route.php]
<?php

/**
 * |-------------------------|
 * | BlazePHP Router         |
 * |-------------------------|
 * | Copyright (C) 2023-2024 |
 * |                         |
 * |                         |
 * |-------------------------|
 */

use BlazePHP\Blaze\HTTP\Router;
use BlazePHP\Blaze\HTTP\Request;

$router = new Router();

$router->get("/", function () {
    view("index");
});

$router->run();
```

:::

:::tip
The `$router->run` function is needed if the function is removed the routers will be not work!
:::

### Creating new routes

To create new routes i will show you the examples of GET method

::: code-group

```php [Examples]
$router->get("/", function () {
    return "Hello, World!";
});
```

```php [Render a view Files]
$router->get("/", function () {
    view("index");
});
```

:::

### Using Request

To use request you dont need anything just add in the callback params `$request` here the example

::: code-group

```php [Example]
$router->get("/", function (Request $request) {
    dd($request->get());
});
```

:::

### Using Route Parameters

To use parameters in route you need add `{example}` in `$router->get` function as 1st parameters

::: tip
The Request Parameters was called first not the parameters variables
:::

::: code-group

```php [Example]
$router->get("/users/{name}", function (Request $request, $example) {
    return "Hello, $name";
});
```

:::

### Custom Methods

::: code-group

```php [GET]
$router->get("/", function () {
    return "Hello, World!";
});
```

```php [POST]
$router->post("/", function () {
    return "Hello, World!";
});
```

```php [DELETE]
$router->delete("/", function () {
    return "Hello, World!";
});
```

```php [HEAD]
$router->head("/", function () {
    return "Hello, World!";
});
```

:::

### Implementing Controller

To implement Controller just replace `function() {}` with array here's the example:

::: code-group

```php [Example]
// ...

$router->get("/", [ExampleController::class, "index"]);
```

```php [ExmpleController.php]
// ...

class ExampleController
{
    public function index(Request $request)
    {
        view("index");
    }
}
```

:::