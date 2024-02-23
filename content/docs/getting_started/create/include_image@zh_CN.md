---
$title: 包括图像
---

大多数 HTML 标记都可在 AMP HTML 中直接使用，但某些标记（例如 `<img>` 标记）被替换为等效标记或略微增强的自定义 AMP HTML 标记（少数存在问题的标记会被完全禁止使用，请参阅[规范中的 HTML 标记]({{g.doc('/content/docs/fundamentals/spec.md', locale=doc.locale).url.path}})）。

以下是在页面中嵌入图像所需的代码，用于演示其他标记是什么样的：

[sourcecode:html]
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
[/sourcecode]

阅读: 如需了解我们为何要将诸如 `<img>` 等标记替换为 `<amp-img>` 以及有多少标记可用，请查看[添加图片和视频]({{g.doc('/content/docs/media/amp_replacements.md', locale=doc.locale).url.path}})。

<div class="prev-next-buttons">
  <a class="button prev-button" href="{{g.doc('/content/docs/getting_started/create/basic_markup.md', locale=doc.locale).url.path}}"><span class="arrow-prev">以前</span></a>
  <a class="button next-button" href="{{g.doc('/content/docs/getting_started/create/presentation_layout.md', locale=doc.locale).url.path}}"><span class="arrow-next">下一个</span></a>
</div>
