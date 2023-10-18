# View

[[toc]]

### Custom functions

<hr>

##### $this->hmtl()

this functions is simplify of `htmlspecialchars` examples: ```$this->html("<h1>Hello, World!</h1>");```

##### $this->include()

this functions is render a new file or partials but using [Layouting System](#layouting-system) is better!

<hr>

### Layouting System

Create a new file inside `app/View/` directory, lets call it with `main.php`, and create another new file, let's call the 2nd file `layout.php`

::: code-group

```php [layout.php]
<html>
    <head>
        <title>My Websites</title>
    </head>
    <body>
        <?php $this->yield("mySection") ?>
    </body>
<html>
```

```php [main.php]
<?= $this->extends("layout"); ?>

<?= $this->section("mySection"); ?>
    <h1>Hello, World!</h1>
<?= $this->endSection(); ?>
```

:::