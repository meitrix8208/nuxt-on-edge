export default defineEventHandler(async (event) => {
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
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to get geo data",
      data: error,
    });
  }
});
