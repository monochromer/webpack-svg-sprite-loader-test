import { getSpriteInfo, createIcon } from './utils';
import IconBell   from './icons/bell.svg';
import IconHome   from './icons/home.svg';
import IconLogin  from './icons/login.svg';
import IconMenu   from './icons/menu.svg';
import IconSearch from './icons/search.svg';
import IconTrash  from './icons/trash.svg';
import IconUser   from './icons/user.svg';

getSpriteInfo(IconBell);
getSpriteInfo(IconHome);

[
  IconBell,
  IconHome,
  IconLogin,
  IconMenu,
  IconSearch,
  IconTrash,
  IconUser
]
  .map(createIcon)
  .map(icon => document.body.append(icon));