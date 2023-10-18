# Model

[[toc]]

### Creating a Model

Create a new file inside `app/Model` directory, let's call it `Post.php`, inside `Post.php` write

```php
// ...

class Post
{
    use Model;

    public function __construct()
    {
        // Replace the 1st argument with table name
        $this->setup("post");
    }
}
```

### Implementing a Model

<hr>

##### findAll

```php
// ...
$route->get("/", function() {
    $post = new Post();
    dd($post->findAll());
});
```

##### findById

```php
// ...
$route->get("/", function() {
    $post = new Post();
    dd($post->findById("1"));
});
```

##### first

```php
// ...
$route->get("/", function() {
    $post = new Post();
    dd($post->first());
});
```

#### insert

```php
// ...
$route->get("/", function() {
    $post = new Post();
    $post->insert([
        // ...
    ]);
});
```