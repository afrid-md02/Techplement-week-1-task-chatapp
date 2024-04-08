import SignupForm from "../components/forms/signupForm";

function SignupPage() {
  return (
    <main className="min-h-[calc(100dvh-6rem)] flex items-center justify-center px-4 py-2 sm:min-h-[calc(100dvh-7.188rem)] sm:px-8 md:min-h-[calc(100dvh-7.688rem)] md:px-12">
      <SignupForm />
    </main>
  );
}

export default SignupPage;
