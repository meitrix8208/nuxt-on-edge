const { preset } = useRuntimeConfig();
export default defineEventHandler(async (event) => {
        const { location: { city } } = await $fetch<{ location: { city: string } }>("https://ip.guide/2800:e2:467f:e78c:b831:7d2:5147:bb3c", {
        responseType: "json",
      });
     console.log(city);
  if (preset !== "netlify-edge") {
    const ip = getRequestIP(event, {
      xForwardedFor: true,
    });
    //* If the IP is localhost, return a hardcoded value
    if (ip === "127.0.0.1") {
      return {
        city: "Localhost",
        ip,
      };
    }

    const url = `https://ip.guide/${ip}`;
    try {
      const { location: { city } } = await $fetch<{ location: { city: string } }>(url, {
        responseType: "json",
      });
      console.log(city);
      return {
        city,
        ip,
        preset,
      };
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to fetch data",
        data: error,
      });
    }
  } else {

    interface Geo {
      city: string;
    }
    const base64default = "ewogICAgImNpdHkiOiAiTk9DSVRZIgp9";
    const headers = getRequestHeaders(event);
    const ip = getRequestIP(event, {
      xForwardedFor: true,
    });
    //* If the IP is localhost, return a hardcoded value
    if (ip === "127.0.0.1") {
      return {
        city: "Localhost",
        ip,
      };
    }
    if (ip === undefined) {
      throw createError({
        statusCode: 500,
        message: "Failed to get IP",
      });
    }

    try {
      headers["x-nf-geo"] ??= base64default;
      const { city }: Geo = JSON.parse(Buffer.from(headers["x-nf-geo"], "base64").toString("utf-8"));
      return {
        city,
        ip,
        preset,
        headers,
      };
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to get geo data",
        data: error,
      });
    }
  }
});
