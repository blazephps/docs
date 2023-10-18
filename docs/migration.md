# Migration

[[toc]]

### What is Database Migration?

_Database migration_ is the process of migrating data from one or more source databases to one or more target databases by using a database migration service. 
from [Google Cloud](https://cloud.google.com/architecture/database-migration-concepts-principles-part-1)

### Applying a Migration to Database

Open terminal and execute

::: tip
You can use `php flux migrate:up` too, its the same as `php flux migrate`
:::

```shell
php flux migrate
```

When you executing `php flux migrate` it will connect to the database, if the database isnt exists on the localhost, it will create sending error message, its will create a new table `migrations` is the default table from migrations, and `users` from `app/Migration/m001_create_users_table.php/`

### Delete / Down a Migration

Delete a migration is used for delete a tables in database

```sh
php flux migrate:down
```