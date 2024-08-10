<script setup lang="ts">
const { data: info } = await useFetch("/api/info");
const generatedAt = useState(() => new Date().toISOString());
</script>

<template>
  <Html lang="en">

  <Head>
    <Title>Nuxt on the edge</Title>
    <Meta name="description" content="HTML, dynamically rendered in a city near you" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@nuxt_js" />
    <Meta name="twitter:creator" content="@nuxt_js" />
    <Meta name="twitter:title" content="Nuxt on the edge" />
    <Meta name="twitter:description" content="HTML, dynamically rendered in a city near you" />
    <Meta name="twitter:image" content="https://nuxt-on-edge.netlify.app/og-card.png" />
    <Meta name="twitter:image:alt" content="The Netlify and Nuxt logos" />
    <Meta name="og:image" content="https://nuxt-on-edge.netlify.app/og-card.png" />
  </Head>

  <ImgAppBackground />
  <div id="container">
    <main>
      <h1>Hello from the edge!</h1>
      <section class="info">
        <aside class="block">
          <div class="contents">
            <span>Your city</span>
            <strong :title="info?.ip == '-'
              ? 'GeoIP information could not be derived from your IP'
              : undefined
              ">
              {{ info?.city }}
            </strong>
          </div>
        </aside>

        <section class="block">
          <aside class="contents">
            <span>Your IP address</span>
            <strong>{{ info?.ip ? info.ip : "N/A" }}</strong>
          </aside>
        </section>
      </section>
    </main>
    <span class="infoTimeServer">Generated at {{ generatedAt }}</span>
  </div>
  <FooterComp />

  </Html>
</template>

<style src="@/public/main.css" />
