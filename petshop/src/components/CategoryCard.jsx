import { Link } from 'react-router-dom';

const CategoryCard = ({ titulo, icone, cor, link }) => {
  return (
    <Link to={link} className={`${cor} p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform shadow-sm`}>
      <span className="text-5xl">{icone}</span>
      <h3 className="font-bold text-xl text-gray-800">{titulo}</h3>
    </Link>
  );
};

export default CategoryCard;