## Краткие вводные
Я настроил директории проекта и прокоментировал все файлы, которые уже создал.\ 
Все что нужно, клонировать репозиторий, поставить все либы, которые нужны для работы (см. index.js) и кодить)\
Для запуска локального сервера нужно в терминале ввести npm start, находясь в папке с проектом.\
Для сборки production билда npm run build в терминале, но это потом, когда уже все сделаем и в июне показывать будем)

## Инфа о проекте
Данный проект содержит весь фронтенд Web интерфейса 1С. Все строго структурировано по папкам, чтобы работа шла продуктивнее.

### Описание папок
**node_modules** - папка со всеми зависимостями. Её вообще не трогаем, она в гит игноре :)
#####
**public** - здесь иконка приложения, верстка и файлик для поисковых роботов вроде как.
Тут тоже ничего не трогаем. В реакте вообще верстка второстепенная штука.
#####
**src** - основная папка, в которой будем работать. Здесь все: Никита, Стас, Гена, Турбо и... Реакт :)
#####
**src/components** - папка с компонентами. Тут будут все компоненты Реакта, классовые, функциональные, HOC... На каждое семейство компонентов - отдельная папка, чтобы по смыслу было понятно.
#####
**src/styles** - папка со стилями css. Сильно дробить по файликам мелким не надо, но и в одном все писать тоже не стоит, лучше выделять файл на семейство компонентов, чтобы по смыслу было понятно.
#####
**src/pics** - ну тут проще всего, все картинки будем кидать сюда.
#####
**src/hooks** - здесь будут все хуки пользовательские.
#####
**src/contexts.js** - тут будут все контексты. Контекст позволяет пробросить пропсы сразу в несколько компонентов, не зависимо от их положении в иерархии. Контексты решают проблему Props drilling'а, при которой возникает загрязнение и усложнение кода из-за необходимости прохождения пропсами всей цепочки компонентов для достижения целевого компонента. Однонаправленная привязка - основная проблема Реакта).
#####
**src/globalConstants.js** - тут просто все глобальные константы приложения. API ключи, параметры, ключи для фронтенд логики и так далее.
#####
**src/index.js** - без этого файла не будет ничего работать, потому что именно здесь происходит привязка всей иерархии компонентов к корневому div'у, который в index.html с id='root'. \
Также в нем уместно подключать все глобальные стили, константы, вешать роутинг и хранилище Redux.
#####
**src/state-manager** - крупная папка, в которой все, что касается Redux. Создана опираясь на архитектуру, которую он предлагает.
#####
**src/state-manager/actions** - тут будут все экшены Redux. Экшен - сигнал редьюсеру, о котором речь идет ниже, что именно нужно в состоянии поменять.
#####
**src/state-manager/changeState.js** - это редьюсер Redux. В нем пишется вся логика по изменению состояния, посредством выбора нужного экшена.
#####
**src/state-manager/stateConstants.js** - тут все константы Redux. Они используются в редьюсере, чтобы определить, какой именно экшен нужно выполнить.
#####
**src/state-manager/initialState.js** - это состояние по дефолту в Redux. Оно ставится каждый раз при перезагрузке страницы и в дальнейшем именно оно и изменяется.
#####
**src/state-manager/store.js** - это хранилище Redux. Фактически, это обертка над состоянием приложения, с её помощью происходит привязка состояния к приложению.
#####
**.gitignore** - здесь пишем все, что нужно скрыть от гита.
#####
**packages-lock.json, package.json** - это файлы конфигурации приложения. Тут можно увидеть все подключенные либы и их версии, доступные скрипты для запуска локального сервера и так далее. Можно тут настроить прокси для бекенда
#####
**README.md** - ну, это собственно то, что ты только что прочитал :) Такой вот гайдик вышел
#####

## Что нужно сделать и знать перед работой
После клонирования репозитория нужно поставить все основные React зависимости:\
npm install react\
npm install react-scripts\
npm install react-dom\
npm install react-router-dom\
npm install react-redux\
npm install @reduxjs/toolkit\
npm install @testing-library/jest-dom\
npm install @testing-library/react\
npm install @testing-library/user-event\
npm install web-vitals\
Вообще, в package.json есть массив dependencies. Там указаны все зависимости с версиями, которые должны стоять.\
Если совсем возникнут сложности, напиши мне в телегу, я скину в беседу node_modules, просто перемести папку в склонированный проект.

Также нужно ознакомиться с основами Реакта. Понимать структуру компонентов и их жизненный цикл, основные хуки 
(useState, useEffect, useContext, useCallback) и написание своих хуков, основы роутинга с react-router-dom, основы Redux, 
основы верстки с bootstrap/flex/css, основы адаптивной верстки с media queries, основы JS.

## В заключение
Впринципе, самое лучшее - это учиться на практике, ибо пока сам не попробуешь, не поймёшь как оно на деле и не познаешь тонкости. Eсли что, буду помогать, ну и мои репозитории Ideaspace никто не отменял)\
Можно сколько угодно там лазить, они всегда открыты, многие штуки, которые мы будем делать, есть там) Бекендеров это тоже касается кстати.

