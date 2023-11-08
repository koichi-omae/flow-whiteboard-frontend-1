import Image, { StaticImageData } from 'next/image';

export interface FolderProps {
  text: string;
  isOpen: boolean;
  onClick: () => void;
  Image: ImgaeProps;
}

interface ImgaeProps {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

export const baseId = 'common-part-folder';

export const Folder: React.FC<FolderProps> = ({ ...props }) => (
  <button data-testid={baseId + '-button'} className='sidebar-folder'>
    <span
      data-testid={baseId + '-span'}
      className={`triangle-style duration-150 ${props.isOpen ? ' -rotate-90' : ''}`}
    >
      ▼
    </span>
    <Image
      data-testid={baseId + '-image'}
      src={props.Image.src}
      alt={props.Image.alt}
      width={props.Image.width}
      height={props.Image.height}
      className={props.Image.className}
    />
    {props.text}
  </button>
);
