'use strict'

const apps = [
        [6121396, 'VK Admin', 'https://pp.userapi.com/c836324/v836324157/57e47/kmuk5kWubsA.jpg', 'VK Admin — приложение для администраторов сообществ. Общайтесь с клиентами и подписчиками от имени Ваших сообществ ВКонтакте, управляйте группой и отслеживайте статистику с мобильного телефона.', 330],
        [5776857, 'VK Admin (iOS)', 'https://pp.userapi.com/c831308/v831308960/d4af9/0o-EVdYjXmk.jpg', 'Приложение для организации обратной связи с клиентами, пользователями и подписчиками Ваших сообществ.', 330],
        [6463690, 'Маруся', 'https://sun9-56.userapi.com/Zbl1njzBDZ4v9shXbclysDxLjeG7KHgYFAlwMw/rb-hbmdVyxI.jpg', 'Медиапоиск', 132],
        [7556576, 'Сферум', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg', '', 132],
        [7598572, 'Сферум Android', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg', '', 132],
        [7571751, 'VK Education iOS', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg', '', 132],
        [7793118, 'Звонки ВКонтакте', 'https://sun9-70.userapi.com/tLjtkuMT7KLnrF5Y6oLWde6d28VukfCSXD7U8g/9QgR70ZKFG8.jpg', '', 132],
        [6287487, 'vk.com', 'https://sun9-26.userapi.com/R01NieP5YFWfLuBeXh16HsCY8wV6_Se_ZWbDfA/8YNxS0zNoFc.jpg', '', 132],
        [7799655, 'VK Почта', 'https://sun9-72.userapi.com/GmN1wML-yv_PWHSbmTQ5-zVukaItizcL3M3_Xw/y4fC58Uj6lg.jpg', '', 132],
        [7539952, 'Почта Mail.ru', 'https://sun9-37.userapi.com/mAVW07zs1VXCpH8q-vwccaIyz3pZ49JkW1-8eQ/G87utOTbowo.jpg', 'Почта', 132],
        [7497650, 'VK Connect', 'https://vk.com/images/dquestion_a.png', '', 132],
        [5530956, 'Prisma', 'https://pp.userapi.com/c633324/v633324499/3a9b0/8ZaEuKGfypU.jpg', 'Почувствуй себя художником! Преврати фотографии в уникальные произведения искусства:<br>— Фильтры в стиле художников<br>— Завораживающие фотоэффекты<br>— Делись шедеврами в одно нажатие', 288],
        [3698024, 'Instagram', 'https://pp.userapi.com/c633227/v633227376/33212/KU3LDlKwxo0.jpg', 'Мобильное приложение для публикации фотографий.', 240],
        [2685278, 'Kate Mobile', 'https://pp.userapi.com/c412825/v412825174/6522/nEKTkD_Uqcg.jpg', 'ВКонтакте для Android', 132],
        [4083558, 'VFeed', 'https://pp.userapi.com/c613529/v613529371/16761/Mjwh_-ADFK8.jpg', 'VFeed для iphone', 132]
    ],
    utypes = [
        [0, 'Уведомления', 'notify', 'только для iframe-приложений'],
        [1, 'Друзья', 'friends'],
        [2, 'Фотографии', 'photos'],
        [3, 'Аудиозаписи', 'audio', 'доступ к API аудиозаписей ограничен'],
        [4, 'Видеозаписи', 'video'],
        [6, 'Истории', 'stories'],
        [7, 'Wiki-страницы', 'pages'],
        [8, 'Добавление в меню слева', 'menu', 'только для iframe-приложений'],
        [9, 'Быстрая публикация на стенах', 'wallmenu', 'устаревший параметр'],
        [10, 'Статус', 'status'],
        [11, 'Заметки', 'notes'],
        [12, 'Сообщения', 'messages', 'доступ к API сообщений ограничен'],
        [13, 'Стена', 'wall'],
        [15, 'Рекламные кабинеты', 'ads'],
        [16, 'Доступ в любое время', 'offline'],
        [17, 'Документы', 'docs'],
        [18, 'Группы', 'groups'],
        [19, 'Ответы', 'notifications'],
        [20, 'Статистика', 'stats'],
        [22, 'Электронная почта', 'email'],
        [23, 'Кабинеты рекламной сети', 'adsweb'],
        [24, 'Рекламные акции', 'leads', 'только для рекламных партнёров'],
        [26, 'Кабинеты биржи рекламы', 'exchange'],
        [27, 'Товары', 'market'],
        [28, 'Номер телефона', 'phone', 'только для сервисов и доверенных iframe-приложений']
    ],
    gtypes = [
        [0, 'Истории', 'stories'],
        [2, 'Фотографии', 'photos'],
        [12, 'Сообщения', 'messages'],
        [13, 'Стена', 'wall'],
        [17, 'Документы', 'docs'],
        [18, 'Администрирование', 'manage'],
        [27, 'Товары', 'market']
    ];


apps.map(app => apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button onclick="auth(' + app[0] + ')" class="btn">' + app[1] + '</button><span><img src="' + app[2] + '" class="p_icon"><div class="desc"><p>' + (app[3] ? app[3] : 'Описание отсутствует') + '</p><p>ID приложения: ' + app[0] + '</p>Иконка в записях:<div class="icon" style="background-position: 0 -' + app[4] + 'px;"></div></div></span></div>'));

apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button class="btn" id="settings">Настройки &raquo;</button><span><div class="desc">Настройка прав, указание ID приложения, а также получение токена для группы</div></span></div>');

addPermissions(utypes, permissions);
addPermissions(gtypes, gpermissions);

settings.onclick = function() {
    showOptions(1);
};

close_button.onclick = function() {
    showOptions();
};

uncheck.onclick = function() {
    Array.prototype.slice.call(document.querySelectorAll('input[scope]')).map(check => check.checked = false);
};

submit.onclick = function() {
    if (token_type_user.checked) {
        var scope = document.querySelectorAll('#permissions > input:checked'),
            groups = 0;
    } else {
        var scope = document.querySelectorAll('#gpermissions > input:checked'),
            groups = 1;
    }
    let app = app_id.value;
    let group = group_id.value;
    if ((app && !groups) || (app && groups && group && scope.length)) {
        auth(app, Array.prototype.slice.call(scope).reduce((cc, sc) => cc + Math.pow(2, sc.getAttribute('scope')), 0), (groups ? group : ''));
        err_msg.style.display = 'none';
    } else {
        err_msg.style.display = 'block';
    }
};

document.onkeydown = function(e) {
    if (e.key == 'Escape') {
        showOptions();
    }
};


window.onclick = function(event) {
    if (event.target == myModal) {
        showOptions();
    }
};

window.EventTarget.prototype.addDelegatedListener = function(type, delegateSelector, listener) {
    this.addEventListener(type, function(event) {
        if (event.target && event.target.matches(delegateSelector)) {
            listener.call(event.target, event)
        }
    })
};

document.addDelegatedListener('change', 'input[type="radio"]', function(event) {
    if (token_type_user.checked) {
        permissions.style.display = offline_warning.style.display = 'block';
        gpermissions.style.display = group_block.style.display = 'none';
    } else {
        permissions.style.display = offline_warning.style.display = 'none';
        gpermissions.style.display = group_block.style.display = 'block';
    }
    err_msg.style.display = 'none';
})

function showOptions(d) {
    myModal.style.display = (d ? 'block' : 'none');
}

function addPermissions(arr, el) {
    arr.map(type => el.insertAdjacentHTML('beforeend', '<input type="checkbox" id="' + el.id + '_' + type[0] + '" class="pcheck" scope="' + type[0] + '" ' + (!type[3] ? 'checked' : '') + '><label for="' + el.id + '_' + type[0] + '" class="btn" title="' + type[2] + '' + (type[3] ? ' (' + type[3] + ')' : '') + '">' + type[1] + '</label>'));
}

function auth(app, scope = 1073737727, groups = false) {
    window.open('https://oauth.vk.com/authorize?client_id=' + app + '&scope=' + scope + '&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token' + (groups ? '&group_ids=' + groups.replace(/[^0-9\,]/gim, '') : '&revoke=1'));
}
