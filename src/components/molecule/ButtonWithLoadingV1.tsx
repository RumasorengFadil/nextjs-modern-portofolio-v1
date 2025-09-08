import { Button } from "@/components/ui/button";
import { ComponentType, ReactNode } from "react";

// Tipe ukuran yang valid
type SpinnerSize = "small" | "medium" | "large";

// Tipe props komponen Spinner
interface SpinnerProps {
  size?: SpinnerSize;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "small" }) => {
  const sizes: Record<SpinnerSize, string> = {
    small: "w-4 h-4 border-2",
    medium: "w-6 h-6 border-4",
    large: "w-8 h-8 border-4",
  };

  return (
    <div
      className={`${sizes[size]} z-50 border-t-transparent border-blue-500 border-solid rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
};

// Tipe untuk komponen pembungkus dan spinner
interface WithLoadingOptions {
  Spinner?: ComponentType;
  Overlay?: ComponentType;
  LoadingWrapper?: ComponentType<{ children: ReactNode }>;
}

// Tipe props tambahan yang akan ditambahkan ke komponen
interface WithLoadingProps {
  isLoading: boolean;
}

// Fungsi HOC
const withLoading = ({
  Spinner,
  Overlay,
  LoadingWrapper = ({ children }: { children: ReactNode }) => <div>{children}</div>,
}: WithLoadingOptions) =>
  function <P extends object>(
    WrappedComponent: ComponentType<P>
  ): ComponentType<P & WithLoadingProps> {
    return function EnhancedComponent({ isLoading, ...props }: WithLoadingProps & P) {
      if (isLoading) {
        return (
          <LoadingWrapper>
            <div className="relative flex items-center justify-center w-full h-full">
              {Overlay && <Overlay />}
              {Spinner && <Spinner />}
            </div>
          </LoadingWrapper>
        );
      }
      return <WrappedComponent {...(props as P)} />;
    };
  };


/**
 * `ButtonWithLoading` is a reusable button component enhanced with a loading indicator,
 * created using the `withLoading` higher-order component (HOC).
 *
 * When `isLoading` is set to `true`, the button displays a spinner (to the left of the label)
 * and becomes disabled to prevent user interaction during asynchronous operations.
 *
 * @example
 * ```tsx
 * <ButtonWithLoading isLoading={true}>
 *   Save
 * </ButtonWithLoading>
 * ```
 *
 * @remarks
 * - Internally combines the `Button` component as a wrapper and `Spinner` for loading feedback.
 * - Useful in forms or any place where an action triggers async processing.
 *
 * @returns A `Button` component with built-in loading behavior.
 */
const ButtonFull = ({children}:{children:ReactNode}) => {
  return <Button className="w-full">{children}</Button>;

}
const ButtonWithLoading = withLoading({
  LoadingWrapper: ButtonFull,
  Spinner,
})(Button)

export default ButtonWithLoading;



