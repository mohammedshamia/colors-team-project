
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundary.style'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>This Page is Broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
