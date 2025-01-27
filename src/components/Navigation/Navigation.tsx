import React, { FC, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { baseNavigation, chatNavigation } from '@data/NavigationElements';
import LogOut from '@components/LogOut/LogOut';
import * as S from '@components/Navigation/StyleNavigation';
import { useUserStore } from '@utils/store/userStore';

interface NavigationProps {
  isOpenMenu: boolean;
}

interface NavItem {
  to: string;
  name: string;
}

interface SectionNavigation {
  Learning: NavItem[];
  Settings: NavItem[];
}

export const Navigation: FC<NavigationProps> = ({ isOpenMenu }) => {
  const location = useLocation();
  const { user } = useUserStore();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [animateLinks, setAnimateLinks] = useState(false);

  const chatNav = user?.isAi ? [chatNavigation] : [];

  const sectionNavigation = {
    Learning: [...baseNavigation.Learning, ...chatNav],
    Settings: baseNavigation.Settings,
  };

  const toggleSection = (sectionNavigation: string) => {
    setActiveSection(prev => {
      if (prev === sectionNavigation) {
        return null;
      } else {
        setAnimateLinks(false);
        setTimeout(() => {
          setAnimateLinks(true);
        }, 10);
        return sectionNavigation;
      }
    });
  };

  useEffect(() => {
    if (isOpenMenu) {
      setAnimateLinks(false);
      setTimeout(() => {
        setAnimateLinks(true);
      }, 10);

      for (const section in sectionNavigation) {
        if (
          sectionNavigation[section as keyof SectionNavigation].some(
            item => item.to === location.pathname
          )
        ) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection(null);
    } else {
      setAnimateLinks(false);
    }
  }, [isOpenMenu, location.pathname]);

  const renderLinks = (sectionKey: keyof SectionNavigation) => {
    return sectionNavigation[sectionKey].map((item, index) => {
      return (
        <S.StyledLink
          key={item.name}
          to={item.to}
          data-hover={item.name}
          $index={index}
          $isOpenMenu={isOpenMenu}
          $animateLinks={animateLinks}
        >
          <p>{item.name}</p>
        </S.StyledLink>
      );
    });
  };

  return (
    <S.NavigationWrapper $isOpenMenu={isOpenMenu}>
      <LogOut />
      <S.WrapperNav>
        {Object.keys(sectionNavigation).map(section => (
          <React.Fragment key={section}>
            <S.NavigationElementTitle onClick={() => toggleSection(section)}>
              {section}
            </S.NavigationElementTitle>
            {activeSection === section && renderLinks(section as keyof SectionNavigation)}
          </React.Fragment>
        ))}
      </S.WrapperNav>
    </S.NavigationWrapper>
  );
};

export default Navigation;
