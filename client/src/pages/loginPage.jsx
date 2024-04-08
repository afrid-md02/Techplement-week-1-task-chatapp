import LoginForm from "../components/forms/loginForm";

function LoginPage() {
  return (
    <main className="flex min-h-[calc(100dvh-6rem)] items-center justify-center px-4 py-2 sm:min-h-[calc(100dvh-7.188rem)] sm:px-8 md:min-h-[calc(100dvh-7.688rem)] md:px-12">
      <LoginForm />
    </main>
  );
}

export default LoginPage;
