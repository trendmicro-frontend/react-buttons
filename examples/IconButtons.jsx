import React from 'react';
import { Button } from '../src';
import Loader from './Loader';

export default () => {
    return (
        <div>
            <h4>Icon Buttons</h4>
            <div>
                <p><strong>Static (default)</strong></p>
                <Button>
                    <i className="fa fa-download" />
                    Download
                </Button>
                <Button btnStyle="primary">
                    <i className="fa fa-plus" />
                    Add Account
                </Button>
                <br /><br />

                <p><strong>Progressing</strong></p>
                <Button disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
                <Button btnStyle="primary" disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
                <br /><br />

                <p><strong>Static (flat)</strong></p>
                <Button btnStyle="flat">
                    <i className="fa fa-wrench" />
                    Settings
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-trash" />
                    Remove
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-repeat" />
                    Refresh
                </Button>
                <br /><br />

                <p><strong>Icon</strong></p>
                <Button compact>
                    <i className="fa fa-comment" />
                </Button>
                <Button btnStyle="primary" compact>
                    <i className="fa fa-plus" />
                </Button>
                <Button btnStyle="emphasis" compact>
                    <i className="fa fa-search" />
                </Button>
                <Button btnStyle="flat" compact>
                    <i className="fa fa-cog" />
                </Button>
            </div>
        </div>
    );
};
