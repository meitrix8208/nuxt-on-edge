export default defineEventHandler(async (event) => {
  const base64default = "eyJjaXR5IjoiQmFycmFucXVpbGxhIiwiY291bnRyeSI6eyJjb2RlIjoiQ08iLCJuYW1lIjoiQ29sb21iaWEifSwicG9zdGFsX2NvZGUiOiIwODAwMDEiLCJzdWJkaXZpc2lvbiI6eyJjb2RlIjoiQVRMIiwibmFtZSI6IkF0bMOhbnRpY28ifSwidGltZXpvbmUiOiJBbWVyaWNhL0JvZ290YSIsImxhdGl0dWRlIjoxMC45NzExLCJsb25naXR1ZGUiOi03NC43ODM3fQ=="
  const headers = getRequestHeaders(event);
  const ip = getRequestIP(event, {
    xForwardedFor: true,
  });
  const geoDummy = JSON.parse(Buffer.from(base64default, "base64").toString("utf-8"));
  //* If the IP is localhost, return a hardcoded value
  if (ip === "127.0.0.1") {
    return {
      city: "Localhost",
      ip,
      geoDummy,
    };
  }
  interface Geo {
    city: string;
    country: Country
  }
  interface Country {
    code: string;
    name: string;
  }

  try {
    headers["x-nf-geo"] = headers["x-nf-geo"] || base64default;
    const geo: Geo = JSON.parse(Buffer.from(headers["x-nf-geo"], "base64").toString("utf-8"));
    return {
      city: `${geo.country.name}/${geo.city}`,
      ip,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to get geo data",
      data: error,
    });
  }
});
