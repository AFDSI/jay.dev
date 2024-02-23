---
$title: イメージを含める
---

ほとんどの HTML タグは、そのまま AMP HTML でも使用できますが、中には `<img>` タグのように同等か少し高機能のカスタム AMP HTML タグに置き換えなくてはいけないものがあります（一部のタグは問題があるため、使用が一切禁止されています。詳細については、[仕様書の HTML タグ]({{g.doc('/content/docs/fundamentals/spec.md', locale=doc.locale).url.path}})の内容をご覧ください）。

以下のコードは追加のマークアップを使った例で、ページ内にイメージを埋め込んでいます。

[sourcecode:html]
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
[/sourcecode]

参照: `<img>` タグの代わりに `<amp-img>` タグを使っている理由や、使用できるタグの種類については、[画像や動画を含める]({{g.doc('/content/docs/media/amp_replacements.md', locale=doc.locale).url.path}})をご覧ください。

<div class="prev-next-buttons">
  <a class="button prev-button" href="{{g.doc('/content/docs/getting_started/create/basic_markup.md', locale=doc.locale).url.path}}"><span class="arrow-prev">前へ</span></a>
  <a class="button next-button" href="{{g.doc('/content/docs/getting_started/create/presentation_layout.md', locale=doc.locale).url.path}}"><span class="arrow-next">次へ</span></a>
</div>
