"use server";
import { OAuthProvider } from "node-appwrite";
import { cookies } from "next/headers";
import { ID } from "appwrite";
import { redirect } from "next/navigation";
import { createAdminClient, createSessionClient } from "../server/appwrite-config";

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signUpWithCredential({ formData }: { formData: FormData }) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("fullname") as string;

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password, name);
  try {
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("my-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirect("/");
  } catch (error) {
    console.error("Sign-up error:", error);
    throw new Error("Sign up new account fail");
  }
}

export async function signIn({ formData }: { formData: FormData }) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { account } = await createSessionClient();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("my-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirect("/");
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error("Invalid email or password");
  }
}

export async function signOut() {
  const { account } = await createSessionClient();
  try {
    (await cookies()).delete("my-session");
    await account.deleteSession("current");

    redirect("/sign-in");
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Logout fail");
  }
}

export async function signUpWithGoogle() {
  const { account } = await createAdminClient();

  try {
    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/oauth/callback/google`;
    const authUrl = account.createOAuth2Token(OAuthProvider.Google, redirectUrl, redirectUrl);

    return authUrl;
  } catch (error) {
    console.error("Google Sign-Up Error:", error);
    throw new Error("Failed to sign up with Google");
  }
}

export async function signInWithGoogle() {
  const { account } = await createSessionClient();

  try {
    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/oauth/callback/google`;
    const authUrl = account.createOAuth2Token(OAuthProvider.Google, redirectUrl, redirectUrl);

    return authUrl;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw new Error("Failed to sign in with Google");
  }
}
