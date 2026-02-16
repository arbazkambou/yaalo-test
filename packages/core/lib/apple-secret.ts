import jwt from "jsonwebtoken";

export function generateAppleSecrertKey() {
  const privateKey = process.env.APPLE_PRIVATE_KEY!;
  const teamId = process.env.APPLE_TEAM_ID!;
  const clientId = process.env.APPLE_CLIENT_ID!;
  const keyId = process.env.APPLE_KEY_ID!;

  const secret = jwt.sign(
    {
      iss: teamId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 15552000,
      aud: "https://appleid.apple.com",
      sub: clientId,
    },
    privateKey,
    {
      algorithm: "ES256" as jwt.Algorithm,
      header: {
        kid: keyId,
        alg: "ES256",
      },
    },
  ) as string;

  console.log("APPLE_CLIENT_SECRET=" + secret);
  console.log("\n Copy the FULL line above to your .env file");
}
