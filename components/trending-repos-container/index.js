import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TrendingReposContainer extends React.PureComponent {
    static propTypes = {
        repos: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            repo: PropTypes.shape({
                name: PropTypes.string,
                description: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        }))
    }

    render() {
        const { repos } = this.props;

        return (
            <>
                {repos.map((repos) => <div>{repos.username}</div>)}
            </>
        );
    }
}

const mapStateToProps = (
    {
        gitHub: {
            repositories: repos
        }
    }
) => ({
    repos
});

export default connect(mapStateToProps)(TrendingReposContainer);