import * as React from 'react'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
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

        // dirty, poorly written time synchronizer
        while (this.state.time == new Date().toUTCString().slice(17)) {
            await sleep(50);
        }
        this.interval = setInterval(
            () => {this.updateTime()}, 1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }
}

export default Clock
