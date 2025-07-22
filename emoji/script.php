<?php
 
$file = 'urls.txt';
 
if (!file_exists($file)) {
 
    die("Файл не найден.\n");
 
}
 
$links = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
 
if (empty($links)) {
 
    die("Файл пустой.\n");
 
}
 
function extractName($url) {
 
    return pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_FILENAME);
 
}
 
$output = [
    'title' => 'clippy',
    'emojis' => []
 
];
 
foreach ($links as $link) {
    $output['emojis'][] = [
        'name' => extractName($link),
        'src'  => $link
 
    ];
 
}
echo "title: " . $output['title'] . "\n";
echo "emojis:\n";
 
foreach ($output['emojis'] as $emoji) {
    echo "  - name: " . $emoji['name'] . "\n";
    echo "    src: " . $emoji['src'] . "\n";
}
 
?>
