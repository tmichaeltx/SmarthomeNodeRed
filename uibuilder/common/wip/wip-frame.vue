// wip-frame.vue from https://www.smashingmagazine.com/2019/07/using-slots-vue-js/ v1
<!--<template>
  <div class="frame">
    <slot>
        <div>This is the default content if nothing gets specified to go here</div>
        </slot>
  </div>
</template>  -->

// wip-frame.vue from https://www.smashingmagazine.com/2019/07/using-slots-vue-js/ v2
<template>
  <div class="frame">
    <header><h2><slot name="header">Title</slot></h2></header>
    <slot>This is the default content if nothing gets specified to go here</slot>
    <br>
    <p>notice how the font awesome 5 icons are shown even when they in the wip-frame.vue</p>
    <span style="color: Mediumslateblue;">
        <i class="fas fa-adjust"></i>
        <i class="fas fa-ban"></i>
        <i class="fas fa-battery-empty"></i>
        <i class="fas fa-battery-quarter"></i>
        <i class="fas fa-battery-half"></i>
        <i class="fas fa-battery-three-quarters fa-pulse"></i>
        <i class="fas fa-battery-full fa-spin"></i>
        <i class="fas fa-bell"></i>
        <i class="far fa-bell"></i>
        <i class="fas fa-bell-slash"></i>
        <i class="far fa-bell-slash"></i>
        <i class="fas fa-bolt"></i>
        <i class="fas fa-book"></i>
        <i class="fas fa-book-reader"></i>
        <i class="fas fa-bookmark"></i>
        <i class="far fa-bookmark"></i>
        <i class="fas fa-charging-station"></i>
        <i class="fas fa-chart-area"></i>
        <i class="fas fa-chart-bar"></i>
        <i class="far fa-chart-bar"></i>
        <i class="fas fa-chart-line"></i>
        <i class="fas fa-check"></i>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-circle"></i>
        <i class="far fa-circle"></i>
        <i class="fas fa-circle-notch"></i>
        <i class="fas fa-clock"></i>
        <i class="far fa-clock"></i>
        <i class="fas fa-door-closed"></i>
        <i class="fas fa-door-open"></i>
        <i class="fas fa-dot-circle"></i>
        <i class="far fa-dot-circle"></i>
        <i class="fas fa-ellipsis-h"></i>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-exclamation"></i>
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-exclamation-triangle"></i>
        <i class="fas fa-filter"></i>
        <i class="fas fa-flag"></i>
        <i class="far fa-flag"></i>
        <i class="fas fa-home"></i>
        <i class="fas fa-house-user"></i>
        <i class="fab fa-js"></i>
        <i class="fab fa-js-square"></i>
        <i class="fas fa-key"></i>
        <i class="fas fa-lightbulb"></i>
        <i class="far fa-lightbulb"></i>
        <i class="fas fa-list"></i>
        <i class="fas fa-list-alt"></i>
        <i class="far fa-list-alt"></i>
        <i class="fas fa-location-arrow"></i>
        <i class="fas fa-map"></i>
        <i class="far fa-map"></i>
        <i class="fas fa-map-marked"></i>
        <i class="fas fa-map-marked-alt"></i>
        <i class="fas fa-map-marker"></i>
        <i class="fas fa-map-marker-alt"></i>
        <i class="fas fa-map-pin"></i>
        <i class="fas fa-map-signs"></i>
        <i class="fas fa-play"></i>
        <i class="fas fa-play-circle"></i>
        <i class="far fa-play-circle"></i>
        <i class="fas fa-plug"></i>
        <i class="fas fa-power-off"></i>
        <i class="fas fa-question"></i>
        <i class="fas fa-question-circle"></i>
        <i class="far fa-question-circle"></i>
        <i class="fas fa-random"></i>
        <i class="fas fa-redo"></i>
        <i class="fas fa-redo-alt"></i>
        <i class="fas fa-sliders-h"></i>
        <i class="fas fa-spinner"></i>
        <i class="fas fa-square"></i>
        <i class="far fa-square"></i>
        <i class="fas fa-square-full"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="fas fa-star-half"></i>
        <i class="far fa-star-half"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="fas fa-stop"></i>
        <i class="fas fa-stop-circle"></i>
        <i class="far fa-stop-circle"></i>
        <i class="fas fa-thermometer-empty"></i>
        <i class="fas fa-thermometer-quarter"></i>
        <i class="fas fa-thermometer-half"></i>
        <i class="fas fa-thermometer-three-quarters"></i>
        <i class="fas fa-thermometer-full"></i>
        <i class="fas fa-toggle-on"></i>
        <i class="fas fa-toggle-off fa-rotate-90"></i>
        <i class="fas fa-tv"></i>
        <i class="fas fa-undo"></i>
        <i class="fas fa-undo-alt"></i>
        <i class="fas fa-unlink"></i>
        <i class="fas fa-unlock"></i>
        <i class="fas fa-unlock-alt"></i>
        <i class="fas fa-volume-down"></i>
        <i class="fas fa-volume-mute"></i>
        <i class="fas fa-volume-off"></i>
        <i class="fas fa-volume-up"></i>
        
    </span>
  </div>
</template>
