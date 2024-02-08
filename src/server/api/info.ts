export default defineEventHandler(async (event) => {
  const ipHeader = getHeader(event, "x-forwarded-for");
  const netlifyIp = getHeader(event, "client-ip");
  const ip = ipHeader ? ipHeader.split(",")[0] : "-";
  const ip2 = netlifyIp ? netlifyIp.split(",")[0] : "-";
  //* If the IP is localhost, return a hardcoded value
  if (ip === "127.0.0.1") {
    return {
      city: "Localhost",
      ip,
    };
  }
  const url = `https://ipapi.co/${ip}/json/`;
  try {
    const { city } = await $fetch<{ city: string }>(url);
    return {
      netlifyIp,
      city,
      ip,
      ip2,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch data",
      data: error,
    });
  }
});
