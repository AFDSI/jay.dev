---
$title: Menyertakan Gambar
---

Sebagian besar tag HTML bisa digunakan secara langsung dalam AMP HTML, namun tag tertentu seperti tag `<img>`, diganti dengan yang setara atau tag AMP HTML khusus yang telah sedikit disempurnakan (dan beberapa tag bermasalah langsung dicekal, lihat [Tag HTML dalam spesifikasi]({{g.doc('/content/docs/fundamentals/spec.md', locale=doc.locale).url.path}})).

Untuk mendemonstrasikan seperti apa tampilan markup tambahan ini, berikut kode yang diperlukan untuk menyematkan sebuah gambar ke dalam halaman:

[sourcecode:html]
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
[/sourcecode]

Baca lebih lanjut: Untuk mengetahui alasan kami mengganti tag seperti `<img>` dengan `<amp-img>`, dan jumlah ketersediaannya, kunjungi [Menyertakan Gambar & Video]({{g.doc('/content/docs/media/amp_replacements.md', locale=doc.locale).url.path}}).

<div class="prev-next-buttons">
  <a class="button prev-button" href="{{g.doc('/content/docs/getting_started/create/basic_markup.md', locale=doc.locale).url.path}}"><span class="arrow-prev">Sebelumnya</span></a>
  <a class="button next-button" href="{{g.doc('/content/docs/getting_started/create/presentation_layout.md', locale=doc.locale).url.path}}"><span class="arrow-next">Berikutnya</span></a>
</div>

