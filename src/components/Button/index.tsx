import { forwardRef } from "react";
import {
  alpha,
  Theme,
  useTheme,
  experimentalStyled as styled,
} from "@mui/material/styles";

import { Button, ButtonProps } from "@mui/material";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/Button/Button" {
  interface ButtonPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
  }
}

type ButtonColor = "info" | "success" | "warning" | "error";
type ButtonVariant = "contained" | "outlined" | "text";

const ButtonStyle = styled(Button)(
  ({
    theme,
    styleprops,
  }: {
    theme: Theme;
    styleprops: {
      color: ButtonColor;
      variant: ButtonVariant;
    };
  }) => {
    const { color, variant } = styleprops;

    const styleContained = (color: ColorSchema) => ({
      boxShadow: theme.shadows["3"],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      "&:hover": {
        backgroundColor: theme.palette[color].dark,
      },
});

    const styleOutlined = (color: ColorSchema) => ({
      color: theme.palette[color].main,
      border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
      "&:hover": {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
    });

    const styleText = (color: ColorSchema) => ({
      color: theme.palette[color].main,
      "&:hover": {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
    });

    return {
      ...(variant === "contained" && { ...styleContained(color) }),
      ...(variant === "outlined" && { ...styleOutlined(color) }),
      ...(variant === "text" && { ...styleText(color) }),
    };
  }
);

// ----------------------------------------------------------------------

export const MButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "primary", variant = "text", children, ...other }, ref) => {
    const theme = useTheme();

    if (color === "inherit" || color === "primary" || color === "secondary") {
      return (
        <Button ref={ref} color={color} variant={variant} {...other}>
          {children}
        </Button>
      );
    }

    return (
      <ButtonStyle
        ref={ref}
        variant={variant}
        size="large"
        styleprops={{ color, variant }}
        theme={theme}
        {...other}
        sx={{ borderRadius: "8px", ...other.sx }}
      >
        {children}
      </ButtonStyle>
    );
  }
);
