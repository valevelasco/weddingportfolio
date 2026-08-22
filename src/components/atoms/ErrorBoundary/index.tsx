import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Last-resort safety net: if any page throws while rendering (e.g. a
 * malformed field coming back from Sanity), show a minimal fallback
 * instead of an entirely blank page. Route-level, not page-specific, so it
 * doesn't need to know about any one page's content.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled error rendering page:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-[6vw] text-center bg-cream text-ink font-sans">
          <p className="font-serif text-h3 m-0">Something went wrong loading this page.</p>
          <a href="/" className="text-cta border-b border-ink pb-0.5">
            BACK TO HOME
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
