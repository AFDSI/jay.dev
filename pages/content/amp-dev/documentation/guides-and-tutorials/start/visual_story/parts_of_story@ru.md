---
'$title': Понимание составных частей AMP-истории
$order: 2
description: Веб-история — это полноэкранное визуальное повествование, которое передает информацию с помощью изображений, видео, графики, звука и т. п. Она идеально подходит для пользователей...
author: bpaduch
---

Веб-история — это полноэкранное визуальное повествование, которое передает информацию с помощью изображений, видео, графики, звука и т. п. Она идеально подходит для пользователей, которым нужен компактный, визуально насыщенный контент.

Основные составляющие веб-истории — это отдельные **страницы**. Эти страницы, в свою очередь, состоят из отдельных **слоев**, содержащих базовые **элементы** HTML и AMP.

{{ image('/static/img/docs/tutorials/amp_story/story_parts.png', 1047, 452, align='center ninety') }}

Каждый из этих ингредиентов реализован в виде компонента AMP: история представлена компонентом [`amp-story`](../../../../documentation/components/reference/amp-story.md) , страница — `amp-story-page`, а слои — `amp-story-grid-layer`.

{{ image('/static/img/docs/amp-story-tag-hierarchy.png', 557, 355, align='center seventyfive' ) }}

Давайте приступим к созданию нашей веб-истории с помощью контейнера [`amp-story`](../../../../documentation/components/reference/amp-story.md).