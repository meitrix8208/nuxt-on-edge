export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, {
    xForwardedFor: true,
  });
  //* If the IP is localhost, return a hardcoded value
  const headers = getRequestHeaders(event);
  if (ip === "127.0.0.1") {
    return {
      city: "Localhost",
      ip,
      headers
    };
  }

  const url = `https://ip.guide/${ip}`;
  // headers["x-nf-geo"] 
  headers["x-nf-geo"] = headers["x-nf-geo"] || "eyJkYXRhIjp7ImNpdHkiOiJNYXJrZW5lIn19";
  const geo = JSON.parse(Buffer.from(headers["x-nf-geo"], "base64").toString("utf-8"));

  try {
    const { location: { city } } = await $fetch<{ location: { city: string } }>(url, {
      responseType: "json",
    });
    return {
      city,
      ip,
      headers, 
      geo
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch data",
      data: error,
    });
  }
});
