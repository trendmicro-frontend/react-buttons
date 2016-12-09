import React from 'react';
import { Button } from '../src';

export default () => {
    const options = [
        { label: 'Action', value: 'v1' },
        { label: 'Another action', value: 'v2' },
        { label: 'Something else here', value: 'v3' }
    ];
    return (
        <div>
            <h4>Drop-down Buttons</h4>
            <p>Use a drop-down menu to provide a list of options for the user.</p>
            <div>
                <p><strong>Single</strong></p>
                <Button
                    dropdown
                    placeholder="Select..."
                    options={options}
                    onChange={(selectedOption) => {
                        if (selectedOption) {
                            console.log('label =' + selectedOption.label + ', value = ' + selectedOption.value);
                        }
                    }}
                />
                <br /><br />

                <p><strong>Split</strong></p>
                <Button
                    dropdown
                    dropdownStyle="split"
                    placeholder="Select..."
                    options={options}
                    value="v1"
                />
                <br /><br />

                <p><strong>Text</strong></p>
                <Button
                    dropdown
                    dropdownStyle="text"
                    options={options}
                >
                    All Devices
                </Button>
                <br /><br />

                <p><strong>Icon</strong></p>
                <Button
                    dropdown
                    dropdownStyle="text"
                    options={options}
                    customedValueRenderer={(option) => {
                        return (
                            <div>
                                <i className="fa fa-database" />
                                <span>{option.label}</span>
                            </div>
                        );
                    }}
                >
                    All Devices
                </Button>

                <p><strong>Sizes</strong></p>
                <Button btnSize="large" dropdown>Large</Button>
                <Button btnSize="medium" dropdown>Default</Button>
                <Button btnSize="small" dropdown>Small</Button>
                <Button btnSize="extra-small" dropdown>Extra Small</Button>
            </div>
        </div>
    );
};
