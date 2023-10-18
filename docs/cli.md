# Command Line Interface

BlazePHP default CLI is called `blaze` to use the cli just execute

```shell
php blaze
```

##### serve

To start a local development server just execute

```shell
php blaze serve
```

##### migrate

this command is used to migrate the database

```shell
php blaze migrate
```

OR

```shell
php blaze migrate:up
```

to Delete / Down Migration just execute

```shell
php blaze migrate:down
```

to freshly Delete a Migration and Apply it just execute

```shell
php blaze migrate:fresh
```