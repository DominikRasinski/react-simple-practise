import { LinksList } from './linksList';

type MenuForLabProps = {
  children?: React.ReactNode;
};

const MenuForLab = (props: MenuForLabProps) => {
  const { children } = props;

  return (
    <div>
      <h1>Menu</h1>
      {children && children}
    </div>
  );
};

export function MenuForLabStructure() {
  return (
    <MenuForLab>
      <LinksList />
    </MenuForLab>
  );
}
