import { auth } from "@/auth";
import { signInWithGoogle, signOutOfGoogle } from "../actions/auth";

export async function AuthStatus() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form action={signInWithGoogle}>
        <button className="rounded-full bg-[#f89cac] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e8628a]">
          Connect Google Calendar
        </button>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="rounded-2xl border border-[#f0e9e9] bg-[#fdeef1] px-4 py-3">
        <p className="text-sm font-semibold">{session.user.name}</p>
        <p className="text-xs text-[#47cfcb]">Google connected</p>
      </div>
      <form action={signOutOfGoogle}>
        <button className="rounded-full border border-[#f0e9e9] px-5 py-3 text-sm font-semibold text-[#8a8a8a] transition hover:bg-[#f7f7f7]">
          Sign out
        </button>
      </form>
    </div>
  );
}

