import { auth } from "@/firebase/admin";

export default async function TestPage() {
  let userCount = "not fetched";

  try {
    const list = await auth.listUsers(1); // Get just 1 user
    userCount = `Fetched ${list.users.length} user(s) from Firebase Admin`;
  } catch (e: any) {
    userCount = `Error: ${e.message}`;
  }

  return <h1>{userCount}</h1>;
}
