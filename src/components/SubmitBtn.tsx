import "@/styles/form.css";

interface SubmitBtnProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export function SubmitBtn({ children, disabled }: SubmitBtnProps) {
  return (
    <button type="submit" disabled={disabled} className="button-orange">
      {children}
    </button>
  );
}
