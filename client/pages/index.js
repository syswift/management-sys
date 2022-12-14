import buildClient from '../api/build-client';

const mainPage = ({currentUser}) => {

    return <h1 className='head1'>{currentUser !== null ? 'Already logined' : 'Not login'}</h1>;
};

mainPage.getInitialProps = async (context) => {

    const {data} = await buildClient(context).get('/api/auth/currentuser');

    return data;
};

export default mainPage;