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
copy("./CHANGELOG.md", "./blinds/CHANGELOG.md");
copy("./AUTHORS", "./blinds/AUTHORS");

copy("dist/blinds.min.js", "./blinds/dist/blinds.min.js");
$cdn = file_get_contents("./blinds/dist/blinds.min.js");
$cdn = str_replace("export ", "", $cdn);
file_put_contents("./blinds/dist/blinds.min.js", $cdn);

unlink("dist/blinds.js");
