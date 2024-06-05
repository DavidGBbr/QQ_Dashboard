import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import "../styles/form.css";

export function SubmitBtn({ children }: PropsWithChildren) {
  const status = useFormStatus();
  //console.log(status.pending);
  return (
    <button type="submit" disabled={status.pending} className="button-orange">
      {children}
    </button>
  );
}
