import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Drop-down Buttons</h4>
            <p>Use a drop-down menu to provide a list of options for the user.</p>
            <div>
                <p><strong>Single</strong></p>
                <Button
                    dropdown
                    placeholder="Select..."
                    options={[
                        { label: 'Action', value: 'v1' },
                        { label: 'Another action', value: 'v2' },
                        { label: 'Something else here', value: 'v3' }
                    ]}
                    onChange={(selectedOption) => {
                        if (selectedOption) {
                            console.log('label =' + selectedOption.label + ', value = ' + selectedOption.value);
                        }
                    }}
                />
            </div>
            <div>
                <p><strong>Split</strong></p>
                <Button
                    dropdown
                    dropdownStyle="split"
                    placeholder="Select..."
                    options={[
                        { label: 'Action', value: 'v1' },
                        { label: 'Another action', value: 'v2' },
                        { label: 'Something else here', value: 'v3' }
                    ]}
                    value="v1"
                />
            </div>
            <br /><br />
            <div>
                <p><strong>Fixed width</strong></p>
                <Button
                    dropdown
                    placeholder="Select..."
                    options={[
                        { label: 'Action', value: 'v1' },
                        { label: 'Another action', value: 'v2' },
                        { label: 'Something else here', value: 'v3' }
                    ]}
                    value="v1"
                    fixedWidth={true}
                />
            </div>
            <br /><br />
            <div>
                <p><strong>Text</strong></p>
                <Button
                    dropdown
                    dropdownStyle="text"
                    options={[
                        { label: 'Action', value: 'v1' },
                        { label: 'Another action', value: 'v2' },
                        { label: 'Something else here', value: 'v3' }
                    ]}
                >
                    All Devices
                </Button>
            </div>
            <div>
                <p><strong>Icon</strong></p>
                <Button
                    dropdown
                    dropdownStyle="text"
                    options={[
                        { label: 'Action', value: 'v1' },
                        { label: 'Another action', value: 'v2' },
                        { label: 'Something else here', value: 'v3' }
                    ]}
                    value="v1"
                    customedValueRenderer={(option) => {
                        return (
                            <div>
                                <i className="fa fa-database" />
                                <span>{option.label}</span>
                            </div>
                        );
                    }}
                />
            </div>
            <br /><br />
            <div>
                <p><strong>Sizes</strong></p>
                <Button btnSize="large" dropdown>Large</Button>
                <Button btnSize="medium" dropdown>Default</Button>
                <Button btnSize="small" dropdown>Small</Button>
                <Button btnSize="extra-small" dropdown>Extra Small</Button>
            </div>
        </div>
    );
};
