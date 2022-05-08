import React from 'react'
import { twMerge } from 'tailwind-merge'

class ToggleGroup extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = { value: this.props.value };
    }

    onChange(e:any) {
        let value = e.target.value;

        this.setState({ value: value }, () => typeof this.props.onUpdate === "function" ? this.props.onUpdate(value) : null);
    }

    get value() {
        return this.state.value;
    }

    render() {
        return (
            <div {...this.props}>
                {this.props.items.map(item => {
                    return (
                        <label key={item.value}>
                            <input
                                className={this.props.classes}
                                type="radio"
                                checked={this.state.value === item.value}
                                disabled={item.disabled}
                                value={item.value}
                                name={this.props.name}
                                onChange={this.onChange.bind(this)}
                            />
                            <span>{item.label}</span>
                        </label>
                    );
                })}
            </div>
        );
    }
}
export { ToggleGroup }
// ToggleGroup.propTypes = {
//      name: React.PropTypes.string.isRequired,
//      value: React.PropTypes.string.isRequired,
//      items: React.PropTypes.arrayOf(React.PropTypes.shape({
//            value: React.PropTypes.string.isRequired,
//            label: React.PropTypes.string.isRequired,
//            checked: React.PropTypes.bool
//      })).isRequired,
//      onUpdate: React.PropTypes.func
// };

// let items = [
//     { value: "a", label: "Option 1" },
//     { value: "b", label: "Option 2" },
//     { value: "c", label: "Option 3" },
//     { value: "d", label: "Option 4", disabled: true },
//     { value: "e", label: "Option 5" }
// ]

// function onChange(value) {
//    console.log(value); 
// }

// React.render(, document.body);