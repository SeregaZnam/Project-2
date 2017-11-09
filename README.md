# Project-2

В данном проекте применяются следующие технологии:
* HTML
* CSS
* JavaScript
* jQuery
* LESS
* GULP
* Библиотека rangeslider.js

Реализована адаптивная верстка от 600 - 1170px.
Данный проект был направлен на работу с адаптивной версткой. Ссылки в меню не кликабельны и никуда не ведут.
Скрипт fullHeight.js для плавного скроллинга картинки был позаимствован.
Применена БЭМ-методология.

Для работы с проектом необходимо:
1. предварительно установить node.js для работы пакетного менеджера npm
2. скачать проект с помощью команды <p>git clone https://github.com/SeregaZnam/Project-2.git<p>
либо скачать архив с git репозитория и разархивировать у себя в директории
3. в консоли ввести команду npm install для скачивания всех необходимых библиотек

**Для обычного просмотра сайта достаточно выполнить шаг 2 и в папке build открыть index.html в браузере.**

### Карта проекта
```
.
├── build
│   ├── css
│   |   └── general.css
|   ├── fonts
|   |   ├── DINPro-Bold.ttf
|   |   ├── DINPro-Medium.ttf
|   |   └── DINPro-Regular.ttf
|   ├── img
|   |   └── ...
|   ├── includes
|   |   └── productSection.html
|   ├── js
|   |   ├── fullHeight.js
|   |   └── ion.rangeSlider.min.js
|   └── index.html
├── dev
|   ├── fonts
|   |   ├── DINPro-Bold.ttf
|   |   ├── DINPro-Medium.ttf
|   |   └── DINPro-Regular.ttf
|   ├── html
|   |   ├── includes
|   |   |   ├── -contactsSection.html
|   |   |   ├── -filter.html
|   |   |   ├── -firstSection.html
|   |   |   ├── -footer.html
|   |   |   ├── -header.html
|   |   |   ├── -infoSection.html
|   |   |   ├── -productSection.html
|   |   |   └── -serviceSection.html
|   |   └── index.html
|   ├── img
|   |   └── ...
|   ├── js
|   |   ├── fullHeight.js
|   |   └── ion.rangeSlider.min.js
|   └── less
|       ├── imports
|       |   ├── sections
|       |   |   ├── contactsSection.less
|       |   |   ├── filter.less
|       |   |   ├── footer.less
|       |   |   ├── header.less
|       |   |   ├── infoSection.less
|       |   |   ├── productSection.less
|       |   |   └── serviceSection.less
|       |   ├── _mixins.less
|       |   ├── _settings.less
|       |   ├── fonts.less
|       |   ├── grid.less
|       |   ├── ion.rangeSlider.less
|       |   ├── ion.rangeSlider.skinHTML5.less
|       |   └── reset.less
|       └── general.less
├── .gitignore
├── gulpfile.js
└── package.json
