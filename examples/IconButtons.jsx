import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Buttons with an Icon</h4>
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
                    <i className="fa fa-circle-o-notch fa-spin" />
                    Uploading
                </Button>
                <Button btnStyle="primary" disabled>
                    <i className="fa fa-circle-o-notch fa-spin" />
                    Uploading
                </Button>
                <br /><br />

                <p><strong>Static (flat)</strong></p>
                <Button btnStyle="flat">
                    <i className="fa fa-pencil fa-fw" />
                    Edit
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-trash-o fa-fw" />
                    Delete
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-book fa-fw" />
                    Library
                </Button>
                <br /><br />

                <p><strong>Icon only</strong></p>
                <Button iconOnly>
                    <i className="fa fa-comment" />
                </Button>
                <Button btnStyle="primary" iconOnly>
                    <i className="fa fa-plus" />
                </Button>
                <Button btnStyle="emphasis" iconOnly>
                    <i className="fa fa-search" />
                </Button>
                <Button btnStyle="flat" iconOnly>
                    <i className="fa fa-cog" />
                </Button>
            </div>
        </div>
    );
};
