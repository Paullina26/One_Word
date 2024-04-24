import { GlobalContext } from 'utils/GlobalContext';
import { useContext, FC, useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as S from 'components/Navigation/StyleNavigation';
import { routes } from 'data/routes';

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
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [animateLinks, setAnimateLinks] = useState(false);

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

  const sectionNavigation = {
    Learning: [
      {
        to: `${routes.LEARN_TODAYS_WORD.to}`,
        name: `${routes.LEARN_TODAYS_WORD.name}`,
      },
      {
        to: `${routes.LEARN_HANGMAN.to}`,
        name: `${routes.LEARN_HANGMAN.name}`,
      },
      {
        to: `${routes.LEARN_TRANSLATE.to}`,
        name: `${routes.LEARN_TRANSLATE.name}`,
      },
      {
        to: `${routes.LEARN_FLASHCARD.to}`,
        name: `${routes.LEARN_FLASHCARD.name}`,
      },
      {
        to: `${routes.LEARN_REPEAT.to}`,
        name: `${routes.LEARN_REPEAT.name}`,
      },
    ],
    Settings: [
      {
        to: `${routes.SETTINGS_ADD_WORDS.to}`,
        name: `${routes.SETTINGS_ADD_WORDS.name}`,
      },
      {
        to: `${routes.SETTINGS_LEARNING.to}`,
        name: `${routes.SETTINGS_LEARNING.name}`,
      },
      {
        to: `${routes.SETTINGS_USER.to}`,
        name: `${routes.SETTINGS_USER.name}`,
      },
    ],
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
      <S.WrapperNav>
        {Object.keys(sectionNavigation).map(section => (
          <>
            <S.NavigationElementTitle onClick={() => toggleSection(section)}>
              {section}
            </S.NavigationElementTitle>
            {activeSection === section && renderLinks(section as keyof SectionNavigation)}
          </>
        ))}
      </S.WrapperNav>
    </S.NavigationWrapper>
  );
};

export default Navigation;
