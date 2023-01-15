import Image from "next/legacy/image";
import Title from './ui/Title';
import { MdShoppingCart } from 'react-icons/md';

const CampaignItem = ({image, title, discount}) => {
  return (
    <div className='bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
      <div className='relative md:w-44 md:h-44 w-36 h-36 border-4 border-primary rounded-full overflow-hidden'>
        <Image
          src={ image }
          alt={ title }
          layout='fill'
          className='hover:scale-105 transition-all'
          objectFit='cover'
          priority
        />
      </div>
      <div className='text-white'>
        <Title addClass='text-2xl'>{ title }</Title>
        <div className='font-dancing my-1'>
          <span className='text-[40px]'>{ discount }</span>
          <span className='text-sm inline-block ml-1'>Off</span>
        </div>
        <button className='btn-primary flex items-center gap-x-2'>
          Order Now <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className='flex justify-between px-5 mx-auto xl:container py-20 gap-6 flex-wrap'>
      <CampaignItem image='/images/campaign-hamburger.jpeg' title='Hamburger' discount='15%'/>
      <CampaignItem image='/images/campaign-pizza.jpeg' title='Pizza' discount='20%'/>
    </div>
  );
};

export default Campaigns;