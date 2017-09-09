import React, {Component} from 'react';

class ToyRow extends Component {
    render() {
        return (

            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.toy}
                </td>
                <td>
                    <button className='btn btn-primary'>Edit</button>
                </td>
                    <button className='btn btn-primary'>Delete</button>
            </tr>
        )
    }
}
export default ToyRow;