import { auth } from "@/auth";
import { signInWithGoogle, signOutOfGoogle } from "../actions/auth";

export async function AuthStatus() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form action={signInWithGoogle}>
        <button className="rounded-full bg-[#356859] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2c574b]">
          Connect Google Calendar
        </button>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="rounded-2xl border border-[#ded7c9] bg-[#fbfaf7] px-4 py-3">
        <p className="text-sm font-semibold">{session.user.name}</p>
        <p className="text-xs text-[#356859]">Google connected</p>
      </div>
      <form action={signOutOfGoogle}>
        <button className="rounded-full border border-[#ded7c9] px-5 py-3 text-sm font-semibold text-[#625c52] transition hover:bg-[#f1ece3]">
          Sign out
        </button>
      </form>
    </div>
  );
}
