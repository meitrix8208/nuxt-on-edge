<template>
  <svg
    class="card"
    viewBox="0 50 840 440"
    style="transform: scale(1);"
  >
    <defs>
      <linearGradient
        id="gradient-1"
        gradientUnits="userSpaceOnUse"
        x1="420"
        y1="275"
        x2="420"
        y2="167"
        gradientTransform="matrix(1 0 0 -1 0 442)"
      >
        <stop
          offset="0.464"
          style="stop-opacity: 0.2"
        ></stop>
        <stop
          offset="0.9"
          style="stop-opacity: 0"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-2"
        gradientUnits="userSpaceOnUse"
        x1="420"
        y1="325"
        x2="420"
        y2="117.001"
        gradientTransform="matrix(1 0 0 -1 0 442)"
      >
        <stop
          offset="0.464"
          style="stop-opacity: 0.2"
        ></stop>
        <stop
          offset="1"
          style="stop-opacity: 0"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-3"
        gradientUnits="userSpaceOnUse"
        x1="420"
        y1="382"
        x2="420"
        y2="60.001"
        gradientTransform="matrix(1 0 0 -1 0 442)"
      >
        <stop
          offset="0.464"
          style="stop-opacity: 0.16"
        ></stop>
        <stop
          offset="0.9"
          style="stop-opacity: 0"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-4"
        gradientUnits="userSpaceOnUse"
        x1="420"
        y1="488.788"
        x2="420"
        y2="-46.967"
        gradientTransform="matrix(1 0 0 -1 0 442)"
      >
        <stop
          offset="0.089"
          style="stop-opacity: 0.1"
        ></stop>
        <stop
          offset="0.464"
          style="stop-opacity: 0.27"
        ></stop>
        <stop
          offset="0.896"
          style="stop-opacity: 0"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-5"
        gradientUnits="userSpaceOnUse"
        x1="420"
        y1="610"
        x2="420"
        y2="-168.179"
        gradientTransform="matrix(1 0 0 -1 0 442)"
      >
        <stop
          offset="0.172"
          style="stop-opacity: 0"
        ></stop>
        <stop
          offset="0.464"
          style="stop-opacity: 0.21"
        ></stop>
        <stop
          offset="0.771"
          style="stop-opacity: 0"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-vercel"
        gradientUnits="objectBoundingBox"
        x1="0"
        y1="0"
        x2="1.5"
        y2="1"
      >
        <stop
          offset="0.3"
          style="stop-color: var(--g1)"
        ></stop>
        <stop
          offset="0.5"
          style="stop-color: var(--g2)"
        ></stop>
        <stop
          offset="0.8"
          style="stop-color: var(--g1)"
        ></stop>
      </linearGradient>
      <linearGradient
        id="gradient-react"
        gradientUnits="objectBoundingBox"
        x1="0"
        y1="0"
        x2="1.1"
        y2="1"
      >
        <stop
          offset="0.3"
          style="stop-color: var(--primary)"
        ></stop>
        <stop
          offset="0.5"
          style="stop-color: #bbf0ff"
        ></stop>
        <stop
          offset="0.8"
          style="stop-color: var(--primary)"
        ></stop>
      </linearGradient>
      <symbol
        id="logo"
        viewBox="0 0 124 124"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
          fill="#80EEC0"
        />
        <path
          d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
          fill="#00DC82"
        />
      </symbol>
      <linearGradient id="#mask-gradient">
        <stop
          offset="0"
          stop-color="black"
        ></stop>
        <stop
          offset="1"
          stop-color="white"
        ></stop>
      </linearGradient>
      <mask id="mask">
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="url(#mask-gradient)"
        ></rect>
      </mask>
    </defs>
    <g
      class="orbits"
      transform="translate(420, 220)"
    >
      <g>
        <circle
          class="orbit"
          style="stroke: url(#gradient-1); animation-delay: 0"
          r="53.4"
        ></circle>
      </g>
      <g>
        <circle
          class="orbit"
          style="stroke: url(#gradient-2); animation-delay: 0.03s"
          r="103.4"
        ></circle>
        <circle
          class="gray satellite"
          style="animation-delay: 0.9s"
          cx="-69.6"
          cy="-76"
          r="5.8"
        ></circle>
      </g>
      <g>
        <circle
          class="orbit"
          style="stroke: url(#gradient-3); animation-delay: 0.06s"
          r="160.4"
        ></circle>
        <circle
          class="orange satellite"
          style="animation-delay: 0.8s"
          cx="102.4"
          cy="-123"
          r="5.8"
        ></circle>
      </g>
      <g>
        <circle
          class="orbit"
          style="stroke: url(#gradient-4); animation-delay: 0.09s"
          r="267.3"
        ></circle>
        <circle
          class="orange satellite"
          style="animation-delay: 0.6s"
          cx="-243.6"
          cy="111.4"
          r="5.8"
        ></circle>
        <circle
          class="gray satellite"
          style="animation-delay: 1s"
          cx="250"
          cy="94.4"
          r="5.8"
        ></circle>
        <circle
          class="orange satellite"
          style="animation-delay: 0.7s"
          cx="-236.6"
          cy="-123.6"
          r="5.8"
        ></circle>
      </g>
      <g>
        <circle
          class="orbit"
          style="stroke: url(#gradient-5); animation-delay: 0.12s"
          r="388.5"
        ></circle>
      </g>
    </g>
    <!-- <path
      id="vercel-logo"
      d="m336.4 261-46.2-80-46.2 80h92.4z"
      style="fill: url(#gradient-vercel)"
    ></path> -->
    <!-- hacer que el svg sea mas pequeño -->

    <g
      xmlns="http://www.w3.org/2000/svg"
      width="36.25"
      height="32"
      viewBox="0 0 256 226"
      transform="translate(233, 168)"
    >
      <path
        class="netlify"
        fill="#05BDBA"
        d="M69.181 188.087h-2.417l-12.065-12.065v-2.417l18.444-18.444h12.778l1.704 1.704v12.778zM54.699 51.628v-2.417l12.065-12.065h2.417L87.625 55.59v12.778l-1.704 1.704H73.143z"
      />
      <path
        class="netlify"
        fill="#014847"
        d="M160.906 149.198h-17.552l-1.466-1.466v-41.089c0-7.31-2.873-12.976-11.689-13.174c-4.537-.119-9.727 0-15.274.218l-.833.852v53.173l-1.466 1.466H95.074l-1.466-1.466v-70.19l1.466-1.467h39.503c15.354 0 27.795 12.441 27.795 27.795v43.882z"
      />
      <path
        class="netlify"
        fill="#05BDBA"
        d="M71.677 122.889H1.466L0 121.423V103.83l1.466-1.466h70.211l1.466 1.466v17.593zm182.857 0h-70.211l-1.466-1.466V103.83l1.466-1.466h70.211L256 103.83v17.593zM117.876 54.124V1.466L119.342 0h17.593l1.466 1.466v52.658l-1.466 1.466h-17.593zm0 169.663v-52.658l1.466-1.466h17.593l1.466 1.466v52.658l-1.466 1.465h-17.593z"
      />
    </g>

    <g id="center">
      <path
        d="M420 202 v36 M 402 220h36"
        style="
          stroke-width: 3.5625;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: #999;
          fill: none;
        "
      ></path>
    </g>
    <use
      href="#logo"
      width="98"
      x="500"
    ></use>
    <use
      href="#logo"
      width="98"
      x="500"
      mask="url(#mask)"
    ></use>
  </svg>
</template>

<style>
g .netlify {
  scale: 0.46;
}
</style>
