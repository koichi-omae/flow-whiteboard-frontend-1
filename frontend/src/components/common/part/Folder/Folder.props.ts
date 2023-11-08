import { FolderProps } from './';
import FolderIcon from '~/img/folder-icon.png';

const isOpenFalseProps: FolderProps = {
  text: 'Folder',
  isOpen: false,
  onClick: () => {
    console.log('Folder clicked');
  },
  Image: {
    src: FolderIcon,
    alt: 'Folder Icon',
    width: 20,
    height: 20,
    className: 'mr-1',
  },
};

const isOpenTrueProps: FolderProps = {
  text: 'Folder',
  isOpen: true,
  onClick: () => {
    console.log('Folder clicked');
  },
  Image: {
    src: FolderIcon,
    alt: 'Folder Icon',
    width: 20,
    height: 20,
    className: 'mr-1',
  },
};
export const propObj: { [key: string]: FolderProps } = {
  isOpenFalse: isOpenFalseProps,
  isOpenTrue: isOpenTrueProps,
};
