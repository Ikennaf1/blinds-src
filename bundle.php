<?php

$bundles = "";
$dest = "./dist/blinds.js";
$scripts = [
    './src/settings.js',
    './src/icons.js',
    './src/constructDarkModeStyle.js',
    './src/activateDarkMode.js',
    './src/blindsToggle.js',
    './src/localStorage.js',
    './src/cookie.js',
    './src/storage.js',
    './src/deactivateDarkMode.js',
    './src/isDarkMode.js',
    './src/blindsInit.js'
];

foreach ($scripts as $script) {
    $bundle = file_get_contents($script);
    $bundles .= $bundle;
}

file_put_contents($dest, $bundles);

exec("uglifyjs dist/blinds.js -o dist/blinds.min.js");

copy("dist/blinds.min.js", "./blinds/blinds.min.js");
copy("dist/index.html", "./blinds/index.html");
copy("dist/script.js", "./blinds/script.js");

// unlink("dist/blinds.js");
