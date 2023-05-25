<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__list-item">
                <button class="navigation__button">Play</button>
            </li>
            <li class="navigation__list-item">
                <button class="navigation__button">Score</button>
            </li>
            <li class="navigation__list-item">
                <button class="navigation__button">Settings</button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .navigation {
        width: 100%;
        height: $navigationHeight;
        background-color: map-get($colors, 'light');

        &__list {
            margin: 0;
            padding: 0;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            list-style-type: none;
        }

        &__list-item {
            height: 100%;
        }

        &__button {
            height: 100%;
        }
    }
</style>
