const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue() // Agrega esta línea para habilitar Vue.js
   .sass('resources/sass/app.scss', 'public/css');
