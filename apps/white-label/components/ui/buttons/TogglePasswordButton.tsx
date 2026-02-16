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
      className={`absolute h-full end-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-muted-foreground shadow-none`}
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
