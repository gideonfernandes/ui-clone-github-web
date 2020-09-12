import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'gideonfernandes'}
            name={'Gideon Fernandes'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/62628971?v=4'}
            followers={560}
            following={8}
            company={'Lince Net'}
            location={'Araras/SP, Brasil'}
            email={'gideon.de.fernandes@gmail.com'}
            blog={'linkedin.com/in/gideonfernandes'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
