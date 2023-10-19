import {render} from "./render";

let ideaList = [
    {
        title: 'Автомобиль',
        info: 'Машина - лучший подарок!',
        img: 'https://cs4.pikabu.ru/post_img/big/2016/06/11/10/1465666690114064391.png',
        alt: 'Автомобиль'
    },{
        title: 'Шоколад',
        info: 'Шоколад хороший, прекрасный, замечательный. Всем рекомендую. Невероятно вкусно!',
        img: 'https://probalakovo.ru/wp-content/uploads/2019/07/shokolad-1140x641.jpg',
        alt: 'Шоколад'
    },{
        title: 'Футболка с необычным принтом',
        info: 'Стильная футболка с оригинальным дизайном. Подходит для любителей моды и самовыражения.',
        img: 'https://i2.stat01.com/2/4994/149935591/afacdb/futbolka-s-personazhem-spajk.jpg',
        alt: 'Футболка с необычным принтом'
    },{
        title: 'Набор для чая или кофе',
        info: 'Элегантный набор, включающий чашки и подставки. Идеальный подарок для любителей чая или кофе.',
        img: 'https://img.joomcdn.net/c3058d4482014d05ef3b74e5a37c11fad71b8d3e_original.jpeg',
        alt: 'Набор для чая или кофе'
    },{
        title: 'Книга любимого автора',
        info: 'Увлекательное чтение от известного писателя. Идеальный подарок для любителей литературы.?',
        img: 'https://vosbs.ru/wp-content/uploads/%D1%80%D0%B5%D0%BC%D0%B0%D1%80%D0%BA_2.jpg',
        alt: 'Книга любимого автора'
    },{
        title: 'Компактная портативная колонка',
        info: 'Беспроводная аудиоколонка с хорошим качеством звука. Идеально для прослушивания музыки в любом месте',
        img: 'https://mobile-review.com/news/wp-content/uploads/yaMini.jpg',
        alt: 'Компактная портативная колонка'
    },{
        title: 'Тренажер для пальцев',
        info: 'Компактное устройство для тренировки пальцев и улучшения моторики.',
        img: 'https://monsterpump.ru/files/products/dlyapalcev2.500x500.jpg?5f066d20fdabd9f7b99a48ad2150be13',
        alt: 'Тренажер для пальцев'
    },{
        title: 'Пазл с интересным изображением',
        info: 'Занимательная головоломка для развития логического мышления и терпения.',
        img: 'https://storage.yandexcloud.net/printio/assets/realistic_views/puzzle408/large/c237971f83bfc455324802c9d1378030cae6bed4.png?1591608084',
        alt: 'Пазл с интересным изображением'
    },{
        title: 'Кухонный аксессуар набор',
        info: 'Комплект полезных кухонных принадлежностей для любителей готовить.',
        img: 'https://www.evrokot.com/images/product/1187.jpg',
        alt: 'Кухонный аксессуар набор'
    },{
        title: 'Сумка или кошелек с оригинальным дизайном',
        info: 'Стильные аксессуары для хранения вещей и добавления индивидуальности к образу.',
        img: 'https://i.siteapi.org/uL_uA7Z2ku9kcFstmzsZDOoGD9I=/fit-in/1024x768/center/top/s2.siteapi.org/d02f2e58372c46a/img/o9w6moy8q3484gksk8k84kkcs4so0c',
        alt: 'Сумка или кошелек с оригинальным дизайном'
    }
    ]

let btnTextList = ['Выдай идею!', 'Что подарить?', 'Хочу идею!', 'Подари идею!']

let state = {
    sideBar: {
        allTagList: ['Добавить тег', 'Музыка', 'Автомобили', 'Кино', 'Мультфильмы', 'Еда', 'Цветы', 'Сладости', 'Одежда'],
        tagList: [],
    },

    idea: {
        ideaInfo: ideaList[0],
        btnText: btnTextList[0],
    }
}

export let addTag = (tag) => {
    state.sideBar.tagList.push(tag)
    state.sideBar.allTagList = state.sideBar.allTagList.filter((el) => el !== tag)
    render(state);
}

export let deleteTag = (tag) => {
    state.sideBar.tagList = state.sideBar.tagList.filter((el) => el !== tag)
    state.sideBar.allTagList.push(tag)
    render(state)
}

export let generateIdea = () => {
    let ideaIndex = Math.floor(Math.random() * ideaList.length)
    while (state.idea.ideaInfo === ideaList[ideaIndex])
        ideaIndex = Math.floor(Math.random() * ideaList.length)
    state.idea.ideaInfo = ideaList[ideaIndex]

    let btnIndex = Math.floor(Math.random() * btnTextList.length)
    while (state.idea.btnText === btnTextList[btnIndex])
        btnIndex = Math.floor(Math.random() * btnTextList.length)
    state.idea.btnText = btnTextList[btnIndex]

    render(state)
}

export default state