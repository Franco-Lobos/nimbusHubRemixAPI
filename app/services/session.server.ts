// app/sessions.ts
import { createCookieSessionStorage } from '@remix-run/node';
import { ExternalUser } from 'dbConnection/models/externalUsers';


export let externalUserSessionStorage = createCookieSessionStorage<ExternalUser>({
  cookie: {
    name: process.env.NIMBUS_HUB_SESSION || "__session",
    httpOnly: true,
    secure: true,
    sameSite: "lax", // Strict
    secrets: ["s3cret1"],
    maxAge: 5 * 60, // 5 minutes
    // also 12 hours
  },
});

export let { getSession, commitSession, destroySession } = externalUserSessionStorage;
