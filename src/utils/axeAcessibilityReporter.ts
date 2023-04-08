export async function axeAcessibilityReporter() {
  if (process.env.NODE_ENV !== "development" || typeof window === "undefined") {
    return;
  }

  const [axe, React, ReactDOM] = await Promise.all([
    import("@axe-core/react"),
    import("react"),
    import("react-dom"),
  ]);

  axe.default(React.default, ReactDOM.default, 1000);
}
