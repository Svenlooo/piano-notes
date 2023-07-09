<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <NuxtLink
          to="/highscore"
          class="navigation__button"
          data-cy="nav-highscore"
        >
          <Icon name="game-icons:scroll-unfurled" />
          <span class="label">Score</span>
        </NuxtLink>
      </li>
      <li class="navigation__list-item">
        <NuxtLink to="/" class="navigation__button" data-cy="nav-play">
          <Icon name="game-icons:grand-piano" />
          <span class="label">Play</span>
        </NuxtLink>
      </li>
      <li class="navigation__list-item">
        <NuxtLink
          to="/settings"
          class="navigation__button"
          data-cy="nav-settings"
        >
          <Icon name="ion:md-options" />
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
  background-color: var(--color-piano-black);

  @media #{map-get($mediaSituations, 'fills-screen')} {
    @media #{map-get($mediaSituations, 'portrait')} {
      position: fixed;
      bottom: 0;
      bottom: env(safe-area-inset-bottom);
    }
  }

  @media #{map-get($mediaSituations, 'landscape')} {
    width: $navigationHeight;
    height: 100%;
  }

  &__list {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style-type: none;
  }

  &__list-item {
    @media #{map-get($mediaSituations, 'landscape')} {
      display: flex;
    }
  }

  &__button {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-size: 0.6em;
    background: transparent;
    border: none;
    padding: 14px;
    text-align: center;
    text-decoration: none;
    color: var(--color-white);

    &.router-link-active {
      color: var(--color-red);
    }

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
