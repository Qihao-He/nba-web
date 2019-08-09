import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';

class SearchBar extends Component {
    render() {
        return (
            <div className="global-search-wrapper" style={{ width: 300 }}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    // dataSource={dataSource.map(renderOption)}
                    // onSelect={onSelect}
                    // onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                >
                    <Input
                        suffix={
                            <Button
                                className="search-btn"
                                style={{ marginRight: -12 }}
                                size="large"
                                type="primary"
                            >
                                <Icon type="search" />
                            </Button>
                        }
                    />
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;