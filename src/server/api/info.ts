export default defineEventHandler(async (event) => {
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

// ~ ----------------------------------
  const headers = getRequestHeaders(event);

  let geo = {error: "No geo information available"} as any;
  if (headers["x-nf-geo"]) {
    try {
      geo = JSON.parse(Buffer.from(headers["x-nf-geo"], "base64").toString("utf-8"));
    }
    catch (error) {
      geo = { error };
      console.error("Failed to parse geo information:", error);
    }
  }
// ~ ----------------------------------

  const url = `https://ip.guide/${ip}`;
  try {
    const { location: { city } } = await $fetch<{ location: { city: string } }>(url, {
      responseType: "json",
    });
    return {
      city,
      ip,
      geo,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch data",
      data: error,
    });
  }
});
