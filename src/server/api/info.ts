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

  const url = `https://ip.guide/${ip}`;
  try {
    const { location: { city } } = await $fetch<{ location: { city: string } }>(url, {
      responseType: "json",
    });
    return {
      city,
      ip,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch data",
      data: error,
    });
  }
});
