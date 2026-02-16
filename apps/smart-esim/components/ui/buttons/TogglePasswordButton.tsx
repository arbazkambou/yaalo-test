import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { Button } from "@workspace/ui/components/button";
import { Eye, EyeOff } from "lucide-react";

type PropsType = {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
};

function TogglePasswordButton({
  showPassword,
  togglePasswordVisibility,
}: PropsType) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute end-0 top-0 h-full px-3 py-1.5 text-muted-foreground hover:bg-transparent hover:text-muted-foreground shadow-none"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? (
        <EyeOff className="h-6 w-6" />
      ) : (
        <Eye className="h-6 w-6" />
      )}
      <span className="sr-only">
        {showPassword ? "Hide password" : "Show password"}
      </span>
    </Button>
  );
}

export default TogglePasswordButton;
