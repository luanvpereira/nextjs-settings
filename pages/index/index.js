import React from 'react';
import Head from 'next/head';

import { getTrendingRepositories } from '../../actions/github';
import TrendingReposContainer from '../../components/trending-repos-container';

class Home extends React.PureComponent {
    static async getInitialProps({ store: { dispatch } }) {
        await dispatch(getTrendingRepositories());
    }

    render() {
        return (
            <>
                <Head>
                    <title>Home</title>
                </Head>
                <TrendingReposContainer />
            </>
        );
    }
};

export default Home;