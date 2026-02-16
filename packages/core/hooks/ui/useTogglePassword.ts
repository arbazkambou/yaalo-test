import React from "react";

export function useTogglePassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return { setShowPassword, showPassword, togglePasswordVisibility };
}
