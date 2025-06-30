import ShopTitle from './ShopTitle/ShopTitle';
import SearchInput from './SearchInput/SearchInput';
import RegisterForm from './RegisterForm/RegisterForm';
import CategoryList from './CategoryList/CategoryList';
import SortByPrice from './SortByPrice/SortByPrice';
import ProductCard from './ProductCard/ProductCard';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import ActionButtons from './ActionButtons/ActionButtons';
import FavoritesList from './FavoritesList/FavoritesList';
import MainInfo from './MainInfo/MainInfo';
import ProductDescription from './ProductDescription/ProductDescription';
import DetailsButton from './DetailsButton/DetailsButton';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import MenuButtons from './MenuButtons/MenuButtons';
import SocialButtons from './SocialButtons/SocialButtons';
import FooterInformation from './FooterInformation/FooterInformation';



function App() {
  return (
    <div>
      <ShopTitle />
      <MainInfo />
      <ActionButtons />
      <SearchInput />
      <FavoritesList />
      <RegisterForm />
      <MenuButtons />
      <CategoryList />
      <SortByPrice />
      <ProductCard />
      <ProductDescription />
      <DetailsButton />
      <AddToCartButton />
      <LoadMoreButton />
      <SocialButtons />
      <FooterInformation />
    </div>
  );
}

export default App;