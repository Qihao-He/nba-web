import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

class SearchBar extends Component {

    state = {
        dataSource: [],
    };

    handleSearch = (value) => {
        console.log(value);
        const players = nba.searchPlayers(value);
        console.log(players);

        // this.setState({
        //     dataSource: !value ?
        //         [] : nba.searchPlayers(value).map(player => ({
        //             fullName: player.fullName,
        //             playerId: player.playerId,
        //         }))
        // })
    };

    render() {
        const { dataSource } = this.state;
        const options = dataSource.map((player) => (
            <Option key={player.fullName} value={player.fullName}  className="player-option">
                <img className="player-option-image"  src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));

        return (
            <div className="global-search-wrapper" style={{ width: 300 }}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    dataSource={dataSource}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;