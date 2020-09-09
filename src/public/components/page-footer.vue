<template>
    <footer>
        <div class="container">

            <div class="topF">
                <div class="logo">
                    <a href="#">
                        <img src="https://alloremont24.ru/img/logo-footer.png" alt="Ремонт iphone с выездом мастера на дом - Alloremont24.ru">
                    </a>
                </div>
                <div class="makeCall">
                    <a href="tel:+79067263924">+7 (906) <strong>726-39-24</strong></a>
                </div>
            </div>

            <div class="midF">
                <ul class="footerModels">
                    <li v-for="item of $parent.models" :key="item.model">
                        <span>{{ item.model }}</span>
                    </li>
                </ul>
                <ul class="footerServices">
                    <li v-for="item of $parent.services" :key="item.name">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="botF">
                <p>© 2020 Сервисный центр «AlloRemont24.ru». Все права защищены.</p>
                <div class="widgets">
                    <div class="left">
                        <img src="https://top-fwz1.mail.ru/counter?id=3172109;t=280;l=1" alt="mail">
                        <img src="https://kraken.rambler.ru/cnt/?et=pv&pid=7040052&rid=1599567484.294-181195231&tid=t1.7040052.1635947411.1598962273842&v=1.8.0&rn=772237969&bs=1488x726&ce=1&rf=https%3A%2F%2Fyandex.ru%2F&en=UTF-8&pt=%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20iPhone%20-%20%D1%81%20%D0%B2%D1%8B%D0%B5%D0%B7%D0%B4%D0%BE%D0%BC%20%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE%20%D0%BF%D0%BE%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D1%83%20%D0%90%D0%B9%D1%84%D0%BE%D0%BD%20%D0%BD%D0%B0%20%D0%B4%D0%BE%D0%BC%20%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%B0%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%20-%20AlloRemont24.ru&sr=1536x864&cd=24-bit&la=ru&ja=0&acn=Mozilla&an=Netscape&pl=Win32&tz=-180&fv=32.0%20r0&sv&lv=1599556639793%3A%3A1599567439793&le=0&url=https%3A%2F%2Falloremont24.ru%2F" alt="rambler">
                    </div>
                    <div class="right">
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Карта сайта</a>
                    </div>
                </div>
                <p class="disclaimer">Название компании Apple, её логотип, товарные знаки (“Apple”, “iPhone” и др.), 
                    изображения продукции и элементы дизайна веб-сайта apple.com, используются на сайте с целью ознакомления. 
                    Apple - является зарегистрированным товарным знаком компании Apple Inc. 
                    Обозначение используется не с целью индивидуализации услуг по ремонту, а с целью информирования потребителей 
                    о предоставляемых услугах в отношении техники правообладателя. 
                    Информация на сайте не является публичной офертой и носит исключительно информационный характер.
                </p>
            </div>

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>