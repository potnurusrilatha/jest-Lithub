import { render, screen, act } from "@testing-library/react";
import Result from "@/components/Result";

jest.useFakeTimers(); 
describe("Result Component", () => {
  it("renders message when provided", () => {
    render(<Result message="Success!" />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Success!");
    expect(alert).toHaveClass("opacity-100");
  });

  it("does not render when message is null", () => {
    render(<Result message={null} />);
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("hides message after duration", () => {
    render(<Result message="Success!" duration={2000} />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("opacity-100");

    act(() => {
      jest.advanceTimersByTime(2000); 
    });

    expect(alert).toHaveClass("opacity-0");
  });

  it("clears timer when unmounted", () => {
    const { unmount } = render(<Result message="Hello" duration={1000} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();

    unmount();

    act(() => {
      jest.runAllTimers();
    });
  });
});
