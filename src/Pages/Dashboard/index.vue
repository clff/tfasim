<template>
  <div class="dashboard-wrapper">
    <div class="blurbs">
      <router-link :to="{ name: 'powerOfAttorney' }">
        <div class="blurb power-of-attorney">
          <span>יפוי כח מתמשך</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'fees' }">
        <div class="blurb fees"><span>שכר טירחה</span></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.dashboard-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .blurbs {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--fw-20);

    .blurb {
      cursor: pointer;
      width: var(--fw-56);
      height: var(--fw-56);
      border: 1px var(--fw-gray-300) solid;
      border-radius: 5px;
      box-shadow: var(--fw-shadow-md);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>