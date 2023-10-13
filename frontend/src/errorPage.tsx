import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (typeof error === "object" && error !== null) {
    if ("statusText" in error) {
      errorMessage = (error as { statusText: string }).statusText;
    } else if ("message" in error) {
      errorMessage = (error as { message: string }).message;
    } else {
      errorMessage = "An unexpected error occurred.";
    }
  } else {
    errorMessage = "An unexpected error occurred.";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>{errorMessage}</i></p>
    </div>
  );
}
