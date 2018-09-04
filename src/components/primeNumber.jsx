import React, { Component } from 'react';
import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FindPrime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }



    render() {
        const num = this.state.value;
        return (
            <React.Fragment>
                <Input className="form-control m-2" type="text" pattern="[0-9]*" value={num} onChange={this.handleChange} />
                <p>The prime factors:</p><PrimeFunction number={num} />
            </React.Fragment >
        );
    }

}
function PrimeFunction(props) {
    if (props.number > 0 && props.number !== null) {
        let number = props.number;
        console.log('prime function ' + number);
        let primeFactors = [];
        while (number % 2 === 0) {
            primeFactors.push(2 + ' ');
            number = number / 2;
        }
        var sqrtNum = Math.sqrt(number);
        for (var i = 3; i <= sqrtNum; i++) {
            while (number % i === 0) {
                primeFactors.push(i + ' ');
                number = number / i;
            }
        }

        if (number > 2) {
            primeFactors.push(number + ' ');
        }
        return (
            <p>{primeFactors}</p>

        )
    }
    else return '';


}
export default FindPrime;