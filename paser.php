<?Php 
$html = file_get_html('https://goodnews.com.my/uplifts-1milliondevices-out-to-ensure-no-child-gets-left-behind/');

// Find all article blocks
foreach($html->find('div.article') as $article) {
$item['title'] = $article->find('div.title', 0)->plaintext;
$item['intro'] = $article->find('div.intro', 0)->plaintext;
$item['details'] = $article->find('div.details', 0)->plaintext;
$articles[] = $item;
}

print_r($articles); ?>