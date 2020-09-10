<template>
    <div class="remontHome">
        <div class="container">
            <h3>Ремонт iPhone на дому</h3>
            <p>Для выполнения ремонта Айфон на дому нет ни каких препятствий. 
                Легко, сразу при Вас выполним ремонт или заменим:
            </p>
            <ul>
                <li v-for="item in $parent.$parent.services" :key="item.name">
                    <img :src="item.image" :alt="item.name">
                    <span>{{ item.name }}</span>
                </li>
            </ul>
            <p>В некоторых случаях не представляется возможным отремонтировать iPhone на дому. 
                При сложных ремонтах материнской платы необходимо доставить устройство в сервисный центр.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelChosen', 'serviceChosen'],
}
</script>

<style>

</style>