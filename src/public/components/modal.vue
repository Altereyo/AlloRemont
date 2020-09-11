<template>
    <div class="modal fade" id="modalWindow" tabindex="-1" role="dialog" aria-labelledby="modalWindowTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-top">
                    <div class="logo" @click="$parent.clearData('all')">
                        <img src="https://alloremont24.ru/img/logo-mobile.png" alt="mini-logo">
                    </div>
                    <div class="call">
                        <a href="tel:+79067263924">+7 (906) <strong>999-99-99</strong></a>
                    </div>
                    <div class="close">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="modal-mid">
                    <h5 class="modal-title">{{ modalHeader }}</h5>
                    <form action="post">
                        <div class="inputDiv name">
                            <input type="name" placeholder="Введите Ваше имя">
                            <img src="https://alloremont24.ru/img/name.png" alt="name img">
                        </div>
                        <div class="inputDiv phone">
                            <input type="phone" placeholder="Ваш номер телефона*">
                            <img src="https://alloremont24.ru/img/number.png" alt="number img">
                        </div>
                        <div class="check">
                            <input type="checkbox" id="customCheck" checked />
                            <label for="customCheck">Даю согласие на обработку персональных данных, 
                               иначе покину сайт сейчас же или выключу обработку мох данных сам.
                            </label>
                        </div>
                        <button type="submit" class="greenBtn">
                            <span>{{ modalButton }}</span>
                        </button>
                    </form>
                </div>
                <div class="modal-bot">
                    <bluecall />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bluecall from "./blue-call.vue"

export default {
    props: ['modalHeader', 'modalButton'],
    components: { bluecall }
}
</script>