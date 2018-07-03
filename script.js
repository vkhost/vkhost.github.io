function apps(){
var apps = [
[3698024,'Instagram','https://pp.userapi.com/c633227/v633227376/33212/KU3LDlKwxo0.jpg','Мобильное приложение для публикации фотографий.',240],
[2685278,'Kate Mobile','https://pp.userapi.com/c412825/v412825174/6522/nEKTkD_Uqcg.jpg','ВКонтакте для Android',132],
[4083558,'VFeed','https://pp.userapi.com/c613529/v613529371/16761/Mjwh_-ADFK8.jpg','VFeed для iphone',132],
[6121396,'VK Admin','https://pp.userapi.com/c836324/v836324157/57e47/kmuk5kWubsA.jpg','VK Admin — приложение для администраторов сообществ. Общайтесь с клиентами и подписчиками от имени Ваших сообществ ВКонтакте, управляйте группой и отслеживайте статистику с мобильного телефона.',330],
[5776857,'VK Admin (iOS)','https://pp.userapi.com/c831308/v831308960/d4af9/0o-EVdYjXmk.jpg','Приложение для организации обратной связи с клиентами, пользователями и подписчиками Ваших сообществ.',330],
[5256902,'VK Live','https://pp.userapi.com/c637831/v637831651/1a1f8/qm4Rf9IX-dw.jpg','',132],
[5676187,'VK Live Android','https://pp.userapi.com/c638919/v638919892/28b52/kHZvh2UeXk8.jpg','',132],
[5554806,'Vinci','https://pp.userapi.com/c615828/v615828550/26d9c/Z7F5bOheDO8.jpg','Преображайте свои фотографии с помощью нейросетей и искусственного разума.',308],
[5530956,'Prisma','https://pp.userapi.com/c633324/v633324499/3a9b0/8ZaEuKGfypU.jpg','Почувствуй себя художником! Преврати фотографии в уникальные произведения искусства:<br>— Фильтры в стиле художников<br>— Завораживающие фотоэффекты<br>— Делись шедеврами в одно нажатие',288],
[6334949,'Клевер','https://pp.userapi.com/c841521/v841521530/7d187/IKobOsNO_lY.jpg','',132],
[6378721,'Клевер — игра с призами','https://pp.userapi.com/c841122/v841122545/7b5be/mjTfevye8ZY.jpg','',132],
[3116505,'VK API','https://pp.userapi.com/c840138/v840138345/787f9/ZTLHQaj4S7U.jpg','',132],
];
for (var app in apps) {
var adiv = document.getElementById('apps');
adiv.innerHTML += "<a onclick=\"window.open('https://oauth.vk.com/authorize?client_id="+apps[app][0]+"&amp;scope=1073741823&amp;redirect_uri=https://api.vk.com/blank.html&amp;display=page&amp;response_type=token&amp;revoke=1')\" class=\"btn\">"+apps[app][1]+"<span><img src=\""+apps[app][2]+"\" class=\"p_icon\"><div class=\"desc\">"+apps[app][3]+"<div>Иконка:<div class=\"icon\" style=\"background-position: 0 -"+apps[app][4]+"px;\"></div></div></div></span></a>";
}
adiv.innerHTML += "<a href=\"other\" class=\"btn\">Другое</a><a href=\"group\" class=\"btn\">Для группы</a><a href=\"scope\" class=\"btn\">Указать права</a>";
}
window.onload=apps;
