---
$title: Вставка изображения
---

Большинство тегов HTML может быть использовано непосредственно в AMP HTML, однако некоторые теги, такие как `<img>`, заменяются своим эквивалентом или слегка расширенными персонализированными тегами AMP HTML (также запрещено использование нескольких проблемных тегов, см. [описание тегов HTML в спецификации AMP]({{g.doc('/content/docs/fundamentals/spec.md', locale=doc.locale).url.path}})).

Для демонстрации того, как может выглядеть дополнительная разметка, ниже приведен пример кода для встраивания изображения в страницу:

[sourcecode:html]
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
[/sourcecode]

Чтобы узнать о причинах замены тегов `<img>` на `<amp-img>`, а также о других доступных возможностях, ознакомьтесь с разделом [Вставка встроенных фреймов и мультимедийного содержимого]({{g.doc('/content/docs/media/amp_replacements.md', locale=doc.locale).url.path}}).

<div class="prev-next-buttons">
  <a class="button prev-button" href="{{g.doc('/content/docs/getting_started/create/basic_markup.md', locale=doc.locale).url.path}}"><span class="arrow-prev">Предыдущий</span></a>
  <a class="button next-button" href="{{g.doc('/content/docs/getting_started/create/presentation_layout.md', locale=doc.locale).url.path}}"><span class="arrow-next">Следующий</span></a>
</div>

