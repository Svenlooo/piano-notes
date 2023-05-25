<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__list-item">
                <NuxtLink to="/highscore" class="navigation__button">
                    <Icon name="game-icons:scroll-unfurled" />
                    <span class="label">Score</span>
                </NuxtLink>
            </li>
            <li class="navigation__list-item">
                <NuxtLink to="/" class="navigation__button">
                    <Icon name="game-icons:grand-piano" />
                    <span class="label">Play</span>
                </NuxtLink>
            </li>
            <li class="navigation__list-item">
                <NuxtLink to="/settings" class="navigation__button">
                    <Icon name="game-icons:settings-knobs" />
                    <span class="label">Settings</span>
                </NuxtLink>
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
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            font-size: .6em;
            background: transparent;
            border: none;
            padding: 14px;
            text-align: center;

            & .icon {
                width: 26px;
                height: 26px;
                margin-bottom: 4px;
            }

            & .label {
                width: 100%;
            }
        }
    }
</style>
