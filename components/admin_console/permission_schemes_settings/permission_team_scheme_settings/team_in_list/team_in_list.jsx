// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import TeamIcon from 'components/widgets/team_icon/team_icon';

import {imageURLForTeam} from 'utils/utils';

export default class TeamInList extends React.Component {
    static propTypes = {
        team: PropTypes.object.isRequired,
        onRemoveTeam: PropTypes.func,
    }

    render() {
        const team = this.props.team;
        return (
            <div
                className='team'
                key={team.id}
            >
                <div className='team-info-block'>
                    <TeamIcon
                        name={team.display_name}
                        url={imageURLForTeam(team)}
                    />
                    <div className='team-data'>
                        <div className='title'>{team.display_name}</div>
                    </div>
                </div>
                <a
                    className='remove'
                    onClick={() => this.props.onRemoveTeam(team.id)}
                >
                    <FormattedMessage
                        id='admin.permissions.teamScheme.removeTeam'
                        defaultMessage='Remove'
                    />
                </a>
            </div>
        );
    }
}
