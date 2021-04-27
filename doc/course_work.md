## Зміст
1. [Вступ](#вступ)
2. [Технічне завдання](#завдання)
3. [Основні положення](#теорія)
4. [Проектування](#проектування)
5. [Розробка](#розробка)
6. [Тестування](#тести)
7. [Висновки](#висновки)
8. [Джерела](#джерела)

<a name="вступ"></a>
## Вступ

**PlantUML** - це інструмент з відкритим кодом, що дозволяє користувачам створювати діаграми з простої текстової мови. Окрім різних діаграм UML, PlantUML підтримує різні інші формати, пов'язані з розробкою програмного забезпечення (такі як Archimate, Block diagram, BPMN, C4, Computer network diagram, ERD, Gantt chart, Mind map, та WBD), а також візуалізація JSON та Файли YAML.

**Highlight.js** - це хайлайтер синтаксису, написаний на JavaScript. Він працює як у браузері, так і на сервері. Він може працювати практично з будь-якою розміткою, не залежить від будь-яких інших фреймворків і має автоматичне визначення мови.

**Мета**
Метою документа є демонстрація процесу створення власного хайлайтера для обраної мови на базі бібліотеки highlight.js.

**Переваги підсвічування синтаксису**

Виділення синтаксису або розфарбовування коду пропонує наступні переваги:

**1. Візуальна привабливість**
- Читати код і розпізнавати його структуру стає простіше. Підсвічування кольором для машини не важливе, але є надзвичайно корисним для розробників. Як результат, наприклад, перегляд коду простіший (вибірково).
- У багатьох редакторах та середовищах розробки схему підсвічування можна адаптувати індивідуально, так що задоволення від розробки також збільшується.

**2. Економія часу та підвищення продуктивності**
- Впровадження коду стає простішим, оскільки виділення здійснюється в режимі реального часу і помилки друку можна виявити швидше. Наприклад, більшість редакторів виділяють рядкові літерали іншим кольором. Отже, помітити пропущений роздільник набагато простіше через контрастний колір тексту. Неправильні ключові слова також можна визначити швидше, оскільки вони не забарвлюються. Це призводить до вищої продуктивності під час розробки, тим більше, що сучасні редактори більше не страждають від втрат продуктивності через забарвлення / перетворення.
- Читач може легко ігнорувати великі розділи коментарів або коду, залежно від того, що вони шукають.
- Дослідження, опубліковане на конференції PPIG, оцінило вплив виділення синтаксису на розуміння коротких програм, виявивши, що наявність підсвічування синтаксису значно скорочує час, необхідний програмісту для узагальнення семантики програми. Окрім того, дані, зібрані під час дослідження, що відстежували очі, свідчать про те, що підсвічування синтаксису дозволяє програмістам приділяти менше уваги стандартним синтаксичним компонентам, таким як ключові слова.

**Реалізація**
Для реалізації проекту використовувались наступні технології та фреймворки:  PlantUML, Node.js(npm), highlighter.js, HTML, Mocha test. 

<a name="завдання"></a>
## Технічне завдання

**Загальне завдання**
Розробити модуль підсвічування синтаксису мови plantuml для бібліотеки highlight.js.

**Функціональність**
- Користувач повинен мати можливість використовувати створений хайлайтер на власній машині.

<a name="теорія"></a>
## Основні положення
### Поняття підвічування синтаксису, приклади хайлайтерів та їх використання

**Підсвічування синтаксису** - це особливість текстових редакторів, які використовуються для програмування, сценаріїв або мов розмітки, таких як HTML. Функція відображає текст, особливо вихідний код, різними кольорами та шрифтами відповідно до категорії термінів.

Вони ~~зовсім непотрібні~~ корисні для тих, хто любить програмувати. Поки ви пишете код, вам може знадобитися такий собі плагін, щоб виділити будь-який приклад коду на вашому веб-сайті або ж блозі. Наступна колекція плагінів для виділення синтаксису містить лише ті, які пропонують найкращі функції, просту ініціалізацію та стилі. Жоден з них не вимагає роботи jQuery, оскільки вони незалежні і використовують лише VanillaJS.

## SHJS

SHJS - це скрипт JavaScript, який виділяє фрагменти вихідного коду в документах HTML. Документи, що використовують SHJS, виділяються на стороні клієнта веб-браузером.
SHJS використовує визначення мов з GNU Source-highlight. Це дає SHJS можливість виділити вихідний код, написаний багатьма різними мовами. SHJS повинен працювати в будь-якому браузері, який відповідає стандартам HTML 4, ECMA-262 та DOM Level 2.

Щоб використовувати SHJS, потрібно принаймні 3 файли:

  * Основний скрипт або зменшена версія
  * Файл визначення мови
  * Таблиця стилів

Цей плагін є доволі олдскульним, тому вам потрібно завантажити .js-файл із визначенням мови, яку ви хочете виділити. Однак ви можете охопити їх усі в одному файлі.

![alt text](shjsimage.png)

## SyntaxHighlighter

SyntaxHighlighter - це повністю функціональний автономний, підсвічувач синтаксису коду на стороні клієнта з відкритим кодом, розроблений у JavaScript.

Щоб SyntaxHighlighter працював на вашій сторінці, вам потрібно зробити наступне:

  * Дотримуючись інструкцій з побудови, щоб зібрати власний syntaxhighlighter.js, опустіть його на сторінку за допомогою 
  ```html 
  <script src="syntaxhighlighter.js" />
  ``` 
  тегу, або дотримуйтесь інструкцій щодо використання CommonJS.

Для ініціалізації коду javascript можна використовувати:

```html
<script type="text/javascript" src="syntaxhighlighter.js"></script>

<pre class="brush: js">
function foo()
{
}
</pre>
```

На жаль, SyntaxHighlighter не підтримує жодного стандарту, тому ваша розмітка буде виділена цим плагіном і не настільки підтримувана.

## Rainbow

Rainbow - це бібліотека для виділення синтаксису коду, написана на Javascript. Вона була розроблена для того, щоб бути компактною (1,4 кб), простою у користуванні та розширюваною. Вона повністю стилізується за допомогою CSS. Rainbow сама по собі дуже проста. Вона проходить через блоки коду, обробляє шаблони регулярних виразів і охоплює відповідні шаблони в теги <span>. Уся стилізація залишаються за CSS.

У вашій розмітці атрибут мови даних використовується, щоб вказати, яку мову використовувати для виділення:

```html
<pre><code data-language="javascript">var testing = true;</code></pre>
```

![alt text](rainbowimage.png)

Використовуйте метод Rainbow.color, щоб виділити код:

```javascript
Rainbow.color();
```

## Highlight.js

Нарешті, highlight.js - це супер DOM хайлайтер. Він намагається виявити мову автоматично. Якщо автоматичне виявлення не працює для вас, ви можете вказати мову в атрибуті класу:

  * [152 languages and 72 styles](https://highlightjs.org/static/demo/)
  * automatic language detection
  * multi-language code highlighting
  * available for node.js
  * works with any markup
  * compatible with any js framework

Щоб використовувати highlight.js у своєму проекті, просто включіть файли CSS та JS та ініціалізуйте за допомогою:

```javascript
initHighlightingOnLoad()
```
Метод:

```html
<!-- Include library -->
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>
<!-- Initialize highlight -->
<script>hljs.initHighlightingOnLoad();</script>
```

Необхідна розмітка повинна виглядати так:

```html
<pre><code class="html">Sample 2021 code for the bois</code></pre>
```

![alt text](highlightjsimage.png)

<!-- ### Дослідження існуючих програмних продуктів

|   | Zoho Sprint | Wrike | Confluence | Meister Task | TeamworkProjects | Easy Projects | Paymo | Quire | Talk on Task | Zenkit | Trello | Smartsheet | Mavenlink | Avaza | Monday.com | JIRA | ProWorkflow | Asana |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| API | + | + | + |   | + |   |   |   |   |   | + | + | + |   | + | + |   |   |
| Безпека даних | + | + | + | + | + | + |   | + |   |   | + |   |   | + |   |   | + |   |
| Теги |   |   |   | + | + |   |   |   |   |   |   |   |   | + | + |   |   |   |
| Бесіди / чати |   |   |   |   |   |   | + | + | + |   |   |   |   |   |   |   |   | + |
| Мобільний додаток |   | + |   |   |   |   | + |   |   |   |   |   |   |   |   |   | + |   |
| Контроль версій |   | + |   |   | + |   |   |   |   |   |   |   |   |   |   | + |   |   |
| Шаблони проектів |   | + |   |   | + | + | + |   |   |   |   |   | + | + |   |   | + | + |
| Наявність метрик | + | + | + | + | + |   |   |   | + | + | + | + | + | + | + | + | + | + |
| Управлння завданнями | + | + |   |   | + |   | + |   | + | + |   | + | + | + |   |   | + | + |
| Спільне робоче поле |   | + | + | + |   |   |   | + |   |   |   |   | + |   |   |   | + |   |
| Управління артефактами | + | + |   | + |   | + | + |   |   |   | + | + | + | + |   | + | + | + |
| Підтримка кількох проектів |   |   |   |   |   |   |   |   |   |   |   | + | + |   |   |   |   |   |
| Підтримка різних методологій |   |   |   |   |   |   |   |   |   |   |   |   |   | + |   |   | + |   |
 -->
<a name="проектування"></a>
## Проектування
<!-- **Діаграма юзкейсів**

![](http://www.plantuml.com/plantuml/png/TP713e8m38RlUueTvR3u0iP0q9i7OzJxP0Mdk2LTYHSVtfc1LWAtjb_tzK-M1z98tQCLGbVaKPu2O5yUeB610C6mOUaTeRrqiUudHKVNs8ZFabozb1e_PErtXMjOdU2VKQcrN9mjFALrjS_OSF1cemk9xdnZtJGg4JI1tAE_GKKP3p2OjP45agtr9DyQIuodl0aLnYmtq4Bq7tMupqBcdDsPlf3WBxt8mPduWsy0) -->

**Сценарій підсвітки тексту типу string**

| Ідентифікатор: | STRING |
| --- | --- |
| Назва: | Підсвітка тексту типу string |
| Учасники: | Користувач; Система |
| Передумови: | Користувач використав елементи виділенні лапками ' ' |
| Результат: | Користувач отримує певну підсвітку синтаксису |
| Виключні ситуації: | Текст є частиною іншого класу, наприклад - заголовку |
| Основний сценарій: | 1. Користувач використовує текст виділений лапками.<br>2. Система ідентифікує даний текст окремим класом.<br>3. Система підсвічує даний текст певним кольором.<br>4. Користувач отримує певну підсвітку синтаксису.|

**Сценарій підсвітки коментарів**

| Ідентифікатор: | COMMENT |
| --- | --- |
| Назва: | Підсвітка коментарів. |
| Участники: | Користувач; Система |
| Передумови: | Користувач вирішив зареєструватись в системі |
| Результат: | Створення нового облікового запису користувача |
| Основний сценарій: |  1. Користувач натискає кнопку[Реєстрація].<br>2. Система пропонує форму &quot;Реєстрація нового користувача&quot;.<br>3. Користувач заповнює поля:логін,email, пароль, ім'я, прізвище.<br>4. Користувач підтверджує правильність введених даних.<br>5. Система перевіряє введені дані.<br>6. До бази даних додається новий запис користувача. |
| Виключні ситуації: | Переривання реєстрації, введення неправильних та повторних даних |

<!-- ### Діаграми послідовностей

**Діаграма V-INFO**

![](https://www.plantuml.com/plantuml/img/RP2_JiD03CRtFCMdxhn01rI9CZ0n1DYTYwCS9ETY-wZozZX0GHNPJZx_lZy-c9DwdQU6aelYsLX1XchQ92ckCg5Tp7bUfxPO4p-ukLsVsEE9JjYzP3uZbq5q9izIG9rKnqdbbPFR3brrbzAiI92hm1xjA5iGVL2Ug9lu5zymR9aqZTkwZyCG3Unh0yuwN_Ft9MReoUd7i71YCzBbOdYH-zw_6pcz6I8c8cSQsI8qZi5tP7nj_V2lZV9xpShzNva3bpwk_Ga0)
=======
**Діаграма RG-1**

![](https://i.imgur.com/GIetig9.jpg)
 
**Діаграма LG**

![](https://www.plantuml.com/plantuml/img/NP0n3i8m34NtdC8SW0im82Ga9YGGY0C4noqMRbB5pj3RavGkxMRv_V_rxPEQprO6SHujPNXGpsgKARoKCdY5ejbXYfQJm7EgR6XRdTHL0ljZ6-40zqog8Add2EzYbg9heF8cQpmDeos2Zad29k328cky-F_u_27yrgnQYkDOR9r-dNqpBJ6qug0Z8NUCu15JYHl3RQJiZLC4hBs4Z09eGQn7T4LashaJnL3_udy0)
 
**Діаграма PRJ-V**

![](https://i.imgur.com/Rkk1Kxc.jpg)

**Діаграма N-PRJ**

![](https://www.plantuml.com/plantuml/img/NL7DJiCm3BxtAQpTUO4TqAHnHeY1TdPJPmsaSMKxGtrxd29GooLAxC_VZtDIGx4wvGw3iS0htP8Q2GtlIWAeK5MwmCM4CrmMxqsjgejste67ntOzmXlES3WBeH4K-e9P-8E27Q2lPbmw1pMiZnpXGcM0o3Ar0wYuN2etc55m8dyeSDoIx8IkabmY5R2H82RAmtOGdTcQbISkz5zydJ-F53vrLGuiulJEahCRsCD-eZG-nVigEA0XzAZqvsiRwaNudWPo2zL69_UzMjKTv9ajnGMmvsgWDGJIM3E49fMujDGjr2_xoTVa7uFV)


**Діаграма ADD-ARTF**

![](https://www.plantuml.com/plantuml/img/RP2nJWGn34JxVCLeUtw00Xr2eaQwbiQNE5nG4gzYvz3-FSckG9n4DvePFpivgL6pNh8ZRzBm8jLQklIfIT6rEJyjoJXlQbocgvkwaU3XQSf7l3LMPSNo7086BiK1qmK3OrBTwCpgc9XLkQNmJpTAAtVGrvIp8bNObL6fCAW6sBOo9Excx_IUz3Kd2egOCklFpfqqDkcCXGA78uS9tW_qskIJlI6GqOMKxyuzN-Nhk9N_N0ljteydnvxpjg0CIH_iJbp3-4dw1W00)

**Діаграма ED-ARTF**

![](https://www.plantuml.com/plantuml/img/RP312W8n34Jl_OgmTt_0WmZYNTohbzXctKgtaIPLzkzDHT0LRqFoPYPaAuf5wvGSUkK2EyvQuhasZG9LYlDjn0dwMPIcDfLPd6rWjMbo3OT28YJGxKDKiBmuM9fqO3dAsHdKMBCqbkyn_8C7BjCYzWNuaONoXmFC0MxVXRyrB--HRWaz1HXYCZ3cKmOToPny9QyGKF6CGelR-f4Vxr1pVYgbUc-5Gqrfxc0oYHToMyh17eTF)


**Діаграма ADD-CON**

![](https://i.imgur.com/1YGuWXD.jpg)

**Діаграма RM-CON**

![](https://i.imgur.com/n4THAym.jpg)



**Діаграма ADD-TSK**

![](https://www.plantuml.com/plantuml/img/FSz12eCm40NGVKunTEy5N8XIUW9xWJ69RMYSAPaVfBUlMkbgu7_UX-aDN52NxDX32mqLp-sm4JklWgAPneyXBdjcZflEMhhpcov320IsruMc2gWuQpfkwLeY8nuDhKc2hYUw2UAsd3EbvQq5BA30uDtPtqbS3tkkZL42YIBDoJEI2l6a5MJL-sWsrqmSGf87wVnpplMRsJxw0W00)

**Діаграма DEL-PRJ**

![](https://i.imgur.com/1smaTFG.jpg) -->


<a name="розробка"></a>
## Розробка

<!-- ![](http://www.plantuml.com/plantuml/png/ZP1D2i8m48NtEKN8KbgmMrSLwa8GALeF4DeeqVoKP8hqzfB1gG5Tk4dUbvTvmqmTGGQOh67AWOQPjy7VLG_iVVCDtpSP7ALL6JOgza6FeBrZbD39-63fm5fIgP1qNhKyoS5efvQKIrI1fGDJIAKKqkSfk0ntfPNQ41tyJJk2LiRuz64WFddpQRGDeA-o1qO26nBHp3btyqZylGJQZQYAIl2ov69Th0GkPV7m2Rqg2HmrVVZ7G47DSI3y_CkibHicQru0)



![](http://www.plantuml.com/plantuml/png/XP91IyGm48Nl-HMX9vKjsBk75TQ38BBe-WE6PfHeCYt91Db_hsDi4xjblRtvNfZtscGR6G8dxnGIMpxgVHZUiMUL8lOGKL_SxourH3rQKzWZUCoK2jnXx8CTsGwKFQD-b-cRjfK5VsUgHpazLJX0_3Z9vzLyFfFFfl80ZRE4sN1A8YHMrbO3LRhcRkxs4Z6ST4khtH8L-9m2pJmMVjTwi2vZN_33y6OfKrVe7cBy78B9nbYCfy5XXa59GIajfQg1AXqhxIljAZrMEgZvysy3srTOUHwm-WlWpFM0ATxXE6A6hAO8oPQr2q2BUUcpKlExQhfDr-XlsbnlhfhyhYOl8_4w4J_tAWV-Dx8elq9EoE5LSujaadTV)
 -->
<a name="тести"></a>
## Тестування

<a name="висновки"></a>
## Висновки

<a name="джерела"></a>
## Джерела

1. https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
2. https://highlightjs.readthedocs.io/en/latest/language-guide.html
3. https://en.wikipedia.org/wiki/Syntax_highlighting
4. https://github.com/highlightjs/highlight.js
5. https://github.com/highlightjs/highlightjs-cypher
6. https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md
7. https://mochajs.org/
8. https://highlightjs.org/
