import * as React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "Current Time"
        }
    }

    render() {
        return <span>{this.state.time}</span>
    }

    updateTime() {
        this.setState({
            time: new Date().toUTCString().slice(17),
        })
    }

    componentDidMount() {
        this.updateTime()
        this.interval = setInterval(
            () => {this.updateTime()}, 1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }
}

export default Clock
