---
title: "Deploy Laravel app on a subdomain on Hostinger"
date: "2022-12-21"
tags: ["laravel", "react"]
---

Here is a tutorial to deploy a Laravel app on a subdomain on Hostinger. I used a Laravel app that I created with [**Laravel Breeze**](https://laravel.com/docs/9.x/starter-kits#breeze-and-inertia) and [**Inertia.js**](https://inertiajs.com/). I will use [**React**](https://reactjs.org/) as frontend framework.

First of all, you need to create a subdomain on your Hostinger account. You can do it on the **Domains** section. I created a subdomain called `test` and I will use it to deploy my Laravel app.

![Subdomain](/images/subdomain.png)

Then, you need to create a database on your Hostinger account. You can do it on the **Databases** section.

Now, you need to go to the **File Manager** section and create a folder called `test` on the `public_html` folder. Inside this folder go the `public` files of your Laravel app.

![File manager](/images/file-manager.png)

After that, you need to create a folder called `test` on the root of file manager. Where public_html is. Inside this folder go all the rest of the files of your Laravel app. On the `public` folder only go the folder `build`.

![File manager](/images/file-manager-2.png)
![File manager](/images/file-manager-3.png)
![File manager](/images/file-manager-4.png)

Last step is to update `.env` file with the database credentials and the subdomain.

### Resuming

- `public_html/test` folder: contains the files of `public` folder of your Laravel app.
- `test` folder: contains all the rest of the files of your Laravel app. On the `public` folder only go the folder `build`.
- `.env` file: update the database credentials and the subdomain.

That's it. Now you can access your Laravel app on the subdomain that you created.
