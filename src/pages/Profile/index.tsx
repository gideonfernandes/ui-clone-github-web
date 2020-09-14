import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repositories,
  CalendarHeading,
  Tab,
  RepoIcon,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepositoryCard from '../../components/RepositoryCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">26</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
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

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repositories>
            <h2>Repositórios aleatórios</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(number => (
                <RepositoryCard
                  key={number}
                  username={'gideonfernandes'}
                  reponame={'contact-keeper'}
                  description={'Create an account & store your contact list'}
                  language={number % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repositories>

          <CalendarHeading>
            Calendário aleatório (não representa os dados atuais)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
