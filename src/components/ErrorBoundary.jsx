import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[Portfolio Error]', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: '2rem', color: '#71717a',
          fontFamily: 'monospace', fontSize: '0.75rem',
        }}>
          {this.props.fallback || null}
        </div>
      )
    }
    return this.props.children
  }
}
